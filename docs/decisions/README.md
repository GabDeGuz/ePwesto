# Architecture Decision Records

The [decision register](../decision-register.md) is the single list of open
questions. An architecture decision record (ADR) captures the reviewed outcome
of one material technical decision; it does not replace the register or approve
an unresolved policy.

Create an ADR during EPW-002 or a later approved task when a decision affects
multiple modules, contracts, security boundaries, dependencies, operations, or
long-lived maintenance. Update the decision register and affected requirements
or architecture documents in the same reviewed change.

Name files `NNNN-short-title.md` and use one of: Proposed, Accepted, Superseded,
or Rejected. Do not mark an ADR Accepted without human approval.

```md
# ADR-NNNN: Decision title

Status: Proposed
Date: YYYY-MM-DD
Related EPW task: EPW-NNN

## Context

## Decision drivers

## Options considered

## Decision

## Consequences

## Verification and review evidence
```
