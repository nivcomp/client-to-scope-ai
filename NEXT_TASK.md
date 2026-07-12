# NEXT TASK: Client Portal Shows Client-Visible Messages

## Last Completed

Client Portal now lists client-visible files and links for the selected client's projects. The section uses existing mock `fileLinks`, shows only `client_visible` records, and does not add upload or storage integration.

## Remaining Limitations

- Client portal state is local only and resets on refresh or local session reset.
- Client Portal does not yet show client-visible project messages.
- There is still no durable database persistence, authentication, or real client account context.

## Recommended Next Work Unit

Update Client Portal to show client-visible project messages from the existing mock `projectMessages` records for the selected client's projects.

## Why This Matters

The MVP includes AI-assisted and project communication. Showing only client-visible messages gives the client-facing placeholder a clearer communication surface while preserving agency-only and supplier-only visibility boundaries.

## Acceptance Criteria

- Client Portal lists project messages for the selected client's projects.
- Only records with `visibility` set to `client_visible` are shown.
- The section uses existing mock `projectMessages`; no chat, AI, or notification integration is added.
- Client Portal continues to hide supplier cost, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
