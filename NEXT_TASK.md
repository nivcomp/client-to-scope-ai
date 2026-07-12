# NEXT TASK: Supplier Portal Shows Payable Project Breakdown

## Last Completed

Supplier Portal now shows total approved hours and estimated payable amount for the selected supplier.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal shows a total payable summary, but it does not yet break approved payable hours down by project.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Supplier Portal to show a simple project-level breakdown of approved payable hours and estimated amount using existing approved local time entries.

## Why This Matters

The supplier can now see the total amount likely payable. A project-level breakdown makes that total easier to verify without exposing client price, agency margin, or internal pricing notes.

## Acceptance Criteria

- Supplier Portal shows approved payable hours grouped by project for the selected supplier.
- Each project row shows project name, approved hours, and estimated amount using the supplier's hourly rate.
- Submitted or rejected time remains excluded from payable totals.
- Client price, agency margin, and internal pricing notes remain hidden.
- No new payment action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
