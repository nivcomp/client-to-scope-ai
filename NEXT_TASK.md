# NEXT TASK: Client Portal Uses Selected Client Context

## Last Completed

Supplier Detail now exposes a clear action to open Supplier Portal for the selected supplier. The action preserves the selected supplier context already held in app state, so the portal shows that supplier's assigned projects and local time entries.

## Remaining Limitations

- Supplier assignment and time changes are local only and reset on refresh or local session reset.
- Client Portal still uses placeholder content and does not reflect the selected client context.
- There is still no durable database persistence, authentication, or real client account context.

## Recommended Next Work Unit

Update Client Portal to receive `selectedClientId` and local app state so it can show the selected client's visible projects, payment gate status, and approval/change-request context.

## Why This Matters

Supplier-facing placeholder workflow now follows selected context. Client-facing placeholder workflow should do the same so Yaniv can inspect a client internally and understand what the client would see without adding authentication or persistence.

## Acceptance Criteria

- Client Portal receives `selectedClientId` from app state.
- Client Portal shows selected client context when available and a clear fallback when not.
- Client Portal shows only client-appropriate project status, payment gate, and change-request status.
- Client Portal does not expose supplier cost, agency margin, or internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
