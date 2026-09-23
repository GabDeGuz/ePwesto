# EPW-033: Validated local commit workflow

Status: Approved by the current human request.

## Goal and allowed scope

Provide a manual Lead Agent command that may create one local commit only after
an exact task allowlist, validation, diff review, and explicit confirmation.

## Ownership, risk, and gates

Lead Agent owns readiness and final scope review. Implementer owns
`scripts/task/validated-commit.mjs` and this documentation. QA/Evidence runs
repository checks; Independent Reviewer is required before product-task use.
Risk: medium (local Git write). Human approval is required for any protected or
high-risk change; the command must refuse it.

## Exclusions and validation

No push, PR, merge, deploy, amend, rebase, reset, config change, deletion, or
automatic commit of unrelated changes. Validate refusal cases and repository
hygiene/diff checks.
