# QA and Evidence Record Template

```md
# EPW-NNN QA record

- Candidate commit:
- Environment/tool versions:
- Requirements and acceptance criteria covered:
- Commands/checks and result:
- Synthetic artifacts or `NOT APPLICABLE`:
- Security/privacy/secret review:
- Known limitations and blockers:
- QA owner and date:
- Outcome: PASS / FAIL / CHANGES REQUIRED / BLOCKED
```

Evidence must be inspected, synthetic, and stored under ignored `artifacts/`
until an approved sharing mechanism exists.

## Machine-readable QA approval

An independent QA agent may authorize one eligible local commit by writing
`artifacts/qa-approvals/<task>.json` in this format. `APPROVED` authorizes only
the local command; it is not review, human approval, push, PR, merge, or deployment.

```json
{"schema":"epwesto.qa-approval/v1","status":"APPROVED","task":"EPW-033","branch":"task/EPW-033-example","files":["docs/example.md"],"validation":[{"command":"node scripts/verify/repository.mjs","result":"PASS"}],"date":"2026-09-23","implementer":"implementer-id","qaAgent":"independent-qa-id","commit":{"type":"docs","summary":"add example"}}
```
