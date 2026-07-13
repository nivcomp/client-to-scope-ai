# NEXT TASK: Supplier Portal Shows Assigned Project Status

## Last Completed

Supplier Portal assigned project rows now show a clear supplier-safe start rule.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal assigned project rows show start readiness, but do not yet show the assigned project's status label.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add a supplier-safe project status label to Supplier Portal assigned project rows.

## Why This Matters

Suppliers need enough delivery context to understand whether assigned work is waiting, active, or complete. Project status can provide that context without exposing client price or agency margin.

## Acceptance Criteria

- Supplier Portal assigned project rows show the project's status label.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
