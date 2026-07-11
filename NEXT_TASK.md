# NEXT TASK: Local Session Reset

## Goal

Add a simple local reset action so Yaniv can return the in-memory MVP demo to the original mock seed state after trying workflow actions.

## Why This Matters

The app now supports local creation and updates for clients, projects, payments, supplier time, change requests, and activity entries. A reset control makes testing the workflow safer and faster without connecting persistence or requiring a manual browser refresh.

## Acceptance Criteria

- Action Queue exposes a clear reset control for the local session.
- Reset restores local state from the original mock data for:
  - clients
  - projects
  - change requests
  - supplier time entries
  - client payments
- Reset clears selected client/project/supplier state.
- Reset leaves the user in the Action Queue.
- Reset records a fresh local activity entry showing the reset happened.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- Supplier-facing pages still do not expose client price, agency margin, or internal pricing notes.
- `pnpm run build` passes.
