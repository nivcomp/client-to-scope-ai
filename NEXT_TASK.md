# NEXT TASK: Supplier Portal Shows Assigned Project Start Rule

## Last Completed

Client Portal change request section now labels project context separately from change request context.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal shows assigned project and scope context, but may not expose the same clear start-rule context suppliers need before work begins.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Review Supplier Portal assigned project rows and add a supplier-safe start rule if it is missing.

## Why This Matters

Suppliers should understand whether assigned work is ready to begin, but they must not see client price, agency margin, or internal pricing notes. A start rule reinforces the payment/hour-bank gate from the supplier side.

## Acceptance Criteria

- Supplier Portal assigned project rows show whether work is ready or blocked by approval, payment, or paid hours.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
