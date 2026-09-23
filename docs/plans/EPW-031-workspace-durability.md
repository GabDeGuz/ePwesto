# EPW-031: Workspace durability and manual delivery lifecycle

Status: Completed pending human review.

## Goal

Make the initialized workspace durable for bounded human-controlled work without
claiming that GitHub, worktree, PR, CI, staging, or orchestration practices have
already been exercised.

## Scope and exclusions

Adds task lifecycle, review/evidence, module-contract, environment, UI/UX,
deployment-decision, and orchestration-readiness documentation. It does not add
product functionality, databases, deployments, cloud services, GitHub state, or
an orchestrator.

## Validation

Run `node scripts/verify/all.mjs`, `git diff --check`, and manual local-link and
ignore-rule review. Record operational practices as unproven until exercised.
