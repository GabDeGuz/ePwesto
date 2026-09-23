# Initial development plan

## Status

This plan decomposes the approved scope for review and future orchestration. The
items below are planning artifacts only; they do not authorize implementation.
Dependencies reflect the current understanding and must be revised when human
decisions resolve the documented TBDs.

## Module plan

### Foundation and shared contracts

- **Purpose:** establish approved versions, repositories, environments, backend
  boundaries, API conventions, and cross-cutting standards.
- **Main users:** development team; indirectly all system users.
- **Dependencies:** approved architecture and policy decisions.
- **Major requirements:** Laravel web/backend, React Native mobile, MySQL,
  Tailwind CSS, security, validation, testing, and CI foundations.
- **Questions/TBDs:** versions, API style, deployment, authentication approach,
  storage, queues, observability, and non-functional requirements.

### Authentication and account management

- **Purpose:** identify users and protect role-appropriate actions.
- **Main users:** Market Administrator, registered vendors, stall applicants.
- **Dependencies:** foundation and approved identity/authorization decisions.
- **Major requirements:** authentication and account management.
- **Questions/TBDs:** registration, credentials, verification, recovery, roles,
  account states, sessions/tokens, and multi-role behavior.

### Market sections and stalls

- **Purpose:** maintain the administrative structure to which applications,
  queues, and assignments refer.
- **Main users:** Market Administrator.
- **Dependencies:** foundation; authorization for protected actions.
- **Major requirements:** market-section and stall management.
- **Questions/TBDs:** fields, numbering, availability states, lifecycle, and
  section-change history.

### Applications and waiting lists

- **Purpose:** accept stall applications and expose FCFS order within the selected
  market section while leaving approval to the administrator.
- **Main users:** stall applicants and Market Administrator.
- **Dependencies:** authentication, market sections, and approved FCFS rules.
- **Major requirements:** application submission, section-based queues, status
  visibility, and manual approval.
- **Questions/TBDs:** eligibility, duplicate applications, authoritative time,
  ties, withdrawal, expiry, rejection, appeal, and re-entry.

### Documents and verification

- **Purpose:** collect digital documents and support explicit administrator
  verification.
- **Main users:** stall applicants, registered vendors, Market Administrator.
- **Dependencies:** authentication, storage/security decisions, and relevant
  application/vendor records.
- **Major requirements:** upload, access, status, and human verification.
- **Questions/TBDs:** document types, constraints, malware scanning, versioning,
  rejection, retention, and access policy.

### Vendors and stall assignments

- **Purpose:** manage active vendor records and administrator-controlled links
  between vendors and stalls.
- **Main users:** Market Administrator; registered vendors for relevant views.
- **Dependencies:** authentication, stalls, applicant/vendor model, approved
  application path; manual winner registration does not depend on automated
  raffle or auction logic.
- **Major requirements:** vendor management, manual raffle/auction-winner entry,
  and manual stall assignment.
- **Questions/TBDs:** vendor lifecycle, conversion, evidence, prerequisites,
  transfers, history, and cardinality.

### Payments, receipts, and payment history

- **Purpose:** monitor obligations/payments, process online payments, issue digital
  receipts, and expose history.
- **Main users:** registered vendors and Market Administrator.
- **Dependencies:** authentication, vendor/assignment records, fee policy,
  provider/security decisions.
- **Major requirements:** monitoring, online processing, receipts, history, and
  due-date notification events.
- **Questions/TBDs:** all fee rules, provider, methods, penalties, refunds,
  reconciliation, receipt rules, and compliance responsibilities.

### Maintenance requests

- **Purpose:** record and manage maintenance concerns.
- **Main users:** registered vendors and Market Administrator; other submitters
  are TBD.
- **Dependencies:** authentication and likely stall/assignment data.
- **Major requirements:** maintenance request management.
- **Questions/TBDs:** submitters, categories, priority, attachments, ownership,
  state transitions, escalation, and service levels.

### Announcements and notifications

- **Purpose:** communicate announcements and system-triggered notices, including
  payment due-date reminders.
- **Main users:** all categories, with Market Administrator management.
- **Dependencies:** authentication/users; payment events for due-date notices;
  approved channel/provider and queue decisions.
- **Major requirements:** announcements, automated notifications, due-date alerts.
- **Questions/TBDs:** channels, templates, audiences, consent/preferences,
  schedule, retries, read tracking, and trigger catalogue.

### Dashboard and administrative reports

- **Purpose:** present approved operational summaries and reports.
- **Main users:** Market Administrator.
- **Dependencies:** authenticated administration and source modules whose data is
  summarized.
- **Major requirements:** administrator dashboard and administrative reports.
- **Questions/TBDs:** metrics, definitions, filters, exports, snapshots, access,
  scheduling, and freshness.

## Proposed tasks

| ID | Planning task | Depends on |
| --- | --- | --- |
| EPW-001 | Review and baseline functional/non-functional requirements and resolve prioritized TBDs | None |
| EPW-002 | Record architecture decisions for web/API boundary, contracts, environments, security, storage, jobs, and observability | EPW-001 |
| EPW-003 | Define domain vocabulary, role/permission matrix, lifecycle states, and human decision/audit points | EPW-001 |
| EPW-004 | Validate candidate data model and approve an initial logical schema/ERD (no production migration in this planning task) | EPW-001, EPW-003 |
| EPW-005 | Define UX journeys and reviewed Figma designs for administrator, vendor, and applicant surfaces | EPW-001, EPW-003 |
| EPW-006 | Initialize Laravel/Tailwind web/backend workspace with quality and test tooling | EPW-002 |
| EPW-007 | Initialize React Native mobile workspace with quality and test tooling | EPW-002 |
| EPW-008 | Establish CI checks and contributor environment documentation | EPW-006, EPW-007 |
| EPW-009 | Implement authentication, account lifecycle, and server-side authorization | EPW-003, EPW-004, EPW-006 |
| EPW-010 | Implement market-section and stall administration | EPW-004, EPW-006, EPW-009 |
| EPW-011 | Implement stall applications and section-scoped FCFS waiting lists | EPW-004, EPW-005, EPW-007, EPW-009, EPW-010 |
| EPW-012 | Implement secure document submission and administrator verification | EPW-002, EPW-004, EPW-005, EPW-007, EPW-009 |
| EPW-013 | Implement vendor management and manual official-winner registration | EPW-004, EPW-005, EPW-009 |
| EPW-014 | Implement administrator-controlled stall assignment and history | EPW-010, EPW-011, EPW-013 |
| EPW-015 | Finalize payment/fee/provider, receipt, reconciliation, and compliance design | EPW-001, EPW-002, EPW-003 |
| EPW-016 | Implement payment monitoring, online payment integration, receipts, and history | EPW-004, EPW-009, EPW-013, EPW-014, EPW-015 |
| EPW-017 | Implement maintenance request management | EPW-005, EPW-009, EPW-010, EPW-013 |
| EPW-018 | Finalize notification channels, consent, triggers, delivery, and retry design | EPW-001, EPW-002, EPW-003 |
| EPW-019 | Implement announcements and the notification delivery foundation | EPW-004, EPW-005, EPW-009, EPW-018 |
| EPW-020 | Implement payment due-date notifications | EPW-016, EPW-019 |
| EPW-021 | Define approved dashboard metrics and administrative report catalogue | EPW-001, EPW-003 |
| EPW-022 | Implement administrator dashboard and approved reports | EPW-009, EPW-010, EPW-011, EPW-013, EPW-014, EPW-016, EPW-017, EPW-019, EPW-021 |
| EPW-023 | Perform integrated security, privacy, accessibility, performance, backup/restore, and acceptance validation | EPW-008, EPW-011, EPW-012, EPW-014, EPW-016, EPW-017, EPW-019, EPW-020, EPW-022 |
| EPW-024 | Prepare reviewed deployment and operational runbooks | EPW-002, EPW-008, EPW-023 |
| EPW-025 | Establish planning-stage workspace guardrails, task plans, repository hygiene validation, and manual coordination conventions | None |
| EPW-026 | Record approved technical baseline and cross-cutting contracts for workspace initialization | EPW-025 |
| EPW-027 | Initialize Laravel/Tailwind web/backend baseline | EPW-026 |
| EPW-028 | Initialize React Native mobile baseline | EPW-026 |
| EPW-029 | Add repeatable repository, web, mobile, and CI verification | EPW-027, EPW-028 |
| EPW-030 | Establish manual role, QA/review, worktree, module, and UI governance | EPW-025, EPW-029 |
| EPW-031 | Make workspace lifecycle, contracts, review evidence, and operational readiness explicit | EPW-030 |
| EPW-032 | Establish manual Lead Agent and bounded-subagent governance contracts | EPW-031 |
| EPW-033 | Add explicit-allowlist validated local commit workflow | EPW-032 |

## Dependency waves and parallel opportunities

The following are possible planning/implementation waves, not commitments to a
delivery schedule:

1. **Wave 0:** EPW-025 establishes safe planning-stage harness conventions; it does not unblock framework initialization or resolve product decisions.
2. **Wave 1:** EPW-001.
3. **Wave 2 (parallel):** EPW-002 and EPW-003 after EPW-001.
4. **Wave 3 (partly parallel):** EPW-004, EPW-005, and EPW-021 after EPW-003;
   EPW-006 and EPW-007 after EPW-002; EPW-015 and EPW-018 after their decision
   prerequisites.
5. **Wave 4 (partly parallel):** EPW-008 after both workspace initializations;
   EPW-009 after schema/foundation work.
6. **Wave 5 (parallel where dependencies permit):** EPW-010, EPW-012, EPW-013,
   and EPW-019. EPW-011 follows section/stall administration; EPW-017 follows its
   stall/vendor prerequisites.
7. **Wave 6:** EPW-014 follows applications and vendors; EPW-016 follows payment
   design and assignment; EPW-020 joins payments with the notification foundation.
8. **Wave 7:** EPW-022 after its data-producing modules; EPW-023 after all
   in-scope module integrations; EPW-024 after acceptance validation.

Parallel work must coordinate shared API contracts, schema changes, and
authorization behavior. A task being parallel-capable does not remove its human
review gates.

## Orchestration notes

- Task definitions should eventually use the EPW IDs and explicit dependency
  edges above.
- Do not import these items into an orchestrator until their wording and
  dependencies are reviewed.
- Repository documents remain authoritative if future orchestration metadata and
  conversation history disagree.
