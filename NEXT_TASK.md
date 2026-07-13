# NEXT TASK: Client Portal Shows Change Request Descriptions

## Last Completed

Client Portal change request rows now show approved date when available.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows change request title, status, price, approval date, and rule, but it does not yet show the request description.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal change requests to show the existing client request description.

## Why This Matters

Change request descriptions give the client useful context for what is being reviewed and priced without exposing supplier cost or agency margin.

## Acceptance Criteria

- Client Portal change request rows show the existing description.
- Client Portal change request rows continue to show status, client-facing price, approved date, and rule.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new change request action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
