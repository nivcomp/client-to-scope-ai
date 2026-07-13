# NEXT TASK: Supplier Portal Shows File Project Start Rule

## Last Completed

Supplier Portal supplier-visible file rows now show the parent project's status label.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal file rows show project status, but not the parent project's start rule.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add supplier-safe parent project start rules to Supplier Portal supplier-visible file rows.

## Why This Matters

Supplier-visible files are tied to project delivery. Showing the project start rule helps suppliers know whether the related work is ready or blocked without exposing client price or margin.

## Acceptance Criteria

- Supplier Portal file rows show the parent project's start rule when available.
- Missing project data has a clear fallback.
- Existing Supplier Portal file title, project, project status, type, and link columns remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
