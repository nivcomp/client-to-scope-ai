# Work Log

Add one concise entry at the end of every autonomous work cycle.

Do not delete previous entries. Record only work that actually happened and tests that actually ran.

## Entry template

### YYYY-MM-DD — Short work-unit title

**Work unit**  
The single unit selected for this cycle.

**Changes**  
- Main implementation or documentation changes.
- Important behavior added, removed, or corrected.

**Tests**  
- Commands run and results.
- Manual checks performed.
- Known checks that could not be run and why.

**Files**  
- Main files changed.

**Commit**  
- Commit SHA and message, or `Not committed` with the reason.

**Next**  
- The one recommended next work unit.

---

### 2026-07-11 — Automation memory foundation

**Work unit**  
Create the top-level project memory files used by future Codex automation cycles.

**Changes**  
- Added top-level product vision, MVP scope, architecture, decision log, and work-log documents.
- Preserved the existing detailed documentation under `docs/` and the existing `NEXT_TASK.md`.

**Tests**  
- Documentation-only change; application tests were not run as part of this setup action.

**Files**  
- `PRODUCT_VISION.md`
- `MVP_SCOPE.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `WORK_LOG.md`

**Commit**  
- Created through GitHub file commits on `main`.

**Next**  
- Add `AGENTS.md`, then let the first automation cycle inspect the repository and update `NEXT_TASK.md` based on the code's actual status.

---

### 2026-07-11 - Local payment request creation

**Work unit**  
Add a local manual client payment request flow from Project Detail.

**Changes**  
- Added app-level local state handling for creating requested client payments.
- Added a Project Detail payment request form for projects without an existing payment record.
- New requested payments feed the existing Action Queue and Payments / Hour Banks views through shared local state.
- Updated project memory to point the next cycle at local supplier assignment controls.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/App.tsx`
- `src/pages/ProjectDetailPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Add local supplier assignment controls in Project Detail.

---

### 2026-07-11 - Local supplier assignment controls

**Work unit**  
Add local assign and remove controls for project suppliers in Project Detail.

**Changes**  
- Added app-level local state handling for assigning and unassigning suppliers on a project.
- Added Project Detail controls to assign only approved suppliers and remove assigned suppliers.
- Local assignments update Project Detail and the Action Queue through shared project state.
- Updated project memory to point the next cycle at supplier-facing views using local assignment state.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/App.tsx`
- `src/pages/ProjectDetailPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Update Supplier Detail and Supplier Portal to use app-level local project and time-entry state.

---

### 2026-07-11 - Supplier views use local assignment state

**Work unit**  
Update supplier-facing placeholder screens to use app-level local project and time-entry state.

**Changes**  
- Passed local `projects` and `timeEntries` state into Supplier Detail.
- Passed local `projects` state into Supplier Portal.
- Added assigned-project visibility to Supplier Detail so local supplier assignments appear even before time is logged.
- Preserved supplier visibility rules by keeping client price, agency margin, and internal pricing notes out of supplier-facing screens.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/App.tsx`
- `src/pages/SupplierDetailPage.tsx`
- `src/pages/SupplierPortalPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Update Supplier Portal to use the selected supplier context instead of a fixed placeholder supplier id.

---

### 2026-07-11 - Supplier portal selected context

**Work unit**  
Update Supplier Portal to use the selected supplier context instead of a fixed placeholder supplier id.

**Changes**  
- Passed `selectedSupplierId` from app state into Supplier Portal.
- Supplier Portal now uses the selected supplier when available.
- Added a clear fallback supplier state for the placeholder portal when no supplier has been selected.
- Preserved supplier visibility rules by keeping client price, agency margin, and internal pricing notes out of the portal.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/App.tsx`
- `src/pages/SupplierPortalPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Show local supplier time entries in Supplier Portal.

---

### 2026-07-12 - Supplier portal local time entries

**Work unit**  
Show selected supplier local time entries in Supplier Portal.

**Changes**  
- Passed app-level local `timeEntries` into Supplier Portal.
- Added a supplier-facing time-entry table filtered to the selected or fallback supplier.
- Marked approved supplier time as payable and submitted/rejected time as not payable until agency approval.
- Preserved supplier visibility rules by keeping client price, agency margin, and internal pricing notes out of the portal.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/App.tsx`
- `src/pages/SupplierPortalPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Add a Supplier Detail action that opens Supplier Portal for the selected supplier context.

---

### 2026-07-12 - Supplier detail opens portal context

**Work unit**  
Add a Supplier Detail action that opens Supplier Portal for the selected supplier context.

**Changes**  
- Added an app-level handler that opens Supplier Portal while preserving `selectedSupplierId`.
- Passed the handler into Supplier Detail.
- Added an "Open supplier portal" action to Supplier Detail.
- Preserved supplier visibility rules by keeping client price, agency margin, and internal pricing notes out of supplier-facing screens.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/App.tsx`
- `src/pages/SupplierDetailPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Update Client Portal to use selected client context and local client-facing state.

---

### 2026-07-12 - Client portal selected context

**Work unit**  
Update Client Portal to use selected client context and local client-facing state.

**Changes**  
- Passed selected client, local projects, payments, hour banks, and change requests into Client Portal.
- Replaced hardcoded client seed data with selected-client or fallback-client context.
- Added client-facing project status, payment gate, payment/hour-bank, and change-request views.
- Preserved visibility rules by excluding supplier cost, agency margin, and internal pricing notes.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/App.tsx`
- `src/pages/ClientPortalPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Add a Client Detail action that opens Client Portal for the selected client context.

---

### 2026-07-12 - Client detail opens portal context

**Work unit**  
Add a Client Detail action that opens Client Portal for the selected client context.

**Changes**  
- Added an app-level handler that opens Client Portal while preserving `selectedClientId`.
- Passed the handler into Client Detail.
- Added an "Open client portal" action to Client Detail.
- Preserved client visibility rules by keeping supplier cost, agency margin, and internal pricing notes out of Client Portal.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/App.tsx`
- `src/pages/ClientDetailPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Show client-visible files and links in Client Portal.

---

### 2026-07-12 - Client portal visible files

**Work unit**  
Show client-visible files and links in Client Portal.

**Changes**  
- Added a client-visible file/link section to Client Portal.
- Filtered project files by selected client projects and `visibility === "client_visible"`.
- Added one client-visible mock file link so the placeholder has a visible client-facing artifact.
- Preserved visibility rules by excluding agency-only and supplier-only files from Client Portal.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/pages/ClientPortalPage.tsx`
- `src/data/mockData.ts`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Show client-visible project messages in Client Portal.

---

### 2026-07-12 - Client portal visible messages

**Work unit**  
Show client-visible project messages in Client Portal.

**Changes**  
- Added a client-visible messages section to Client Portal.
- Filtered project messages by selected client projects and `visibility === "client_visible"`.
- Used existing mock `projectMessages`; no chat, AI, or notification integration was added.
- Preserved visibility rules by excluding agency-only and supplier-only messages from Client Portal.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/pages/ClientPortalPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Show supplier-visible files and links in Supplier Portal.

---

### 2026-07-12 - Supplier portal visible files

**Work unit**  
Show supplier-visible files and links in Supplier Portal.

**Changes**  
- Added a supplier-visible file/link section to Supplier Portal.
- Filtered project files by the selected supplier's assigned projects and `visibility === "supplier_visible"`.
- Used existing mock `fileLinks`; no upload or storage integration was added.
- Preserved visibility rules by excluding client-only and agency-only files from Supplier Portal.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/pages/SupplierPortalPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Show supplier-visible project messages in Supplier Portal.

---

### 2026-07-12 - Supplier portal visible messages

**Work unit**  
Show supplier-visible project messages in Supplier Portal.

**Changes**  
- Added a supplier-visible messages section to Supplier Portal.
- Filtered project messages by the selected supplier's assigned projects and `visibility === "supplier_visible"`.
- Added one supplier-visible mock project message so the placeholder has a visible supplier-facing communication item.
- Preserved visibility rules by excluding client-visible and agency-only messages from Supplier Portal.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/pages/SupplierPortalPage.tsx`
- `src/data/mockData.ts`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Add consistent empty states to Client Portal and Supplier Portal tables.

---

### 2026-07-12 - Portal empty states

**Work unit**  
Add consistent empty states to Client Portal and Supplier Portal tables.

**Changes**  
- Added a clear empty state when Client Portal has no visible projects for the selected client.
- Added a clear empty state when Supplier Portal has no assigned projects for the selected supplier.
- Kept existing empty states for payments, files, messages, time entries, and change requests unchanged.
- Preserved all existing visibility filters and business rules.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/pages/ClientPortalPage.tsx`
- `src/pages/SupplierPortalPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Show supplier-visible assigned scope items in Supplier Portal.

---

### 2026-07-12 - Supplier portal scope items

**Work unit**  
Show supplier-visible assigned scope items in Supplier Portal.

**Changes**  
- Added an assigned scope items section to Supplier Portal.
- Filtered scope items by the selected supplier's assigned projects and `supplierVisible === true`.
- Used existing mock `scopes` and `scopeItems`; no workflow, persistence, AI, auth, or payment integration was added.
- Preserved supplier visibility rules by excluding client price, agency margin, internal delivery notes, and pricing notes.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/pages/SupplierPortalPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Show client-visible scope items in Client Portal.

---

### 2026-07-12 - Client portal scope items

**Work unit**  
Show client-visible scope items in Client Portal.

**Changes**  
- Added a scope items section to Client Portal.
- Filtered scope items by the selected client's projects and `clientVisible === true`.
- Used existing mock `scopes` and `scopeItems`; no workflow, persistence, AI, auth, or payment integration was added.
- Preserved client visibility rules by excluding supplier costs, agency margin, internal delivery notes, and pricing notes.

**Tests**  
- `pnpm run build` passed.
- No automated test script exists beyond the production build.

**Files**  
- `src/pages/ClientPortalPage.tsx`
- `README.md`
- `NEXT_TASK.md`
- `WORK_LOG.md`

**Commit**  
- Commit will be created after this log entry; final automation summary records the SHA.

**Next**  
- Show scope approval details in Client Portal.
