# Manual Coordination and Orchestration Readiness

## Current state

ePwesto now has initialized application baselines and repository/web/mobile
validation. It is prepared for manual bounded tasks and review handoffs, but is
not ready for Symphony: the role/worktree conventions have not yet been exercised
on independent product tasks, and no human-approved orchestration permissions or
live task-state integration exists.

Progress in this order:

```text
Documentation and guardrails
  -> repository validation
  -> bounded single-agent tasks
  -> worktrees and review
  -> multi-agent coordination
  -> orchestration only when justified
```

This directory establishes manual conventions only. It does not configure,
install, or authorize an orchestration tool.

## Lead Agent workflow

`Human authority -> repository rules/requirements -> active EPW plan -> Lead
Agent -> scoped subagent work -> QA/Evidence -> independent review -> human
approval -> merge`.

The Lead follows [LEAD-AGENT-PROTOCOL.md](LEAD-AGENT-PROTOCOL.md), verifies
readiness and ownership, and never self-approves a merge, deployment, or TBD.
See [PROJECT-STATE.md](PROJECT-STATE.md); chat is not authoritative state.

[AGENT-ROLES.md](AGENT-ROLES.md), [PROJECT-STATE.md](PROJECT-STATE.md),
[WORKSPACE-SAFETY.md](WORKSPACE-SAFETY.md),
[MODULE-GOVERNANCE.md](MODULE-GOVERNANCE.md),
[UI-UX-GOVERNANCE.md](UI-UX-GOVERNANCE.md), [CODE-HYGIENE.md](CODE-HYGIENE.md),
and [MODULE-CONTRACT-TEMPLATE.md](MODULE-CONTRACT-TEMPLATE.md) are manual
contracts only: they create no worktrees, GitHub integration, automatic
assignment/retry, deployment, merge, or Symphony configuration.

## Manual task convention

Use one approved EPW task and one focused branch per change. Before modifying
tracked files, verify the branch, status, task plan, relevant decisions, and
existing work. An implementer reports exact validation evidence; a reviewer
checks the intended diff and does not treat a passing command as human approval.

When worktrees are later approved, assign one task branch to one worktree and
verify the path and branch before writing. See [WORKSPACE-SAFETY.md](WORKSPACE-SAFETY.md).

Role, module, and UI review conventions are in [AGENT-ROLES.md](AGENT-ROLES.md),
[MODULE-GOVERNANCE.md](MODULE-GOVERNANCE.md), and
[UI-UX-GOVERNANCE.md](UI-UX-GOVERNANCE.md).

## Readiness evidence required before orchestration

Human review should confirm that the project has exercised bounded task plans,
branch/worktree isolation, requirements/decision reconciliation, deterministic
checks, independent review, QA evidence, and conflict/handoff handling. Only
then may a separate task evaluate an orchestration tool and its permissions.

Before any Symphony evaluation, a successful manual task must demonstrate an
isolated worktree, pull request, exact-head CI, independent review, QA evidence,
human merge approval, and reconciliation. None has yet occurred for ePwesto.
