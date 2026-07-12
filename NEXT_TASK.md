# NEXT TASK: Client Portal Shows Client Change Request Prices

## Last Completed

Client Portal now lists scope approval details for the selected client's projects.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows change request status, but it does not yet show client-facing change request prices when agency pricing is available.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal change requests to show the client-facing agency price when it exists, while continuing to hide supplier cost and agency margin.

## Why This Matters

Client change requests must be reviewed and priced before they become work. Showing the client-facing price in the portal makes that rule visible without exposing supplier costs or margin.

## Acceptance Criteria

- Client Portal change requests include a client-facing price column.
- The price shows `agencyPrice` when present and a clear "Awaiting agency pricing" state when absent.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new change request action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
