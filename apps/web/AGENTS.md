# Web and backend workspace instructions

This directory contains the approved Laravel/Tailwind baseline. Root
[AGENTS.md](../../AGENTS.md) still applies. Framework versions are recorded in
[ADR-0001](../../docs/decisions/0001-technical-foundation.md); API,
authentication, authorization, and product decisions remain TBD.

After initialization, keep server-side authorization and business invariants in
the backend. In particular, preserve section-scoped FCFS ordering and require
explicit Market Administrator actions for application approval, document
verification, and stall assignment. Payment handling, document storage, and
external notifications remain blocked until their reviewed decisions exist.
