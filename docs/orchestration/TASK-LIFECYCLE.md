# EPW Task Lifecycle

Use this manual lifecycle for one bounded EPW task at a time:

```text
Backlog -> Proposed -> Approved -> Ready -> In Progress -> QA -> Review
-> Ready to Merge -> Done
```

`Blocked` may be entered from active work when a named decision, dependency, or
authority is missing. `Changes Required` returns QA or Review findings to the
original Implementer, then the candidate repeats verification and review.
`Ready to Merge` requires exact-head evidence and human merge approval; it is
not merge authorization. `Done` means the approved change is merged and
reconciled, not merely written.

Every task record must include the EPW ID, goal, requirements/ADR references,
scope, exclusions, dependencies, owned paths/modules, risk, acceptance criteria,
validation, Definition of Ready, Definition of Done, and human approval gates.
