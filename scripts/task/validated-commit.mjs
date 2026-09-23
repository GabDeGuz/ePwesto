import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve, relative } from 'node:path';

const root = resolve(import.meta.dirname, '../..');
const args = process.argv.slice(2);
const value = (flag) => args[args.indexOf(flag) + 1];
const required = ['--task', '--type', '--summary', '--files'];
if (required.some((flag) => !value(flag))) throw new Error('Required: --task EPW-NNN --type <type> --summary <text> --files <comma-separated paths>.');
const task = value('--task');
const type = value('--type');
const summary = value('--summary');
const files = value('--files').split(',').map((file) => file.trim().replaceAll('\\', '/')).filter(Boolean);
const confirm = args.includes('--confirm');
const simulateBranch = value('--simulate-branch');
if (!/^EPW-\d{3}$/.test(task) || !/^(?:docs|chore|feat|fix|test|ci|refactor)$/.test(type) || !summary || !files.length) throw new Error('Invalid task, type, summary, or files.');
if (summary.includes('\n') || summary.length > 72) throw new Error('Summary must be one line and at most 72 characters.');
const git = (commandArgs, options = {}) => execFileSync('git', commandArgs, { cwd: root, encoding: 'utf8', ...options });
const branch = simulateBranch || git(['branch', '--show-current']).trim();
if (branch === 'main') throw new Error('REFUSED: validated commits never run on main.');
if (!branch) throw new Error('REFUSED: detached HEAD is not an approved task branch.');
const plan = resolve(root, 'docs/plans', `${task}-` + ({ 'EPW-033': 'validated-local-commit' }[task] ?? 'missing') + '.md');
if (!existsSync(plan) || !/^Status:\s*Approved/im.test(readFileSync(plan, 'utf8'))) throw new Error(`REFUSED: no approved matching task plan for ${task}.`);
if (files.some((file) => file.startsWith('/') || file.includes('..') || !existsSync(resolve(root, file)))) throw new Error('REFUSED: files must be existing repository-relative paths.');
const protectedPath = /(^|\/)(?:\.env(?:\.|$)|node_modules|vendor|\.tools|artifacts|coverage|dist|build|public\/build|database\/migrations|docs\/decisions|docs\/(?:SECURITY-PRIVACY|PAYMENTS|DOCUMENT-UPLOADS)\.md|apps\/web\/config\/(?:auth|database|filesystems)\.php)(?:\/|$)|(?:^|\/)(?:package-lock\.json|composer\.lock)$/i;
if (files.some((file) => protectedPath.test(file))) throw new Error('REFUSED: allowlist contains a protected/generated/dependency path.');
const changed = new Set([
  ...git(['diff', '--name-only']).trim().split(/\r?\n/),
  ...git(['diff', '--cached', '--name-only']).trim().split(/\r?\n/),
  ...git(['ls-files', '--others', '--exclude-standard']).trim().split(/\r?\n/),
].filter(Boolean).map((file) => file.replaceAll('\\', '/')));
if (!changed.size) throw new Error('REFUSED: no changes to commit.');
if ([...changed].some((file) => !files.includes(file))) throw new Error(`REFUSED: changed files are outside allowlist: ${[...changed].filter((file) => !files.includes(file)).join(', ')}`);
const run = (command, commandArgs) => {
  const result = spawnSync(command, commandArgs, { cwd: root, stdio: 'inherit', shell: false });
  if (result.status !== 0) throw new Error(`REFUSED: validation failed: ${command} ${commandArgs.join(' ')}`);
};
run('node', ['scripts/verify/repository.mjs']);
run('git', ['diff', '--check']);
const message = `${type}(${task}): ${summary}`;
console.log(`\nTask: ${task}\nBranch: ${branch}\nFiles: ${[...changed].join(', ')}\nProposed commit: ${message}`);
if (!confirm) throw new Error('REFUSED: review the summary and rerun with --confirm.');
git(['add', '--', ...files]);
try { git(['diff', '--cached', '--check']); git(['commit', '-m', message]); } catch (error) { throw new Error(`Commit failed; staged files were preserved. ${error.message}`); }
const sha = git(['rev-parse', 'HEAD']).trim();
console.log(`COMMITTED: ${sha}\nNext: independent review; optional human-approved push; PR; exact-head CI; human-approved merge.`);
