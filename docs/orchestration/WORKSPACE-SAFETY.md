# Branch and Workspace Safety

`main` is read/inspection-only for agents. Before changing tracked files, verify
an approved EPW task, the current non-`main` task branch, and preserved working
tree state. Do not silently move, discard, reset, clean, amend, rebase, or
rewrite unrelated work.

If changes or commits are found on `main`, stop and report the branch, HEAD,
working-tree state, and affected paths. Wait for a human recovery decision.

Future worktrees require human approval and must be isolated one task branch per
worktree. A runtime, agent, or orchestration tool never overrides this policy or
human approval gates.
