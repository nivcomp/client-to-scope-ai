# NEXT TASK: Supplier Portal Groups Assigned Project Context

## Last Completed

Supplier Portal assigned project rows now show the project's supplier-safe status label.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal assigned project rows now show project status and start readiness, but the section does not clearly label supplier-safe context.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add a short supplier-safe context label above the Supplier Portal assigned projects table.

## Why This Matters

The assigned projects table now includes delivery status and readiness. A short label can clarify what suppliers can use and reinforce that pricing and margin remain hidden.

## Acceptance Criteria

- Supplier Portal assigned projects section labels the visible supplier-safe project context.
- Existing assigned project columns and values remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
