# NEXT TASK: Client Detail Opens Portal Context

## Last Completed

Client Portal now receives `selectedClientId` and local app state. It shows the selected or fallback client's projects, payment gate status, visible payment/hour-bank state, and change-request status without exposing supplier cost, agency margin, or internal pricing notes.

## Remaining Limitations

- Client portal state is local only and resets on refresh or local session reset.
- Client Portal still has to be opened from the sidebar, so the selected client context is not obvious from Client Detail.
- There is still no durable database persistence, authentication, or real client account context.

## Recommended Next Work Unit

Add a simple button from Client Detail to open Client Portal for the selected client using the existing selected client state.

## Why This Matters

Supplier Detail can now jump into the supplier-facing placeholder for the selected supplier. Client Detail should offer the same workflow so Yaniv can inspect a client internally and immediately preview what the client would see.

## Acceptance Criteria

- Client Detail exposes a clear action to open Client Portal for the selected client.
- The action preserves the selected client context already held in app state.
- Client Portal shows that client's projects, payment state, paid hours, and change requests.
- Client Portal continues to hide supplier cost, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
