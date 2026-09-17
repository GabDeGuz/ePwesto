# Initial architecture boundaries

## Status

This is a provisional component view only. It does not finalize deployment,
framework versions, API style, authentication, or infrastructure. Those choices
require human review before implementation.

## Components

### Web administration application

- Planned as a Laravel application styled with Tailwind CSS.
- Primary interface for the Market Administrator.
- Covers administrative workflows, dashboards, and reports.
- May host the backend/API, subject to the unresolved decisions below.

### Mobile application

- Planned as a React Native application.
- Primary interface for registered vendors and stall applicants.
- Communicates with the backend/API; it must not be trusted to enforce
  authorization or protected business rules by itself.

### Backend/API responsibility

- Provides server-side application behavior shared by the web and mobile clients.
- Enforces authentication, authorization, validation, and business invariants.
- Coordinates persistence in MySQL and future approved external integrations.
- Preserves human decision points for approval, verification, and assignment.
- Enforces FCFS ordering within the selected market section once the exact
  timestamp and tie-break rules are approved.

The current working boundary assumes Laravel is the likely backend host because
Laravel is the approved web technology. Whether web and API are one deployable
application is **TBD / Requires Human Decision**.

### MySQL database

- Persistent source for approved operational data and relationships.
- Accessed through the backend; the mobile application must not connect directly.
- The schema is not yet designed or approved. See `docs/database/README.md` for
  candidate entities only.

## High-level communication

```text
Market Administrator
        |
        v
Laravel web UI ---------+
                        |
                        v
                Laravel backend/API  <---- React Native mobile app
                        |                      ^
                        v                      |
                     MySQL            Vendors / Applicants

Future approved services (payment, file storage, notifications)
communicate through the backend/API, never directly as a source of authority.
```

Client requests flow to the backend over an authenticated network interface. The
backend applies authorization and domain rules, reads or writes MySQL, and
returns only data permitted for that user. External-service boundaries will be
added only after their providers and responsibilities are approved.

## Major system boundaries

- **System responsibility:** digital records and workflows in the approved stall
  administration scope.
- **Human authority boundary:** approval, document verification, and stall
  assignment are explicit Market Administrator actions.
- **External manual boundary:** raffle and auction selection remain outside
  ePwesto; only the resulting official winner may be recorded manually.
- **Vendor operations boundary:** inventory, POS, sales, and procurement are out
  of scope.
- **Client trust boundary:** browser and mobile inputs are untrusted; protected
  decisions and validation belong on the backend.
- **Integration boundary:** payment, messaging, and file-storage services are not
  selected and must be isolated behind reviewed backend interfaces if adopted.

## Unresolved architectural decisions

Each item is **TBD / Requires Human Decision**:

1. Supported Laravel, PHP, Node.js, React Native, and MySQL versions.
2. Whether Laravel serves both the web UI and mobile API in one deployable unit.
3. API style, versioning, error format, pagination, and contract documentation.
4. Authentication mechanism, session/token approach, and authorization model.
5. Hosting topology, environments, CI/CD, configuration, and secret management.
6. Document/file storage provider, malware scanning, access, and retention.
7. Payment provider, webhook trust model, reconciliation, and compliance boundary.
8. Notification channels/providers and asynchronous job/queue infrastructure.
9. Audit logging, observability, backup/restore, and data-retention design.
10. Offline mobile behavior, synchronization, and supported platform versions.
11. Reporting/export architecture and whether historical snapshots are required.
12. Where the authoritative FCFS timestamp is created and how ties are resolved.
