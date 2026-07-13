# NEXT TASK: Supplier Portal Groups Time Entry Context

## Last Completed

Supplier Portal assigned projects now include a short supplier-safe context label.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal time entry information shows payable and excluded time, but the section does not clearly label submitted/rejected versus approved payable context.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add a short supplier-safe context label above the Supplier Portal time entry/payable section.

## Why This Matters

Suppliers need to understand that submitted or rejected time is not payable until Yaniv approves it. A short label reinforces the approval rule without adding new actions.

## Acceptance Criteria

- Supplier Portal time entry section labels approved payable time versus submitted/rejected time.
- Existing Supplier Portal time-entry stats, payable project table, and time-entry rows remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
