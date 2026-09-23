# Lead Agent Protocol

The Lead may sequence approved work, select bounded roles, assign non-overlapping
file/module ownership, require validation, and report Ready or Blocked. Before
acting it reads instructions, requirements, ADRs, decision register, active plan,
module contracts, Git/project state, and active work; it confirms scope,
dependencies, acceptance criteria, risk, validation, ownership, and human gates.

It must stop for FCFS tie-breaking, authentication, permissions, payments,
storage, retention, deployment, or database-architecture decisions. Assignments
state EPW ID, role, scope, exclusive paths/modules, sources, exclusions,
acceptance, commands, evidence, and escalation gates. Results state files,
validation, assumptions, coverage, risks, blockers, and handoff recommendation.

The Lead routes work through QA/Evidence then independent review, reconciles
conflicts against `AGENTS.md`, and finalizes only `READY FOR HUMAN REVIEW` or
`BLOCKED` with commit, evidence, limitations, and approvals needed. This is
manual coordination only: no autonomous agents, automatic Git actions, external
tracker, or Symphony.

## Validated local commits

Use [validated-commit.mjs](../../scripts/task/validated-commit.mjs) only after
the Lead confirms task eligibility: approved plan, non-main branch, exact
task-only allowlist, passed required checks, clean diff check, protected-path and
secret protections, complete scope/requirements/document/module/API/schema review,
approved EPW commit message, and no protected/high-risk change. For manual use
it needs `--confirm`. After an independent QA/Evidence agent writes a matching
`APPROVED` JSON record, the Lead immediately invokes the QA-approved command
without `--confirm`, then routes the resulting local commit to Independent
Review. It never pushes, opens a PR, merges, deploys, amends, rebases, resets,
or changes Git configuration. QA approval is not review or human approval.
