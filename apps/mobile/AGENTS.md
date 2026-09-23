# Mobile workspace instructions

This directory contains the approved React Native baseline. Root
[AGENTS.md](../../AGENTS.md) still applies. The runtime baseline is recorded in
[ADR-0001](../../docs/decisions/0001-technical-foundation.md); supported
platforms, API contract, authentication, and product decisions remain TBD.

After initialization, treat all client input and UI state as untrusted. The
mobile application must not become the authority for approvals, document
verification, stall assignment, FCFS ordering, raffle results, or auction
results; those protected rules remain at the reviewed backend and human
administration boundaries.
