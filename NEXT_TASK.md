# NEXT TASK: Local Activity Log for Yaniv Actions

## Goal

Add a simple local activity log so Yaniv can see what changed during the current in-memory session.

## Why This Matters

The MVP now has local workflow actions from the Action Queue and project/client pages. Without a visible session trail, it is easy to lose track of which payment, change request, time entry, client, or project was just updated.

## Acceptance Criteria

- App records local activity entries when Yaniv:
  - creates a client or lead
  - creates a project
  - creates a change request
  - creates a supplier time entry
  - marks a payment received
  - approves or rejects supplier time
  - updates a change request status
- Activity entries are stored in local React state only.
- Activity entries reset on refresh, like the rest of Phase 2B local state.
- Action Queue shows a recent activity section.
- The implementation does not connect Supabase, AI APIs, payment providers, or auth.
- Supplier-facing pages still do not expose client price, agency margin, or internal pricing notes.
- `pnpm run build` passes.
