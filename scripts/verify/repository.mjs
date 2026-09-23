import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { extname, resolve, dirname } from 'node:path';

const git = (args, encoding = 'utf8') => execFileSync('git', args, { encoding });
const nulFiles = (args) => git(args, 'buffer').toString('utf8').split('\0').filter(Boolean);
const trackedFiles = nulFiles(['ls-files', '-z']);
const trackableFiles = nulFiles(['ls-files', '--cached', '--others', '--exclude-standard', '-z']);
const binaryExtensions = new Set(['.gif', '.ico', '.jpeg', '.jpg', '.pdf', '.png', '.ttf', '.webp', '.woff', '.woff2']);
const failures = [];

const check = (name, callback) => {
  try {
    callback();
    console.log(`PASS: ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
    console.error(`FAIL: ${name}: ${error.message}`);
  }
};

const textFiles = () => trackableFiles.filter((file) => {
  if (binaryExtensions.has(extname(file).toLowerCase())) return false;
  const contents = readFileSync(file);
  return !contents.includes(0);
});

console.log('Repository hygiene validation');

check('Git whitespace', () => {
  git(['diff', '--check']);
  git(['diff', '--cached', '--check']);
});

check('Trailing whitespace', () => {
  const findings = [];
  for (const file of textFiles()) {
    readFileSync(file, 'utf8').split(/\r?\n/).forEach((line, index) => {
      if (/[\t ]+$/.test(line)) findings.push(`${file}:${index + 1}`);
    });
  }
  if (findings.length) throw new Error(findings.join(', '));
});

check('Protected tracked paths', () => {
  const prohibited = trackedFiles.filter((file) => {
    const parts = file.split('/');
    const base = parts.at(-1);
    const environmentFile = /^\.env(?:\..+)?$/i.test(base) && !/\.example$/i.test(base);
    return environmentFile || parts.some((part) => ['node_modules', 'vendor', '.expo', 'coverage', 'dist', 'build'].includes(part)) || file.startsWith('artifacts/');
  });
  const allowedArtifactPolicies = new Set(['artifacts/.gitignore', 'artifacts/README.md']);
  const violations = prohibited.filter((file) => !allowedArtifactPolicies.has(file));
  if (violations.length) throw new Error(violations.join(', '));
});

check('Markdown local links', () => {
  const findings = [];
  for (const file of trackableFiles.filter((item) => item.toLowerCase().endsWith('.md'))) {
    const contents = readFileSync(file, 'utf8');
    for (const match of contents.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
      let target = match[1].trim();
      if (target.startsWith('<') && target.endsWith('>')) target = target.slice(1, -1);
      if (/^(?:https?:|mailto:|tel:|#)/i.test(target)) continue;
      target = target.split('#', 1)[0].split('?', 1)[0];
      if (!target) continue;
      try { target = decodeURIComponent(target); } catch { findings.push(`${file}: invalid link ${match[1]}`); continue; }
      if (!existsSync(resolve(dirname(file), target))) findings.push(`${file}: missing ${match[1]}`);
    }
  }
  if (findings.length) throw new Error(findings.join(', '));
});

check('High-confidence secret patterns', () => {
  const patterns = [
    /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/,
    /\b(?:ghp|gho|ghu|ghs|github_pat)_[A-Za-z0-9_]{20,}\b/,
    /\bAKIA[0-9A-Z]{16}\b/,
    /\bAIza[0-9A-Za-z_-]{35}\b/,
    /https?:\/\/[^\s/:]+:[^\s/@]+@[^\s]+/,
  ];
  const findings = [];
  for (const file of textFiles()) {
    const contents = readFileSync(file, 'utf8');
    if (patterns.some((pattern) => pattern.test(contents))) findings.push(`${file}: credential-like value`);
    contents.split(/\r?\n/).forEach((line, index) => {
      const match = line.match(/^\s*(?:export\s+)?[A-Z0-9_]*(?:API_KEY|ACCESS_TOKEN|AUTH_TOKEN|CLIENT_SECRET|PASSWORD|PRIVATE_KEY)\s*=\s*([^#\s].*)$/i);
      if (!match) return;
      const value = match[1].trim().replace(/^['"]|['"]$/g, '');
      if (!/^(?:null|tbd|todo|your_|change_me|example|placeholder|test|dummy)/i.test(value)) findings.push(`${file}:${index + 1}: sensitive assignment`);
    });
  }
  if (findings.length) throw new Error(findings.join(', '));
});

if (failures.length) {
  console.error(`\nRepository hygiene failed (${failures.length} check(s)).`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: repository hygiene');
}
