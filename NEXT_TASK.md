# NEXT TASK: Supplier Portal Shows Assigned Scope Items

## Last Completed

Client Portal and Supplier Portal now show clearer empty states when no related projects, payments, files, messages, time entries, or change requests are available.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Supplier Portal says suppliers can view assigned scope items, but it does not yet list the supplier-visible scope items.
- There is still no durable database persistence, authentication, or real supplier account context.

## Recommended Next Work Unit

Update Supplier Portal to show supplier-visible scope items from existing mock `scopes` and `scopeItems` for the selected supplier's assigned projects.

## Why This Matters

Supplier Portal now shows assigned work context, files, messages, and time. Listing supplier-visible scope items makes the supplier placeholder more useful without exposing client price, agency margin, or internal agency notes.

## Acceptance Criteria

- Supplier Portal lists scope items for the selected supplier's assigned projects.
- Only scope items with `supplierVisible === true` are shown.
- The section uses existing mock `scopes` and `scopeItems`; no new workflow or persistence is added.
- Supplier Portal continues to hide client price, agency margin, and internal pricing notes.
- No Supabase, AI APIs, payment providers, auth, or deployment are added.
- `pnpm run build` passes.
