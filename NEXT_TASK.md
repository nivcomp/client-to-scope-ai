# NEXT TASK: Client Portal Shows Payment Due Details

## Last Completed

Supplier Portal now shows approved payable hours and estimated amount broken down by project.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows payment amount and status, but it does not yet show due date, received date, or payment notes.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal payments to show due date, received date, and notes from existing client payment records.

## Why This Matters

Payment gates are central to the MVP. Showing due and received dates in the client-facing placeholder makes payment readiness clearer without adding payment provider integration.

## Acceptance Criteria

- Client Portal payment rows show due date when available.
- Client Portal payment rows show received date when available.
- Client Portal payment rows show client-safe payment notes.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new payment action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
