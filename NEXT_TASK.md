# NEXT TASK: Supplier Portal Shows Time Entry Approval Owner

## Last Completed

Supplier Portal time-entry rows now show the submitted description.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal time-entry rows show status and payable rule, but not who approved an approved entry.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add a supplier-safe approval owner column to Supplier Portal time-entry rows.

## Why This Matters

When time is approved, suppliers should be able to see that agency approval exists without exposing internal notes. Showing the approver id or a fallback reinforces the approval gate.

## Acceptance Criteria

- Supplier Portal time-entry rows show `approvedBy` when available.
- Non-approved or missing approver entries show a clear fallback.
- Existing Supplier Portal time-entry stats, payable project table, description, status, and payable rule remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
