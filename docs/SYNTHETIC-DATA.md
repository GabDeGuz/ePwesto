# Synthetic Test and Evidence Data

Use only invented data in tests, fixtures, documentation examples, screenshots,
videos, and local evidence. Never copy real applicant, vendor, LGU, payment,
receipt, document, notification, or production-export data into the workspace.

Use clearly fictional names, addresses, contact details, document labels, and
reference numbers. Do not use a real person merely with altered identifiers.
Avoid screenshots that expose browser profiles, terminal history, credentials,
private URLs, or unrelated records.

Store inspectable local verification material under ignored `artifacts/`. Before
sharing evidence, inspect it for sensitive information and record the synthetic
conditions used. The repository-hygiene check detects a small set of
high-confidence secret patterns; it is not proof that content is safe.
