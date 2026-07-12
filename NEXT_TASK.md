# NEXT TASK: Portals Show Empty States Consistently

## Last Completed

Supplier Portal now lists supplier-visible project messages for the selected supplier's assigned projects. The section uses mock `projectMessages`, shows only `supplier_visible` records, and does not add chat, AI, or notification integration.

## Remaining Limitations

- Portal state is local only and resets on refresh or local session reset.
- Client Portal and Supplier Portal tables can look sparse when a selected client or supplier has no related records.
- There is still no durable database persistence, authentication, or real client/supplier account context.

## Recommended Next Work Unit

Add simple empty states to portal tables where no related projects, payments, files, messages, or time entries exist.

## Why This Matters

The portals now respect selected context and visibility boundaries. Consistent empty states make the MVP clearer when Yaniv previews clients or suppliers with incomplete workflow data.

## Acceptance Criteria

- Client Portal shows clear empty states when no projects, payments, files, messages, or change requests are visible.
- Supplier Portal shows clear empty states when no assigned projects, time entries, files, or messages are visible.
- No new business features, persistence, auth, AI, payment provider, upload, or notification integration is added.
- Visibility rules remain unchanged.
- `pnpm run build` passes.
