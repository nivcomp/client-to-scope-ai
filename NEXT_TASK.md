# NEXT TASK: Client Portal Shows Paid Hour Usage Percent

## Last Completed

Client Portal paid hour rows now show used hours.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows paid hour purchased, used, remaining, and expiry values, but it does not yet show a quick usage percentage.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal paid hours to show a simple used percentage calculated from existing hour bank records.

## Why This Matters

Paid hours are part of the payment gate. A simple usage percentage makes the hour-bank placeholder easier to scan without adding billing or payment integration.

## Acceptance Criteria

- Client Portal paid hour rows show used percentage.
- Paid hour rows continue to show purchased, remaining, and expiry.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new payment action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
