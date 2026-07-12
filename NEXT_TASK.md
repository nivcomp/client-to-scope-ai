# NEXT TASK: Client Portal Shows Client-Visible Scope Items

## Last Completed

Supplier Portal now lists supplier-visible scope items for the selected supplier's assigned projects.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal shows client-facing projects, payments, files, messages, and change requests, but does not yet list client-visible scope items.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Client Portal to show client-visible scope items from existing mock `scopes` and `scopeItems` for the selected client's projects.

## Why This Matters

Client Portal already gives clients project status, payment status, files, messages, and change request visibility. Listing client-visible scope items makes the client placeholder more useful for approval review without exposing supplier costs, agency margin, or internal notes.

## Acceptance Criteria

- Client Portal lists scope items for the selected client's projects.
- Only scope items with `clientVisible === true` are shown.
- The section uses existing mock `scopes` and `scopeItems`; no new workflow or persistence is added.
- Client Portal continues to hide supplier cost, agency margin, and internal delivery notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
