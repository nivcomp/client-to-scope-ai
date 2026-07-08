import { useState } from "react";
import { Layout } from "./components/Layout";
import { AIWorkbenchPage } from "./pages/AIWorkbenchPage";
import { ChangeRequestsPage } from "./pages/ChangeRequestsPage";
import { ClientDetailPage } from "./pages/ClientDetailPage";
import { ClientPortalPage } from "./pages/ClientPortalPage";
import { ClientsPage } from "./pages/ClientsPage";
import { DashboardPage } from "./pages/DashboardPage";
import { PaymentsHoursPage } from "./pages/PaymentsHoursPage";
import { PricingMarginPage } from "./pages/PricingMarginPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SupplierDetailPage } from "./pages/SupplierDetailPage";
import { SupplierPortalPage } from "./pages/SupplierPortalPage";
import { SupplierTimePage } from "./pages/SupplierTimePage";
import { SuppliersPage } from "./pages/SuppliersPage";
import type { ViewKey } from "./views";

function App() {
  const [activeView, setActiveView] = useState<ViewKey>("dashboard");
  const [selectedClientId, setSelectedClientId] = useState<string | undefined>();
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>();
  const [selectedSupplierId, setSelectedSupplierId] = useState<string | undefined>();

  function openClientDetail(clientId: string) {
    setSelectedClientId(clientId);
    setActiveView("client-detail");
  }

  function openProjectDetail(projectId: string) {
    setSelectedProjectId(projectId);
    setActiveView("project-detail");
  }

  function openSupplierDetail(supplierId: string) {
    setSelectedSupplierId(supplierId);
    setActiveView("supplier-detail");
  }

  const page = {
    dashboard: <DashboardPage />,
    clients: <ClientsPage onClientSelect={openClientDetail} />,
    "client-detail": <ClientDetailPage selectedClientId={selectedClientId} onProjectSelect={openProjectDetail} />,
    projects: <ProjectsPage onProjectSelect={openProjectDetail} />,
    "project-detail": <ProjectDetailPage selectedProjectId={selectedProjectId} />,
    suppliers: <SuppliersPage onSupplierSelect={openSupplierDetail} />,
    "supplier-detail": <SupplierDetailPage selectedSupplierId={selectedSupplierId} />,
    "pricing-margin": <PricingMarginPage />,
    "change-requests": <ChangeRequestsPage />,
    "supplier-time": <SupplierTimePage />,
    "payments-hours": <PaymentsHoursPage />,
    "client-portal": <ClientPortalPage />,
    "supplier-portal": <SupplierPortalPage />,
    "ai-workbench": <AIWorkbenchPage />,
  } satisfies Record<ViewKey, JSX.Element>;

  return (
    <Layout activeView={activeView} onNavigate={setActiveView}>
      {page[activeView]}
    </Layout>
  );
}

export default App;
