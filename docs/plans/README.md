# Bounded EPW Task Plans

Create or update a task plan before multi-file or behavior-changing work. A plan
does not authorize work by itself; it records scope and evidence under the
authority order in [AGENTS.md](../../AGENTS.md).

Use the task ID from [development-plan.md](../development-plan.md). Each plan
must contain:

1. Goal and status.
2. Requirement and decision references, including unresolved dependencies.
3. Allowed scope and explicit exclusions.
4. Files/components expected to change and ownership/boundary impact.
5. Acceptance criteria and exact validation commands.
6. Security, privacy, synthetic-data, rollback, and human-review considerations.
7. Completion evidence, remaining gaps, and handoff notes.
8. Lead Agent, selected roles, exclusive file/module ownership, risk, reviewer
   requirements, Definition of Ready/Done, and human gate.
9. Auto-commit eligibility, required checks, excluded paths, and the exact
   reviewer/human gate; protected/high-risk work is never auto-commit eligible.

Plans may be amended when evidence changes, but they cannot silently resolve a
TBD or supersede requirements or reviewed decisions.
