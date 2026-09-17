# Initial requirements

## Status and interpretation

This document organizes the approved project description into functional areas.
It is an initial requirements baseline, not a detailed specification. Statements
marked **TBD / Requires Human Decision** must not be implemented from assumption.

## Users and access surfaces

### Market Administrator

- Primarily uses the web administration application.
- Manages administrative records and workflows within the approved scope.
- Retains authority for application approval, document verification, and stall
  assignment.
- May manually register an official raffle or auction winner as an active vendor
  after the LGU's manual process.

### Registered Vendor

- Primarily uses the mobile application.
- Participates in the approved vendor-facing payment, maintenance, announcement,
  notification, and account workflows as later specified.

### Stall Applicant

- Primarily uses the mobile application.
- Participates in account, stall-application, document-submission, status, and
  notification workflows as later specified.

Detailed role permissions and whether a person can move between or hold multiple
categories are **TBD / Requires Human Decision**.

## Functional requirements

### 1. Authentication and account management

- The system must support authentication and account management for its user
  categories.
- **TBD / Requires Human Decision:** registration paths, credential method,
  identity verification, recovery, session policy, account states, and exact
  permissions.

### 2. Market sections and stalls

- The system must support stall management.
- Stalls must be organizable by market section to support section-specific
  applications and waiting lists.
- **TBD / Requires Human Decision:** stall attributes, availability states,
  numbering rules, section administration, and status-transition rules.

### 3. Stall applications and FCFS processing

- Applicants must be able to submit online stall applications.
- Online applications must be processed under a First Come, First Serve policy.
- An applicant must be queued for the selected market section, not a universal
  waiting list.
- Application approval must be an explicit Market Administrator decision.
- **TBD / Requires Human Decision:** eligibility, required fields, whether an
  applicant may have multiple active applications, authoritative queue timestamp,
  tie-breaking, withdrawal, expiry, rejection, appeal, and reapplication rules.

### 4. Manual raffle and auction boundary

- The system must not automate raffle or auction selection or allocation.
- Raffle and auction processes remain manually handled by the LGU.
- After an official winner is selected outside the system, the Market
  Administrator may manually register that person as an active vendor.
- **TBD / Requires Human Decision:** what evidence or reference, if any, must be
  recorded for this manual registration.

### 5. Vendor registration and management

- The system must support vendor registration and vendor-record management.
- It must support administrator registration of an official manual raffle or
  auction winner as an active vendor.
- **TBD / Requires Human Decision:** vendor profile fields, lifecycle statuses,
  renewal/deactivation rules, and applicant-to-vendor conversion process.

### 6. Digital documents

- The system must support digital document submission.
- Document verification must be performed by the Market Administrator and must
  not be automatic.
- **TBD / Requires Human Decision:** required document types, file constraints,
  resubmission/versioning, rejection reasons, storage, retention, access, and
  privacy policies.

### 7. Stall assignment

- The system must support stall assignment.
- A Market Administrator must make every assignment decision; assignment must
  not be automatic.
- **TBD / Requires Human Decision:** assignment prerequisites, effective dates,
  transfers, relinquishment, vacancy handling, assignment history, and whether
  one vendor may hold more than one stall.

### 8. Payments, receipts, and history

- The system must support payment monitoring and online payment processing.
- It must provide digital receipts and payment history.
- It must support payment due-date notifications.
- **TBD / Requires Human Decision:** fee rules, billing schedule, payment
  provider, payment methods, currencies, penalties, partial/overpayments,
  refunds, reconciliation, official receipt requirements, and compliance scope.

### 9. Maintenance requests

- The system must support maintenance request management.
- **TBD / Requires Human Decision:** who may submit requests, categories,
  priorities, attachments, assignment/escalation, status flow, and service-level
  expectations.

### 10. Announcements and notifications

- The system must support announcements and automated notifications.
- Payment due dates must be a supported notification trigger.
- **TBD / Requires Human Decision:** channels, templates, audience targeting,
  delivery timing, retry rules, opt-in/opt-out policy, read tracking, and all
  non-payment triggers.

### 11. Dashboard and reports

- The web application must provide an administrator dashboard.
- The system must provide administrative reports.
- **TBD / Requires Human Decision:** metrics, report definitions, filters,
  exports, retention, scheduling, access restrictions, and data freshness.

## Cross-cutting requirements requiring definition

The proposal does not yet define the following. Each is **TBD / Requires Human
Decision**:

- Accessibility, language, browser, device, and operating-system targets
- Performance, capacity, availability, backup, restore, and disaster recovery
- Audit-log events and retention
- Privacy, records retention, deletion, and regulatory obligations
- Deployment environments, hosting, domain, monitoring, and support ownership
- Integration contracts and behavior during third-party outages
- Data migration or import needs for existing LGU records

## Explicitly out of scope

- Inventory management
- Point-of-sale (POS)
- Sales monitoring
- Procurement
- Other vendor business operations unrelated to stall administration
- Automated raffle or auction selection
- Automated application approval
- Automated document verification
- Automated stall assignment
