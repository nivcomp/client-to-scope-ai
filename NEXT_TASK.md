# NEXT TASK: Supplier Views Use Local Assignment State

## Last Completed

Project Detail now supports local supplier assignment controls. Yaniv can assign and remove approved suppliers from the selected project, and the same local project state feeds Project Detail and Action Queue.

## Remaining Limitations

- Supplier assignment changes are local only and reset on refresh or local session reset.
- Supplier Detail and Supplier Portal still read some seed mock data directly, so they do not yet reflect every local workflow change.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Supplier Detail and Supplier Portal to receive local app state for projects and time entries instead of reading assignment-sensitive mock data directly.

## Why This Matters

After local assignment controls, supplier-facing screens should reflect the current session state while still hiding client price, agency margin, and internal pricing notes. This keeps the MVP workflow coherent without adding persistence or auth.

## Acceptance Criteria

- Supplier Detail receives projects and time entries from app-level local state.
- Supplier Portal receives projects from app-level local state.
- Local supplier assignments appear in the supplier-facing placeholder screens during the same session.
- Supplier-facing screens continue to hide client price, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
