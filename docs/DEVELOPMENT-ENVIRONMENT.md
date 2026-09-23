# Development Environment and Fresh-clone Guide

## Current local baseline

Node 24.18.0, PHP 8.3.35, Composer 2.10.3, Laravel 13, and React Native 0.87
were used for local validation. PHP/Composer may be supplied by the host or an
ignored local `.tools/` directory; `.tools/` is not a committed runtime.

## Intended fresh-clone procedure

1. Install approved PHP/Composer and Node/npm versions from ADR-0001. Before
   installing application dependencies, verify that `php --version`,
   `composer --version`, `node --version`, and `npm --version` work in the
   intended shell.
2. If PHP or Composer is intentionally supplied outside `PATH`, set `PHP_BIN`
   to the PHP executable and `COMPOSER_BIN` to either the Composer executable
   or Composer PHAR for that shell. These are local environment settings, not
   repository configuration. An ignored workspace-local `.tools/` directory is
   also supported when it contains the documented PHP/Composer executables.
3. Clone the repository and check out the approved task branch.
4. Run `composer install` and `npm ci --ignore-scripts` in `apps/web`.
5. Run `npm ci --ignore-scripts` in `apps/mobile`.
6. Create only ignored local environment settings as documented by each app.
7. Run `node scripts/verify/all.mjs`.

The mobile bootstrap and validation were exercised in an isolated clone on
2026-09-23 using its lockfile. Web dependency installation was also exercised
there; complete web validation requires a PHP/Composer toolchain in the fresh
environment (or the documented `PHP_BIN`/`COMPOSER_BIN` overrides). This
procedure has not been proven on a separate fresh machine.

It does not configure MySQL, emulators, Android SDK, Xcode, staging, or secrets.
