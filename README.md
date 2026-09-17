# ePwesto

ePwesto is a planned Smart Public Market Stall Management System for Pulilan
Public Market. It will support the local market administration lifecycle—from
stall applications and section-based waiting lists to vendor records, payments,
maintenance requests, announcements, and administrative reporting.

This repository currently contains planning and workspace documentation only.
Application features and production database migrations have not been started.

## Problem being addressed

Public market stall administration involves applications, supporting documents,
waiting lists, assignments, payment records, maintenance concerns, and notices.
ePwesto is intended to bring those records and workflows into a coordinated
system while preserving the Market Administrator's authority over approvals,
document verification, and stall assignment.

## Target users

- **Market Administrator** — primarily uses the web administration application.
- **Registered Vendor** — primarily uses the mobile application.
- **Stall Applicant** — primarily uses the mobile application.

## High-level scope

The approved scope includes:

- Authentication and account management
- Stall and market-section management
- Stall applications with First Come, First Serve (FCFS) processing
- Section-based waiting lists
- Vendor registration and management
- Digital document submission and administrator verification
- Administrator-controlled stall assignment
- Payment monitoring, online payment processing, digital receipts, and payment
  history
- Payment due-date notifications
- Maintenance request management
- Announcements and automated notifications
- An administrator dashboard and administrative reports

Raffles and auctions remain manual LGU processes. The system may record a winner
as an active vendor after the official process, but it must not select winners.

Inventory, point-of-sale, sales monitoring, procurement, and unrelated vendor
business operations are outside the approved scope.

## Approved technology stack

| Area | Technology |
| --- | --- |
| Web administration application | Laravel, Tailwind CSS, PHP, JavaScript, HTML, CSS |
| Mobile application | React Native, JavaScript |
| Backend/API | Laravel (exact API organization is TBD) |
| Database | MySQL |
| Version control | Git and GitHub |
| UI/UX design | Figma |

Exact framework versions, local tooling, deployment targets, and third-party
service providers are **TBD / Requires Human Decision**.

## Repository structure

```text
ePwesto/
|-- apps/
|   |-- web/                 # Future Laravel web/backend workspace
|   `-- mobile/              # Future React Native workspace
|-- docs/
|   |-- requirements/        # Approved scope and functional requirements
|   |-- architecture/        # Provisional boundaries and open decisions
|   |-- database/            # Candidate entities and relationships
|   |-- diagrams/            # Reserved for reviewed diagrams
|   |-- decision-register.md # Consolidated human decisions still required
|   `-- development-plan.md  # Modules, proposed tasks, and dependencies
|-- .github/
|   `-- workflows/           # Reserved for future CI workflows
|-- .orchestrator/           # Reserved for future orchestration metadata
|-- AGENTS.md                # Instructions for human and AI contributors
`-- README.md
```

## Documentation map

- [Project requirements](docs/requirements/README.md)
- [Initial architecture](docs/architecture/README.md)
- [Initial database plan](docs/database/README.md)
- [Development plan](docs/development-plan.md)
- [Human decision register](docs/decision-register.md)
- [Agent and contributor instructions](AGENTS.md)

## Current status

**Workspace preparation / requirements planning.** No Laravel or React Native
project has been initialized, no dependencies have been added, and no production
schema or application features have been implemented. The next step is human
review of the documented scope, open decisions, and proposed task breakdown.
