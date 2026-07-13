# NEXT TASK: Supplier Portal Groups File Context

## Last Completed

Supplier Portal supplier-visible file rows now show the parent project's supplier-safe start rule.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal file rows now show project status and start readiness, but the section does not clearly label supplier-safe file context.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Add a short supplier-safe context label above the Supplier Portal files and links table.

## Why This Matters

The file table now includes project context and file context. A short label can reinforce that suppliers only see supplier-visible files and delivery state.

## Acceptance Criteria

- Supplier Portal files and links section labels supplier-safe project and file context.
- Existing Supplier Portal file title, project, project status, project start rule, type, and link columns remain intact.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- Existing Supplier Portal project, scope, file, message, and time information remains intact.
- Supplier cost, agency margin, and internal pricing notes remain hidden.
- No new supplier action, persistence, or payment integration is added.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
