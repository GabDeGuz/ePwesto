# Module Governance

Before work adds, relocates, merges, or exposes a module responsibility, data
owner, API, schema, or cross-client dependency, record a concise impact analysis:

- EPW task and requirement/ADR references;
- current and proposed responsibility, data, inputs, outputs, and dependencies;
- affected clients, security/privacy, FCFS/admin-decision, and migration impact;
- required documentation/tests and human approval gates; and
- recommendation: proceed, revise, or blocked pending decision.

This is advisory only. It must not invent product behavior, silently resolve a
TBD, or delete ambiguous existing work.

Record: task/revision; current/proposed responsibility; inputs/outputs;
owned/consumed data; interfaces/dependencies; schema/client/security impact;
ownership conflicts; alternatives; required documentation/tests/gates;
recommendation (`PROCEED`, `REVISE`, or `BLOCKED PENDING DECISION`); and residual
risks. Preserve section-scoped FCFS and explicit administrator decisions.
