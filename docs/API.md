# API Boundary

## Status

Laravel is the planned backend/API host. This document defines boundaries only;
endpoint names, versioning, authentication, error format, pagination, and
public contract tooling remain **TBD / Requires Human Decision**.

## Non-negotiable server responsibilities

The backend must authenticate and authorize protected actions, validate untrusted
input, protect sensitive records, and enforce section-scoped FCFS invariants.
It must preserve explicit Market Administrator decisions for application
approval, document verification, and stall assignment. Mobile and web clients
cannot make those decisions authoritative.

No endpoint may automate raffle/auction selection, payment reconciliation, or a
human-gated decision. Future API work must use a bounded EPW plan, reviewed
contract, authorization tests, and an ADR where a cross-client boundary changes.
