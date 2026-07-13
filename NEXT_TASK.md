# NEXT TASK: Client Portal Shows Change Request Approval Dates

## Last Completed

Client Portal paid hour rows now show a usage percentage.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows change request status and client-facing price, but it does not yet show approved date when a change request has been approved.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal change requests to show approved date when available.

## Why This Matters

Change requests must be priced and approved before becoming work. Showing approved dates makes that status clearer without adding approval actions or persistence.

## Acceptance Criteria

- Client Portal change request rows show approved date when available.
- Client Portal change request rows show a clear pending state when no approved date exists.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new change request action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
