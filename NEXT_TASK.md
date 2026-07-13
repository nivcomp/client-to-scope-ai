# NEXT TASK: Supplier Portal Shows Scope Item Project Status

## Last Completed

Supplier Portal time-entry stats now show approved and non-approved entry counts.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal scope item rows show project name and scope status, but not the assigned project's status label.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add project status labels to Supplier Portal assigned scope item rows.

## Why This Matters

When reviewing scope items, suppliers benefit from knowing whether the parent project is waiting, active, or complete. This adds delivery context without exposing client price or margin.

## Acceptance Criteria

- Supplier Portal assigned scope item rows show the parent project's status label when available.
- Missing project data has a clear fallback.
- Existing Supplier Portal scope, phase, item, and acceptance columns remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
