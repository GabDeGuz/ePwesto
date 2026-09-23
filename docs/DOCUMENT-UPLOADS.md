# Document Upload Boundary

Digital document submission is in scope, but document types, size/type limits,
malware scanning, storage provider, retention, access, versions, and deletion
policy remain **TBD / Requires Human Decision**. No upload feature is included
in the scaffold.

When approved, validate uploads at the backend, store them outside publicly
executable paths, restrict authorized access, avoid raw-content logging, and
require an explicit Market Administrator verification outcome. Never use real
documents in fixtures, screenshots, tests, or local evidence.
