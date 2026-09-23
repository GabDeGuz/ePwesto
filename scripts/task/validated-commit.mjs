import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';

const root = resolve(process.env.EPW_ROOT || resolve(import.meta.dirname, '../..'));
const args = process.argv.slice(2);
const value = (flag) => args[args.indexOf(flag) + 1];
const git = (commandArgs) => execFileSync('git', commandArgs, { cwd: root, encoding: 'utf8' });
const lines = (text) => text.trim().split(/\r?\n/).filter(Boolean).map((file) => file.replaceAll('\\', '/'));
const protectedPath = /(^|\/)(?:\.env(?:\.|$)|node_modules|vendor|\.tools|artifacts|coverage|dist|build|public\/build|database\/migrations|docs\/decisions|docs\/(?:SECURITY-PRIVACY|PAYMENTS|DOCUMENT-UPLOADS)\.md|apps\/web\/config\/(?:auth|database|filesystems)\.php)(?:\/|$)|(?:^|\/)(?:package-lock\.json|composer\.lock)$/i;
const task = value('--task');
const qaRecordArg = value('--qa-record');
let type = value('--type'); let summary = value('--summary');
let files = value('--files')?.split(',').map((file) => file.trim().replaceAll('\\', '/')).filter(Boolean);
if (!/^EPW-\d{3}$/.test(task)) throw new Error('Required: --task EPW-NNN.');
const branch = git(['branch', '--show-current']).trim();
if (branch === 'main') throw new Error('REFUSED: validated commits never run on main.');
if (!branch) throw new Error('REFUSED: detached HEAD is not an approved task branch.');
const plans = readdirSync(resolve(root, 'docs/plans')).filter((name) => name.startsWith(`${task}-`) && name.endsWith('.md'));
if (!plans.some((name) => /^Status:\s*Approved/im.test(readFileSync(resolve(root, 'docs/plans', name), 'utf8')))) throw new Error(`REFUSED: no approved matching task plan for ${task}.`);
if (qaRecordArg) {
  const record = resolve(root, qaRecordArg); const records = resolve(root, 'artifacts', 'qa-approvals');
  if (!record.startsWith(`${records}${sep}`) || !existsSync(record)) throw new Error('REFUSED: QA record must be an existing artifacts/qa-approvals JSON file.');
  let qa; try { qa = JSON.parse(readFileSync(record, 'utf8')); } catch { throw new Error('REFUSED: QA record is not valid JSON.'); }
  if (qa.schema !== 'epwesto.qa-approval/v1' || qa.status !== 'APPROVED') throw new Error('REFUSED: QA record is not APPROVED.');
  if (qa.task !== task || qa.branch !== branch) throw new Error('REFUSED: QA record task or branch does not match.');
  if (!qa.implementer || !qa.qaAgent || qa.implementer === qa.qaAgent) throw new Error('REFUSED: QA must be independent from the implementer.');
  if (!Array.isArray(qa.files) || !qa.files.length || !Array.isArray(qa.validation) || !qa.validation.length || !qa.validation.every((item) => item.command && item.result === 'PASS') || Number.isNaN(Date.parse(qa.date))) throw new Error('REFUSED: incomplete QA record.');
  if (!qa.commit || !/^(?:docs|chore|feat|fix|test|ci|refactor)$/.test(qa.commit.type) || typeof qa.commit.summary !== 'string') throw new Error('REFUSED: QA record lacks approved commit metadata.');
  type = qa.commit.type; summary = qa.commit.summary; files = qa.files.map((file) => String(file).replaceAll('\\', '/'));
}
if (!/^(?:docs|chore|feat|fix|test|ci|refactor)$/.test(type) || !summary || !files?.length || summary.includes('\n') || summary.length > 72) throw new Error('REFUSED: invalid commit metadata or allowlist.');
if (new Set(files).size !== files.length || files.some((file) => file.startsWith('/') || file.includes('..') || !existsSync(resolve(root, file)))) throw new Error('REFUSED: allowlist must contain unique existing repository-relative paths.');
if (files.some((file) => protectedPath.test(file))) throw new Error('REFUSED: protected/high-risk path requires human approval; automatic commit is unavailable.');
const changed = new Set([...lines(git(['diff', '--name-only'])), ...lines(git(['diff', '--cached', '--name-only'])), ...lines(git(['ls-files', '--others', '--exclude-standard']))]);
if (!changed.size) throw new Error('REFUSED: no changes to commit.');
if (changed.size !== files.length || [...changed].some((file) => !files.includes(file))) throw new Error(`REFUSED: changed-file set does not exactly match allowlist: ${[...changed].join(', ')}`);
const run = (command, commandArgs) => { const result = spawnSync(command, commandArgs, { cwd: root, stdio: 'inherit' }); if (result.status !== 0) throw new Error(`REFUSED: validation failed: ${command} ${commandArgs.join(' ')}`); };
run('node', ['scripts/verify/repository.mjs']); run('git', ['diff', '--check']);
const message = `${type}(${task}): ${summary}`;
console.log(`\nTask: ${task}\nBranch: ${branch}\nFiles: ${[...changed].join(', ')}\nProposed commit: ${message}`);
if (!qaRecordArg && !args.includes('--confirm')) throw new Error('REFUSED: review the summary and rerun with --confirm.');
git(['add', '--', ...files]);
try { git(['diff', '--cached', '--check']); git(['commit', '-m', message]); } catch (error) { throw new Error(`Commit failed; staged files were preserved. ${error.message}`); }
const sha = git(['rev-parse', 'HEAD']).trim();
console.log(`COMMITTED: ${sha}\nQA approval is not independent review, human approval, push, PR, merge, or deployment.`);
