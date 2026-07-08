import { useState } from "react";
import { Layout } from "./components/Layout";
import { AIWorkbenchPage } from "./pages/AIWorkbenchPage";
import { ChangeRequestsPage } from "./pages/ChangeRequestsPage";
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

  const page = {
    dashboard: <DashboardPage />,
    clients: <ClientsPage />,
    projects: <ProjectsPage />,
    "project-detail": <ProjectDetailPage />,
    suppliers: <SuppliersPage />,
    "supplier-detail": <SupplierDetailPage />,
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
