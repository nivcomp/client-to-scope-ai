# NEXT TASK: Client Portal Shows Change Request Work Readiness

## Last Completed

Client Portal change request rows now show a client-safe pricing state.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows change request pricing and approval data, but it does not yet show a concise work readiness state separate from the rule text.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal change requests to show a concise client-safe work readiness state based on whether the change request is client approved.

## Why This Matters

Change requests do not become work until they are priced and approved. A concise readiness state makes that gate easier to scan without adding workflow actions.

## Acceptance Criteria

- Client Portal change request rows show a clear ready state when `status === "client_approved"`.
- Client Portal change request rows show a blocked/waiting state when the request is not client approved.
- Client Portal change request rows continue to show description, status, client-facing price, pricing state, approved date, and rule.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new change request action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
