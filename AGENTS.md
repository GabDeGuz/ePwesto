# AGENTS.md

## Purpose

ePwesto is a Smart Public Market Stall Management System for Pulilan Public
Market. It is intended to support public-market stall administration without
replacing decisions that belong to the Market Administrator or manual LGU
processes.

This file is the repository-wide instruction source for coding agents. More
specific `AGENTS.md` files may be added later; when present, their instructions
apply within their directory in addition to this file.

## Approved technology stack

- Web administration application: Laravel
- Mobile application: React Native
- Database: MySQL
- Web styling: Tailwind CSS
- Languages: PHP, JavaScript, HTML, and CSS
- Version control and remote collaboration: Git and GitHub
- UI/UX design: Figma

Do not substitute major technologies, add infrastructure, or select framework
versions or service providers without a reviewed decision.

## Users

1. **Market Administrator** — primarily uses the web application.
2. **Registered Vendor** — primarily uses the mobile application.
3. **Stall Applicant** — primarily uses the mobile application.

## Major modules

- Authentication and account management
- Market section, stall, application, and waiting-list management
- Vendor registration and management
- Document submission and verification
- Stall assignment
- Payment monitoring and online payment processing
- Digital receipts and payment history
- Payment due-date and other automated notifications
- Maintenance requests
- Announcements
- Administrator dashboard
- Administrative reports

See `docs/requirements/README.md` and `docs/development-plan.md` before working on
any module.

## Non-negotiable business rules

1. Online stall applications follow First Come, First Serve (FCFS) ordering.
2. Waiting lists are separate by the applicant's selected market section; there
   is no universal waiting list.
3. Raffle and auction allocation are outside system automation and remain manual
   LGU processes.
4. The Market Administrator may manually register an official raffle or auction
   winner as an active vendor after the manual process concludes.
5. Application approval, document verification, and stall assignment require
   Market Administrator action. Never automate those decisions.
6. Do not silently reinterpret, weaken, or replace these rules.

The precise FCFS timestamp and tie-breaking policy is **TBD / Requires Human
Decision**. Until reviewed, preserve ordering data and do not invent a rule.

## Scope limitations

Do not add inventory management, point-of-sale, sales monitoring, procurement,
or vendor business operations unrelated to stall administration. Do not invent
LGU policies or treat an unresolved item as approved scope.

## Repository layout

- `apps/web/`: future Laravel web administration application and backend/API
- `apps/mobile/`: future React Native application
- `docs/requirements/`: approved scope and requirement details
- `docs/architecture/`: provisional component boundaries and decisions
- `docs/database/`: candidate data model; not a production schema
- `docs/diagrams/`: reviewed architecture/data diagrams
- `docs/decision-register.md`: consolidated unresolved human decisions
- `docs/development-plan.md`: module plan, task IDs, and dependencies
- `.github/workflows/`: future continuous-integration definitions
- `.orchestrator/`: future project-local task/orchestration configuration

## Working rules

- Inspect the repository, applicable `AGENTS.md` files, existing code, tests,
  and current Git status before changing anything.
- Preserve useful existing work and user changes. Do not delete or overwrite
  unrelated files.
- Make only changes relevant to the assigned task. Avoid opportunistic rewrites
  or scope expansion.
- Treat repository documentation as the source of truth, not prior AI
  conversation history.
- Do not silently change requirements. Record discrepancies or ambiguities as
  **TBD / Requires Human Decision** and surface them for review.
- Keep web/mobile boundaries and shared contracts explicit. Avoid duplicating
  business-rule implementations without an architectural decision.
- Prefer small, reviewable changes and meaningful names. Document decisions that
  affect more than one module.
- Never commit secrets, credentials, production data, private documents, or
  environment-specific tokens.

## Coding expectations

Once implementation is authorized:

- Follow the established Laravel, React Native, PHP, and JavaScript conventions
  already present in the initialized projects.
- Keep domain rules testable and separate from presentation concerns.
- Validate inputs at trust boundaries and return errors that do not disclose
  sensitive implementation details.
- Preserve database integrity and use transactions for related state changes
  where failure could leave partial records.
- Add dependencies only when justified by the assigned task and document
  material dependency or configuration changes.
- Update relevant requirements, architecture, database, and task documentation
  when an approved decision changes them.

## Testing and evidence

- Add or update automated tests for changed behavior at the appropriate level.
- Test authorization boundaries and the FCFS/section-queue invariants whenever
  affected.
- Run the narrowest relevant tests during development, followed by the available
  broader checks appropriate to the change.
- Run formatters, linters, static analysis, builds, and migration checks when
  configured and relevant.
- Do not claim completion without evidence from tests, builds, or other checks.
  Report the exact checks run and any checks that could not be run.

## Security and privacy

- Apply least privilege and enforce authorization on the server, not only in
  client interfaces.
- Treat identity records, submitted documents, payment information, and
  notification destinations as sensitive data.
- Do not log secrets or unnecessary personal/payment data.
- Validate uploaded files, restrict their type and size, and store them outside
  publicly executable paths; exact retention and storage policies require human
  approval.
- Do not design or implement payment handling until the provider, security
  boundary, reconciliation process, and compliance obligations are approved.
- Surface changes involving authentication, authorization, personal data,
  documents, payments, encryption, auditability, database structure, external
  services, or component boundaries for human review.

## Human review gates

Human approval is required before sensitive or architectural decisions are
treated as final, including authentication strategy, role/permission model, API
contract, deployment model, file storage, payment provider, notification
channels, data retention, reporting rules, and production schema design.
