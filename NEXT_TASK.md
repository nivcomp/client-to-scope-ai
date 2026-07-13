# NEXT TASK: Supplier Portal Shows Scope Item Start Rule

## Last Completed

Supplier Portal assigned scope item rows now show the parent project's status label.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal scope item rows show parent project status, but not whether the parent project is ready to start.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add supplier-safe parent project start rules to Supplier Portal assigned scope item rows.

## Why This Matters

When reviewing scope items, suppliers benefit from knowing whether work on the parent project is ready or still blocked by agency approval, payment, or paid hours.

## Acceptance Criteria

- Supplier Portal assigned scope item rows show the parent project's start rule when available.
- Missing project data has a clear fallback.
- Existing Supplier Portal project, project status, scope, phase, item, and acceptance columns remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
