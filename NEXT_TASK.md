# NEXT TASK: Client Portal Shows Client-Visible Files

## Last Completed

Client Detail now exposes a clear action to open Client Portal for the selected client. The action preserves the selected client context already held in app state, so Client Portal shows that client's projects, payment state, paid hours, and change requests.

## Remaining Limitations

- Client portal state is local only and resets on refresh or local session reset.
- Client Portal does not yet show client-visible files and links attached to the selected client's projects.
- There is still no durable database persistence, authentication, or real client account context.

## Recommended Next Work Unit

Update Client Portal to show client-visible files and links from the existing mock `fileLinks` records for the selected client's projects.

## Why This Matters

The MVP docs include files and links as part of client-facing project communication. Showing only client-visible items keeps the portal useful while preserving agency-only and supplier-only visibility boundaries.

## Acceptance Criteria

- Client Portal lists files and links for the selected client's projects.
- Only records with `visibility` set to `client_visible` are shown.
- The section uses existing mock `fileLinks`; no upload or storage integration is added.
- Client Portal continues to hide supplier cost, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
