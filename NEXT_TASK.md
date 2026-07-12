# NEXT TASK: Client Portal Shows Paid Hour Usage

## Last Completed

Client Portal paid hour rows now show expiry date when available.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows paid hour purchased and remaining totals, but it does not yet show used hours.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal paid hours to show used hours from existing hour bank records.

## Why This Matters

Paid hours are part of the payment gate. Showing used hours makes the hour-bank placeholder clearer without adding billing or payment integration.

## Acceptance Criteria

- Client Portal paid hour rows show used hours.
- Paid hour rows continue to show purchased, remaining, and expiry.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new payment action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
