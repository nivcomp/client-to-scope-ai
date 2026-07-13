# NEXT TASK: Client Portal Shows Change Request Project Start Rule

## Last Completed

Client Portal change request rows now show the related project status in client-safe terms.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal change request rows show the related project status, but not the related project's start rule.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal change requests to show the related project's client-safe start rule.

## Why This Matters

Change requests sit on top of project delivery. Showing whether the base project is ready, blocked, or waiting on approval/payment gives clients context without adding actions or exposing internal pricing.

## Acceptance Criteria

- Client Portal change request rows show a client-safe project start rule when a project is found.
- Missing project data has a clear fallback.
- Client Portal change request rows continue to show description, project, project status, change request status, client-facing price, pricing state, approved date, work readiness, and rule.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new change request action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
