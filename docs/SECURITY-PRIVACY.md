# Security and Privacy Baseline

## Status

This is a planning-stage control baseline, not a final security, compliance, or
retention policy. Authentication, permissions, storage, payment, notification,
retention, audit, and deployment details remain **TBD / Requires Human Decision**.

## Sensitive data

Treat the following as sensitive: applicant and vendor identity/contact records;
submitted documents and document-verification outcomes; stall applications and
assignments; payment, receipt, and obligation records; notification destinations;
and administrative/audit activity. Limit collection, access, logging, evidence,
and retention to approved needs.

## Required future controls

- Enforce authentication and authorization on the backend; clients cannot grant
  access or make protected decisions.
- Validate untrusted input and constrain output to authorized records.
- Store documents outside publicly executable paths with reviewed access,
  validation, malware-scanning, retention, and deletion controls.
- Keep payment-provider secrets and webhook trust/reconciliation logic outside
  client code and defer implementation until approved.
- Avoid logging raw documents, credentials, payment details, or unnecessary
  personal data. Define reviewed audit events and retention before relying on
  them.
- Use approved secret handling and commit only placeholder environment examples.

## Human-review triggers

Human review is required for authentication, authorization, personal-data
handling, document uploads/storage, payments, encryption, auditability,
notification providers, external integrations, data retention, database schema,
and deployment. See [GUARDRAILS.md](GUARDRAILS.md) for stop conditions.

## Current safe practice

No real personal, document, payment, or production data belongs in this
repository or its local evidence. Follow [SYNTHETIC-DATA.md](SYNTHETIC-DATA.md).
