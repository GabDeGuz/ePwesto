# Repository verification

Run the applicable command from the repository root:

```text
node scripts/verify/repository.mjs
node scripts/verify/web.mjs
node scripts/verify/mobile.mjs
node scripts/verify/all.mjs
```

The repository check requires Node.js and Git. The web check uses PHP, Composer,
and npm; it automatically uses the ignored workspace-local toolchain when one
exists. The mobile check uses npm. None accesses MySQL. See
[TESTING.md](../../docs/TESTING.md) for scope and limits.
