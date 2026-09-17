# Initial database planning

## Status

This document lists candidate entities inferred from the approved requirements.
It is not a finalized schema, data dictionary, migration plan, or authorization
model. No production migrations should be created from it without domain review.

## Candidate entities

| Candidate | Purpose supported by the requirements |
| --- | --- |
| User | Authentication/account identity for system users |
| Applicant | Stall-applicant domain record |
| Vendor | Registered vendor domain record |
| Market Section | Section used to organize stalls and waiting lists |
| Stall | Administratively managed market stall |
| Stall Application | Applicant's request for a stall in a selected section |
| Waiting List Entry | The application's position in a section-specific queue |
| Document | A digitally submitted item requiring administrator verification |
| Stall Assignment | Record of an administrator-authorized stall assignment |
| Payment | Payment monitoring/processing record |
| Receipt | Digital receipt associated with a payment outcome |
| Maintenance Request | Request and its administrative handling state |
| Announcement | Administrator-managed notice |
| Notification | Automated or targeted delivery record |

An audit-event entity may be necessary for sensitive administrative actions, but
its required scope is **TBD / Requires Human Decision**.

## Relationships directly suggested by the requirements

- A **Market Section** contains or groups **Stalls**.
- A **Stall Application** belongs to an **Applicant** and targets one **Market
  Section**.
- A **Waiting List Entry** belongs to a **Stall Application** and its selected
  **Market Section**; queue ordering must never mix sections.
- A submitted **Document** is associated with the relevant applicant/application
  or vendor context and has an administrator-controlled verification outcome.
- A **Stall Assignment** connects a **Vendor** to a **Stall** and records an
  administrator-authorized decision.
- **Payments**, **Receipts**, and payment history relate to the responsible vendor
  and relevant stall/account obligation, with exact cardinality unresolved.
- A **Receipt** is produced for an applicable successfully recorded payment; the
  definition of applicable/successful is unresolved.
- A **Maintenance Request** relates to a reporting user and likely a stall, but
  requests not tied to a stall are unresolved.
- An **Announcement** may lead to one or more audience-facing **Notifications**.
- A **Notification** belongs to a recipient user or audience resolution and may
  reference the event that triggered it.

## Integrity rules implied by approved policy

- Waiting-list position is scoped to exactly one market section.
- FCFS queue data must retain enough authoritative ordering information to apply
  the later-approved timestamp and tie-break rules.
- Application approval, document verification, and stall assignment must record
  an explicit Market Administrator action; these outcomes cannot be produced by
  an automatic decision rule.
- Raffle/auction selection is not modeled as an automated allocation process.
  Any official winner enters vendor records through an administrator action.
- The data model must not expand into inventory, POS, sales, or procurement.

## Unresolved data-model decisions

Each item is **TBD / Requires Human Decision**:

1. Whether `Applicant` and `Vendor` are profiles linked to one `User`, user
   subtypes, or separate identities; whether one person can hold multiple roles.
2. Identifiers, required attributes, lifecycle statuses, and archival rules for
   every entity.
3. Stall-to-section cardinality over time and whether section/history changes
   must be retained.
4. Stall availability states and constraints on simultaneous assignments.
5. Whether an applicant may hold multiple or cross-section active applications.
6. Exact FCFS timestamp source, precision, immutability, and deterministic
   tie-breaking; rules for withdrawal, expiry, rejection, and re-entry.
7. Whether a waiting-list entry is a separate stored record or a projection of
   application state.
8. Document ownership, types, versions, verification evidence, storage metadata,
   retention, and deletion.
9. Applicant-to-vendor transition and how manual raffle/auction winner provenance
   is recorded.
10. Assignment effective dates, history, transfers, renewals, termination, and
    vendor/stall cardinality.
11. Fee/obligation representation, payment states, provider identifiers,
    idempotency, partial payments, refunds, reconciliation, and receipt numbering.
12. Maintenance workflow states, assignees, attachments, and history.
13. Announcement audiences, notification preferences, delivery attempts, and
    retention.
14. Audit fields, actor attribution, immutable audit events, timezone, and
    retention/privacy obligations.
15. Soft deletion, legal holds, anonymization, backup, and restore requirements.
