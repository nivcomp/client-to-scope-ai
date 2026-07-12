# NEXT TASK: Supplier Portal Shows Approved Payable Amounts

## Last Completed

Client Portal change requests now show the client-facing agency price when it exists.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal shows time entry status and payable rule, but it does not yet summarize approved payable amounts for the selected supplier.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Supplier Portal to show a simple approved payable amount summary for the selected supplier using existing `supplierProfiles` rates and approved local time entries.

## Why This Matters

Suppliers need to understand what approved time is payable, while the agency still controls approval. A small read-only summary improves the supplier placeholder without exposing client price or agency margin.

## Acceptance Criteria

- Supplier Portal shows total approved hours for the selected supplier.
- Supplier Portal shows an estimated payable amount using the supplier's hourly rate from `supplierProfiles`.
- Submitted or rejected time is clearly excluded from payable totals.
- Client price, agency margin, and internal pricing notes remain hidden.
- No new payment action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
