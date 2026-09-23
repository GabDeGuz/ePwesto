# Testing and Validation Strategy

## Verification commands

Run `node scripts/verify/repository.mjs` for repository-wide documentation and
harness changes; `node scripts/verify/web.mjs` for Laravel; and
`node scripts/verify/mobile.mjs` for React Native. `node scripts/verify/all.mjs`
runs all three. The repository check covers whitespace, protected paths, local
Markdown links, and high-confidence secret patterns.

Use `git status --short --branch`, `git diff --check`, and `git diff` to inspect
task state before handoff. The workflow runs the same checks with read-only
repository permissions.

## Baseline test layers

The web baseline validates Composer and locked dependency advisories, runs Pint
in check mode, generated PHPUnit tests, and a Vite production build. The mobile
baseline type-checks, runs generated Jest tests, lints, inspects public React
Native configuration, and audits production dependencies. None starts MySQL,
runs an ePwesto migration, starts a server, deploys, or uses real data.

Risk-focused behavior tests must cover server authorization, section-scoped
FCFS queue invariants, explicit administrator decisions, manual LGU
raffle/auction boundaries, document access, payment integrity, and notification
privacy when the corresponding features are approved.

## Evidence and traceability

Each bounded EPW plan must identify applicable requirements, acceptance criteria,
validation commands, and evidence. Use only synthetic data as required by
[SYNTHETIC-DATA.md](SYNTHETIC-DATA.md). A passing repository check verifies
workspace hygiene only; it does not approve a human-gated decision or prove
product behavior.
