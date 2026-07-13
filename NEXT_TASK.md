# NEXT TASK: Supplier Portal Groups Scope Item Context

## Last Completed

Supplier Portal assigned scope item rows now show the parent project's supplier-safe start rule.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal scope item rows now show project status and start readiness, but the section does not clearly label supplier-safe scope context.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add a short supplier-safe context label above the Supplier Portal assigned scope items table.

## Why This Matters

The assigned scope table now includes project context and scope context. A short label can improve scanability and reinforce that only supplier-visible scope is shown.

## Acceptance Criteria

- Supplier Portal assigned scope items section labels supplier-safe project and scope context.
- Existing Supplier Portal project, project status, project start rule, scope, phase, item, and acceptance columns remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
