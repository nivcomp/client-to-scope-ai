# NEXT TASK: Client Portal Shows Change Request Pricing State

## Last Completed

Client Portal change request rows now show the existing request description.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows change request details, but it does not yet show a concise pricing state separate from the raw status.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal change requests to show a client-safe pricing state based on whether `agencyPrice` exists.

## Why This Matters

Change requests must be reviewed and priced before becoming work. A concise pricing state makes that gate easier for clients to understand without exposing supplier cost or agency margin.

## Acceptance Criteria

- Client Portal change request rows show "Priced" when `agencyPrice` exists.
- Client Portal change request rows show "Awaiting agency pricing" when `agencyPrice` is missing.
- Client Portal change request rows continue to show description, status, client-facing price, approved date, and rule.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new change request action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
