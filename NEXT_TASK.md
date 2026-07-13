# NEXT TASK: Client Portal Shows Change Request Project Status

## Last Completed

Client Portal change request rows now show a client-safe work readiness state.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal change request rows show their related project name, but not the related project status.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal change requests to show the related project status in client-safe terms.

## Why This Matters

Clients need to understand whether the base project is still waiting, active, or complete when they review a change request. Showing the project status adds context without adding actions or exposing internal pricing.

## Acceptance Criteria

- Client Portal change request rows show the related project status when a project is found.
- Missing project data has a clear fallback.
- Client Portal change request rows continue to show description, status, client-facing price, pricing state, approved date, work readiness, and rule.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new change request action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
