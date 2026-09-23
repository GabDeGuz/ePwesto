# EPW-027: Laravel and Tailwind initialization

## Goal

Create the uncustomized Laravel web/backend baseline in `apps/web/` with its
generated quality tooling. No ePwesto product routes, models, migrations,
authentication starter kit, or database migration execution is included.

## Dependencies

EPW-026 baseline decision and a PHP/Composer toolchain.

## Validation

Composer manifest validation and audit, Pint check, generated baseline tests,
and production asset build. Tests must not connect to MySQL or migrate data.
