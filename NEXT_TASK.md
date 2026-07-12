# NEXT TASK: Supplier Portal Shows Supplier-Visible Files

## Last Completed

Client Portal now lists client-visible project messages for the selected client's projects. The section uses existing mock `projectMessages`, shows only `client_visible` records, and does not add chat, AI, or notification integration.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal does not yet show supplier-visible files and links attached to assigned projects.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Supplier Portal to show supplier-visible files and links from the existing mock `fileLinks` records for the selected supplier's assigned projects.

## Why This Matters

The client portal now respects file and message visibility. The supplier portal should similarly show only supplier-visible delivery artifacts while preserving client-price and agency-only boundaries.

## Acceptance Criteria

- Supplier Portal lists files and links for the selected supplier's assigned projects.
- Only records with `visibility` set to `supplier_visible` are shown.
- The section uses existing mock `fileLinks`; no upload or storage integration is added.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
