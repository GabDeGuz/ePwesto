# Pre-commit and Self-review Checklist

Before creating a logical commit, confirm:

- the branch and EPW task are correct and `main` is untouched;
- the complete diff has been reviewed for scope, generated noise, and regressions;
- applicable validation commands passed and exact results are recorded;
- no secrets, real environment files, sensitive records, documents, payment data,
  build output, dependencies, or evidence are staged;
- requirements, ADRs, plans, module/API/database documents, and open decisions
  are updated where applicable;
- FCFS section scoping, administrator decision points, manual LGU allocation,
  and exclusions remain intact; and
- the commit is focused, imperative, and does not combine unrelated changes.

This is a self-check, not independent review or human approval.

For QA-approved local commits, confirm the independent QA JSON names the exact
task, branch, changed-file allowlist, passing commands, date, implementer, and
QA agent. Do not use it for protected/high-risk paths; it does not authorize any
push, PR, merge, deployment, independent review, or human approval.
