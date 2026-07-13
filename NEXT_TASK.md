# NEXT TASK: Supplier Portal Shows File Project Status

## Last Completed

Supplier Portal assigned scope items now include a short supplier-safe context label.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal file rows show project name, but not the parent project's status label.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add project status labels to Supplier Portal supplier-visible file rows.

## Why This Matters

Supplier-visible files are tied to project delivery. Showing the parent project status helps suppliers understand whether a file relates to waiting, active, or completed work without exposing client price or margin.

## Acceptance Criteria

- Supplier Portal file rows show the parent project's status label when available.
- Missing project data has a clear fallback.
- Existing Supplier Portal file title, project, type, and link columns remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
