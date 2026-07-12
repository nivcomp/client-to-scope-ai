# NEXT TASK: Supplier Portal Shows Supplier-Visible Messages

## Last Completed

Supplier Portal now lists supplier-visible files and links for the selected supplier's assigned projects. The section uses existing mock `fileLinks`, shows only `supplier_visible` records, and does not add upload or storage integration.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal does not yet show supplier-visible project messages.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Supplier Portal to show supplier-visible project messages from the existing mock `projectMessages` records for the selected supplier's assigned projects.

## Why This Matters

Supplier-facing files now respect visibility boundaries. Supplier-facing messages should do the same so the placeholder can show work communication without exposing client-visible or agency-only messages.

## Acceptance Criteria

- Supplier Portal lists project messages for the selected supplier's assigned projects.
- Only records with `visibility` set to `supplier_visible` are shown.
- The section uses existing mock `projectMessages`; no chat, AI, or notification integration is added.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
