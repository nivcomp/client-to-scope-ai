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
