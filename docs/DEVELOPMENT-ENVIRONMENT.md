# Development Environment and Fresh-clone Guide

## Current local baseline

Node 24.18.0, PHP 8.3.35, Composer 2.10.3, Laravel 13, and React Native 0.87
were used for local validation. PHP/Composer may be supplied by the host or an
ignored local `.tools/` directory; `.tools/` is not a committed runtime.

## Intended fresh-clone procedure

1. Install approved PHP/Composer and Node/npm versions from ADR-0001.
2. Clone the repository and check out the approved task branch.
3. Run `composer install` and `npm ci --ignore-scripts` in `apps/web`.
4. Run `npm ci --ignore-scripts` in `apps/mobile`.
5. Create only ignored local environment settings as documented by each app.
6. Run `node scripts/verify/all.mjs`.

This procedure is documented but **not yet proven on a fresh machine or clone**.
It does not configure MySQL, emulators, Android SDK, Xcode, staging, or secrets.
