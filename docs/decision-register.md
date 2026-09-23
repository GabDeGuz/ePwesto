# TBD / Requires Human Decision register

## Status

This register consolidates unresolved decisions discovered during initial
workspace planning. It does not propose answers or add requirements. The linked
requirements, architecture, and database documents provide the detailed context.

## First implementation sequence: decisions requested

The following are decision prompts, not approved solutions. They identify the
smallest first-feature dependencies and options the human owner must choose
between before implementation starts.

| Decision | Options and trade-offs for human review | Blocks |
| --- | --- | --- |
| Roles and permissions | A small fixed role matrix is simpler to review; granular permissions permit delegation but add administration and authorization-test surface. | Authentication and every protected administrator action. |
| Registration, identity, recovery, and account states | Administrator-provisioned accounts reduce self-service complexity; self-registration broadens access but needs verification and abuse controls; a hybrid needs both paths defined. | Authentication, applicant onboarding, and vendor access. |
| Applicant-to-vendor conversion | An explicit administrator conversion preserves accountability; a separate vendor record with a link preserves history but adds lifecycle rules. | Vendor management and manual official-winner registration. |
| FCFS timestamp and tie-breaks | A server-accepted immutable UTC timestamp plus deterministic secondary key is auditable; a database sequence provides deterministic ordering but needs a defined relationship to receipt time. | Applications and section-scoped waiting lists. |
| Application lifecycle | Define whether withdrawal, rejection, expiry, appeal, and reapplication preserve, remove, or create a new queue position; each choice changes fairness, audit history, and user expectations. | Application status management and waiting-list behavior. |
| Sections, stalls, and assignments | Decide identifiers, availability states, transfers, vacancy handling, cardinality, effective dates, and history; simpler one-active-assignment rules limit flexibility, while richer lifecycle rules require more validation. | Market/stall administration and administrator-controlled assignment. |
| Initial schema and migration approach | Approve a logical schema before migrations, then use small reversible migrations; alternatively approve a bounded initial schema package first, accepting a larger early review surface. | All persistent feature work. |
| Laravel web/API boundary | Server-rendered administration only is initially simpler; a versioned JSON API supports mobile integration but requires contract, versioning, error, pagination, and authorization conventions. A hybrid requires both boundaries to be explicit. | Authentication integration and mobile-connected features. |
| Documents and verification | Choose required types, limits, storage boundary, administrator verification evidence, access, retention, and deletion rules. Stronger validation/scanning improves safety but adds service and operational dependencies. | Digital document submission and verification. |
| Payments and receipts | Choose provider, fees, reconciliation, receipt authority/numbering, outage and refund handling, and compliance responsibility. Deferring online payment avoids premature sensitive integration. | Payment monitoring, online payments, receipts, and due-date notices. |
| Notifications | Choose channel/provider, consent/preferences, trigger catalogue, retries, delivery evidence, and retention. More channels improve reach but increase privacy, reliability, and operational responsibility. | Announcements and automated notifications. |

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

- MySQL version and production/local database provisioning; Laravel/PHP and
  React Native/Node development baselines are recorded in ADR-0001.
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
in the same change. Record material architectural decisions using the reviewed
format in [docs/decisions/README.md](decisions/README.md); do not resolve items
solely in orchestration metadata.
