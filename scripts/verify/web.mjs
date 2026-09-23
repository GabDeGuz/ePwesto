import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '../..');
const web = resolve(root, 'apps/web');
const localPhp = resolve(root, '.tools/php/php.exe');
const localComposer = resolve(root, '.tools/composer/composer.phar');
const php = process.env.PHP_BIN || (existsSync(localPhp) ? localPhp : 'php');
const composer = process.env.COMPOSER_BIN || (existsSync(localComposer) ? [php, localComposer] : ['composer']);
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const run = (command, args) => {
  const result = spawnSync(command, args, { cwd: web, stdio: 'inherit', shell: process.platform === 'win32' && command === npm });
  if (result.status !== 0) process.exit(result.status ?? 1);
};

run(composer[0], [...composer.slice(1), 'validate', '--strict']);
run(composer[0], [...composer.slice(1), 'audit', '--locked']);
run(composer[0], [...composer.slice(1), 'run', 'format:check']);
run(php, ['artisan', 'test']);
run(npm, ['run', 'build']);
