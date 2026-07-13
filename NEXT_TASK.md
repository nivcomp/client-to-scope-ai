# NEXT TASK: Client Portal Groups Change Request Context

## Last Completed

Client Portal change request rows now show the related project's client-safe start rule.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal change request rows now include several related project and change request signals, but the table headings are not visually grouped.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add small client-safe grouping labels above the Client Portal change request table to clarify project context versus change request context.

## Why This Matters

The change request table now has enough useful context that clients need a quick way to separate base project state from change request state. A simple label row can improve scanability without changing workflows.

## Acceptance Criteria

- Client Portal change request section clearly labels project context and change request context.
- The existing change request table columns and values remain intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new change request action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
