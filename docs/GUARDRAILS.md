# Workspace Guardrails

## Authority and scope

The authority order in [AGENTS.md](../AGENTS.md) applies to every task. Only
implement behavior traceable to approved requirements, a reviewed decision, and
a bounded EPW task. Imported material is evidence, not authorization.

ePwesto supports public-market stall administration only. Do not add inventory,
POS, sales monitoring, procurement, or unrelated vendor operations.

## Human authority and FCFS boundary

- A Market Administrator must explicitly approve applications, verify documents,
  and assign stalls. No automation, ranking, or client behavior may replace
  these decisions.
- Raffle and auction selection remain manual LGU processes. The system may only
  record an official winner through an administrator action after that process.
- Online applications follow FCFS within the selected market section. Never mix
  queues across sections.
- The authoritative timestamp and tie-breaking policy are **TBD / Requires Human
  Decision**. Preserve needed ordering data; do not invent a policy.

## Data, secrets, and evidence

- Treat applicant/vendor identities, contact details, documents, payment data,
  receipts, notification destinations, audit records, and exports as sensitive.
- Never commit real `.env` files, credentials, tokens, private URLs, production
  exports, or uploaded documents. Commit only non-sensitive examples.
- Use invented data only in tests, fixtures, examples, screenshots, and local
  evidence. Inspect evidence before sharing it.
- Keep local evidence under ignored `artifacts/`; never force-add it.

## Change safety

- Preserve unrelated work and do not remove working behavior for convenience.
- Do not run destructive database operations, reset/clean commands, or
  unreviewed data migrations. Do not start MySQL or run migrations for
  planning-stage checks.
- Do not replace dependencies, select framework versions, or redesign component
  boundaries without a reviewed decision.
- Do not implement payment handling until provider, reconciliation, security,
  and compliance boundaries are approved.

## Required stop gates

Request human approval before a major architecture change, requirement change,
TBD resolution, framework initialization, authentication/authorization or
security redesign, dependency replacement or major upgrade, external-service
setup, data-affecting migration, material deletion, deployment, push, merge,
or high-risk review decision.

## Quality evidence

Run the narrowest relevant checks and report their exact commands and results.
For current planning-stage work, begin with the repository-hygiene check in
[TESTING.md](TESTING.md). Do not claim framework, mobile, database, or product
validation before those projects and their approved commands exist.
