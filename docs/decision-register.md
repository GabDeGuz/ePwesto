# TBD / Requires Human Decision register

## Status

This register consolidates unresolved decisions discovered during initial
workspace planning. It does not propose answers or add requirements. The linked
requirements, architecture, and database documents provide the detailed context.

## Product policy and users

- Exact permissions for each user category.
- User registration, identity verification, credential, recovery, session, and
  account-state policies.
- Whether one person may hold multiple roles and how an applicant becomes a
  vendor.
- Vendor profile fields, lifecycle statuses, renewal, deactivation, and archival
  rules.
- Evidence or reference required when an administrator records an official
  manual raffle or auction winner.

## Market sections, stalls, applications, and assignments

- Market-section and stall fields, identifiers/numbering, availability states,
  administration, lifecycle transitions, and history.
- Application eligibility and fields; whether multiple active or cross-section
  applications are allowed.
- The authoritative FCFS timestamp, precision, immutability, and deterministic
  tie-break policy.
- Application withdrawal, expiry, rejection, appeal, reapplication, and queue
  re-entry rules.
- Stall-assignment prerequisites, effective dates, vendor/stall cardinality,
  transfers, renewals, relinquishment, termination, vacancy handling, and history.
- Whether waiting-list entries are stored entities or projections of application
  state.

## Documents and privacy

- Required document types and fields; file type/size limits, malware scanning,
  resubmission/versioning, rejection reasons, and verification evidence.
- File storage provider and security model, access rules, retention, deletion,
  privacy, anonymization, and legal-hold obligations.
- Broader personal-data, records-retention, regulatory, and audit requirements.

## Payments and receipts

- Fee/obligation rules, billing schedule, currency, payment methods, due dates,
  penalties, partial payments, overpayments, refunds, and lifecycle states.
- Payment provider and provider identifiers, webhook trust, idempotency,
  reconciliation, outage behavior, and compliance responsibilities.
- Digital/official receipt rules, numbering, generation criteria, and history.

## Maintenance, announcements, and notifications

- Eligible maintenance-request submitters, categories, priorities, attachments,
  assignees, state flow, escalation, history, and service levels.
- Announcement audiences and targeting rules.
- Notification channels/providers, templates, consent/preferences, delivery
  timing, queues, retries, read tracking, retention, and complete trigger list.

## Dashboard and reporting

- Dashboard metrics and definitions.
- Report catalogue, filters, exports, scheduling, access restrictions, retention,
  data freshness, and historical snapshot needs.

## Architecture and operations

- Laravel, PHP, Node.js, React Native, and MySQL versions and local toolchain.
- Whether the Laravel web UI and mobile backend/API form one deployable unit.
- API style, versioning, contract documentation, pagination, and error format.
- Authentication/session-token mechanism and server authorization model.
- Hosting topology, deployment environments, domains, CI/CD, configuration,
  secret management, monitoring, support ownership, and observability.
- Background job/queue infrastructure and integration contracts.
- Backup, restore, disaster recovery, availability, performance, and capacity
  targets.
- Audit events, actor attribution, immutability, timezone, and retention.
- Mobile platform/device/OS targets, offline behavior, and synchronization.
- Accessibility, language, and browser targets.
- Migration/import needs for existing LGU data.
- Entity identifiers, required attributes, generic lifecycle/audit fields, soft
  deletion, archival, and restore rules for the eventual logical schema.

## Review outcome

As decisions are approved, update this register and the affected source document
in the same change. Record material architectural decisions in a reviewed format
chosen during EPW-002; do not resolve items solely in orchestration metadata.
