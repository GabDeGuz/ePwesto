# Validated local commit

The Lead Agent may use `node scripts/task/validated-commit.mjs` only after the
eligibility review in [LEAD-AGENT-PROTOCOL.md](../../docs/orchestration/LEAD-AGENT-PROTOCOL.md).

Example:

```text
node scripts/task/validated-commit.mjs --task EPW-033 --type chore --summary "add commit guard" --files scripts/task/example.mjs --confirm
```

The exact allowlist must equal the entire changed-file set. The command runs
repository validation and `git diff --check`, then creates one local commit only.
It does not push, merge, deploy, amend, rebase, reset, or alter Git configuration.
