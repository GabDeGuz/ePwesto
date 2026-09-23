import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const mobile = resolve(import.meta.dirname, '../../apps/mobile');
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const run = (args) => {
  const result = spawnSync(npm, args, { cwd: mobile, stdio: 'inherit', shell: process.platform === 'win32' });
  if (result.status !== 0) process.exit(result.status ?? 1);
};

run(['run', 'typecheck']);
run(['test']);
run(['run', 'lint']);
run(['run', 'config:check']);
run(['audit', '--omit=dev']);
