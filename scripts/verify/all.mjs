import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '../..');
for (const script of ['repository.mjs', 'web.mjs', 'mobile.mjs']) {
  const result = spawnSync('node', [resolve(root, 'scripts/verify', script)], { cwd: root, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
