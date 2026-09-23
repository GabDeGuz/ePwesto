# Continuous integration workflows

`repository-hygiene.yml` has repository read-only permissions and runs three
non-deployment jobs: the dependency-free repository check, the Laravel web
baseline verification, and the React Native mobile baseline verification. The
web and mobile jobs install locked dependencies, then invoke the same
repository-relative verification scripts documented in `docs/TESTING.md`.

The workflow does not start MySQL, run ePwesto migrations, require
user-provided or repository-configured secrets, deploy, publish, or configure
external services. Checkout does not persist its read-scoped credentials. CI
execution on an exact pull-request head remains required evidence before a
future change is considered ready for human merge approval.
