# Continuous integration workflows

`repository-hygiene.yml` runs only the dependency-free repository check described
in `docs/TESTING.md`. It has read-only repository permissions and does not run
Laravel, React Native, npm, Composer, MySQL, migrations, builds, or deployments.

Application CI remains deferred until each application is deliberately
initialized and its commands are approved and validated.
