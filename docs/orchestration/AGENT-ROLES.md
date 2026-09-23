# Manual Agent Roles and Handoffs

## Role contracts

The Human owner approves requirements, durable decisions, high-risk actions,
deployment, and merge. The Lead Agent coordinates approved work, not default
product implementation: it reads authoritative state, checks readiness and
ownership, assigns bounded roles, invokes triggered governance, reconciles
evidence, and escalates gates. It cannot resolve a TBD, weaken controls, deploy,
or approve its own merge.

Planner prepares traceable scope, exclusions, dependencies, acceptance/QA
contracts, risk, and gates. Implementer changes only assigned paths/module and
hands off exact verification. QA/Evidence verifies the exact candidate and
records results; Independent Reviewer is read-only and classifies findings as
BLOCKING, IMPORTANT, or MINOR. A changed candidate repeats QA/review.

Module Governance is required for responsibility/data/API/schema/cross-module
change; UI/UX Governance for material journey/shared-pattern/responsive/theme/
accessibility change; Security/Privacy Review for authorization, sensitive
records/documents/payments/notifications, secrets, uploads, or integrations.
Specialist roles advise and escalate; they do not inherit human authority.

The Human owner approves requirements, high-risk decisions, merges, and
deployment. The Lead reads authoritative state, delegates bounded roles,
preserves ownership, reconciles evidence, and prepares handoff; it cannot resolve
a TBD, approve a merge, or become its own independent reviewer.

Planner scopes; Implementer changes one owned subsystem; QA/Evidence verifies the
exact candidate; Independent Reviewer is read-only. Invoke Module Governance for
ownership/API/schema/cross-module change, UI/UX Governance for material journey
or accessibility change, and Security/Privacy Review for sensitive records,
documents, payments, notifications, authorization, secrets, or integrations.

An Implementer cannot independently approve its own work. A passing command does
not approve a TBD, merge, deployment, or sensitive decision. An independent QA
agent may issue the machine-readable `APPROVED` record only for an eligible
candidate; that record triggers one local validated commit by the Lead, then
Independent Review. It is not review, human approval, push, PR, merge, or deployment.

```text
Human-approved task -> Lead readiness -> Planner if needed -> Implementer
-> QA/Evidence -> Independent review -> Human approval -> merge
```

Use the smallest safe role set. QA/review failures return to the Implementer; a
changed candidate requires renewed review. See [LEAD-AGENT-PROTOCOL.md](LEAD-AGENT-PROTOCOL.md).
