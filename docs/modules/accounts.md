# Accounts contract

Responsibility: future account identity and backend authorization. Inputs:
untrusted credentials and user actions. Outputs: authorized session/response
state. Owned data: future account identity only. Interfaces: Laravel backend and
approved clients. Dependencies: human-approved authentication and permission
policy. Acceptance boundary: server enforcement is tested. Prohibited: choosing
roles, verification, recovery, or account lifecycle policy without approval.
