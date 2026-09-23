# EPW-025: Planning-stage workspace harness

## Status

Completed pending human review. This plan documents a bounded documentation and
repository-hygiene task; it does not authorize product implementation.

## Goal

Make future ePwesto work safer and more repeatable while the repository contains
planning material only.

## Inputs and dependencies

- [Requirements baseline](../requirements/README.md)
- [Development plan](../development-plan.md)
- [Decision register](../decision-register.md)
- Human request for a proportionate workspace/harness foundation

The proposal PDF was available for inspection, but no installed local PDF text
extractor was available. Existing repository requirements were therefore
preserved rather than extended from unverified PDF text.

## Allowed scope

- Strengthen root and future application-scoped instructions.
- Add guardrail, security/privacy, synthetic-data, testing, task-plan,
  decision-record, and manual orchestration documentation.
- Add ignored local-evidence handling, a dependency-free repository check, and
  least-privilege CI that runs only that check.
- Normalize documentation links and register EPW-025 in the development plan.

## Exclusions

- Laravel or React Native initialization, dependencies, product features,
  migrations, MySQL, API contracts, payment integration, external services,
  deployment, Symphony configuration, and changes to unresolved policies.

## Acceptance criteria

1. Agents have explicit authority order, branch/main stop behavior, and human
   approval gates.
2. Guardrails preserve FCFS section queues, administrator decision points, and
   manual LGU allocation boundaries.
3. Sensitive data, secret, synthetic-data, evidence, and testing expectations
   are documented without treating TBDs as approved.
4. A Node-only hygiene command runs successfully without application setup.
5. CI has only the validated hygiene job and read-only repository permissions.
6. Task planning, decision recording, and manual coordination conventions remain
   advisory and do not introduce an orchestrator.

## Validation

- `node --check scripts/verify/repository.mjs`
- `node scripts/verify/repository.mjs`
- `git diff --check`
- `git status --short --branch`
- Manual inspection of Markdown links, ignore rules, and workflow structure.

## Human review and follow-up

Review the new governance baseline before treating it as durable policy. EPW-001
remains the next product-planning task; EPW-002 must decide technical boundaries
before either application is initialized. Symphony remains deferred until bounded
single-agent tasks, review, and worktree conventions have been exercised.
