# NEXT TASK: Client Portal Shows Paid Hour Expiry

## Last Completed

Client Portal payments now show due date, received date, and payment notes.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows paid hour balances, but it does not yet show hour bank expiry dates when available.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal paid hours to show expiry date from existing hour bank records.

## Why This Matters

Paid hours are part of the payment gate. Showing expiry dates makes the hour-bank placeholder more operational without adding billing or payment integration.

## Acceptance Criteria

- Client Portal paid hour rows show expiry date when available.
- Client Portal paid hour rows show a clear "No expiry" state when no expiry date exists.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new payment action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
