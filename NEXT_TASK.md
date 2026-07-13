# NEXT TASK: Supplier Portal Shows Time Entry Descriptions

## Last Completed

Supplier Portal time entry/payable section now includes a short supplier-safe context label.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal time-entry rows show project, date, hours, status, and payable rule, but not the submitted description.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add time-entry descriptions to Supplier Portal time-entry rows.

## Why This Matters

Suppliers should be able to recognize what each submitted time entry was for without opening another view. Showing the description adds useful context without exposing client price or margin.

## Acceptance Criteria

- Supplier Portal time-entry rows show the entry description.
- Existing Supplier Portal time-entry stats, payable project table, status, and payable rule remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
