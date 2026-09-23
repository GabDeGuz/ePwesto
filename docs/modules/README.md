# High-level Module Contracts

These contracts are derived only from approved requirements. They define
responsibility boundaries, not schemas, endpoint contracts, or implementation
authorization. A task affecting one must document its inputs, outputs, owned
data, interfaces, dependencies, acceptance boundary, and prohibited work.

| Contract | Responsibility | Prohibited responsibility |
| --- | --- | --- |
| [accounts](accounts.md) | future identity and server authorization | deciding permissions without approval |
| [market-and-applications](market-and-applications.md) | sections, stalls, applications, section queues | cross-section queues or automated approval |
| [vendor-and-documents](vendor-and-documents.md) | vendor records and submitted documents | automated verification or public document access |
| [assignments](assignments.md) | administrator-recorded vendor/stall decisions | automatic assignment or raffle/auction allocation |
| [payments-and-notifications](payments-and-notifications.md) | future monitoring, receipts, notices | provider/reconciliation policy before approval |
| [operations](operations.md) | maintenance, announcements, dashboard, reports | inventory, POS, sales, procurement |
