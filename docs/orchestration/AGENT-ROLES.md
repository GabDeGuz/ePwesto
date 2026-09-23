# Manual Agent Roles and Handoffs

Roles are declared per task: Planner scopes a task; Implementer changes it; QA /
Evidence records exact checks and synthetic evidence; Independent Reviewer checks
the exact candidate diff; Human approves requirements, gates, and merges.

An Implementer cannot independently approve its own work. A passing command does
not approve a TBD, merge, deployment, or sensitive decision.

```text
Approved scope -> Planner -> bounded EPW plan -> Implementer -> verification
-> QA/Evidence -> Independent review -> Human approval -> merge
```

QA returns failures to the Implementer. A changed candidate requires renewed
review. See [WORKSPACE-SAFETY.md](WORKSPACE-SAFETY.md) and the root guardrails.
