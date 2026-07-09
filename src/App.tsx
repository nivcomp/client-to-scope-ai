import { useState } from "react";
import { Layout } from "./components/Layout";
import {
  changeRequests as initialChangeRequests,
  clientPayments as initialClientPayments,
  clients as initialClients,
  hourBanks as initialHourBanks,
  projects as initialProjects,
  timeEntries as initialTimeEntries,
} from "./data/mockData";
import { AIWorkbenchPage } from "./pages/AIWorkbenchPage";
import { ActionQueuePage } from "./pages/ActionQueuePage";
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
import type { ChangeRequest, Client, ClientPayment, HourBank, Project, TimeEntry } from "./types/domain";
import type { ViewKey } from "./views";

export type NewClientInput = Pick<Client, "name" | "company" | "email" | "phone" | "notes" | "status">;
export type NewProjectInput = Pick<Project, "name" | "summary" | "budgetSignal">;
export type NewChangeRequestInput = Pick<ChangeRequest, "title" | "description" | "agencyPrice" | "supplierCost">;
export type NewTimeEntryInput = Pick<TimeEntry, "supplierId" | "date" | "hours" | "description">;

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function App() {
  const [activeView, setActiveView] = useState<ViewKey>("dashboard");
  const [selectedClientId, setSelectedClientId] = useState<string | undefined>();
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>();
  const [selectedSupplierId, setSelectedSupplierId] = useState<string | undefined>();
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [changeRequests, setChangeRequests] = useState<ChangeRequest[]>(initialChangeRequests);
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>(initialTimeEntries);
  const [clientPayments, setClientPayments] = useState<ClientPayment[]>(initialClientPayments);
  const [hourBanks] = useState<HourBank[]>(initialHourBanks);

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

  function createClient(input: NewClientInput) {
    const client: Client = {
      id: createId("client"),
      ...input,
      phone: input.phone || undefined,
    };
    setClients((current) => [...current, client]);
    openClientDetail(client.id);
  }

  function createProject(clientId: string, input: NewProjectInput) {
    const project: Project = {
      id: createId("project"),
      clientId,
      name: input.name,
      status: "discovery_in_progress",
      summary: input.summary,
      budgetSignal: input.budgetSignal,
      paymentGateStatus: "blocked",
      assignedSupplierIds: [],
      createdDate: new Date().toISOString().slice(0, 10),
      updatedDate: new Date().toISOString().slice(0, 10),
    };
    setProjects((current) => [...current, project]);
    openProjectDetail(project.id);
  }

  function createChangeRequest(projectId: string, clientId: string, input: NewChangeRequestInput) {
    const request: ChangeRequest = {
      id: createId("change"),
      projectId,
      requestedByClientId: clientId,
      title: input.title,
      description: input.description,
      status: "agency_review",
      agencyPrice: input.agencyPrice,
      supplierCost: input.supplierCost,
    };
    setChangeRequests((current) => [...current, request]);
  }

  function createTimeEntry(projectId: string, input: NewTimeEntryInput) {
    const entry: TimeEntry = {
      id: createId("time"),
      projectId,
      supplierId: input.supplierId,
      date: input.date,
      hours: input.hours,
      description: input.description,
      status: "submitted",
    };
    setTimeEntries((current) => [...current, entry]);
  }

  function markPaymentReceived(paymentId: string) {
    const receivedDate = new Date().toISOString().slice(0, 10);
    const paymentToUpdate = clientPayments.find((payment) => payment.id === paymentId);
    setClientPayments((current) =>
      current.map((payment) =>
        payment.id === paymentId ? { ...payment, status: "received", receivedDate } : payment,
      ),
    );
    if (paymentToUpdate) {
      setProjects((current) =>
        current.map((project) =>
          project.id === paymentToUpdate.projectId
            ? {
                ...project,
                paymentGateStatus: "paid",
                status: project.status === "waiting_for_payment" ? "paid_ready_to_start" : project.status,
              }
            : project,
        ),
      );
    }
  }

  function updateTimeEntryStatus(timeEntryId: string, status: "approved" | "rejected") {
    setTimeEntries((current) =>
      current.map((entry) =>
        entry.id === timeEntryId
          ? { ...entry, status, approvedBy: status === "approved" ? "user-yaniv" : undefined }
          : entry,
      ),
    );
  }

  function updateChangeRequestStatus(changeRequestId: string, status: "priced" | "client_approved" | "declined") {
    setChangeRequests((current) =>
      current.map((request) => {
        if (request.id !== changeRequestId) return request;
        return {
          ...request,
          status,
          approvedDate: status === "client_approved" ? new Date().toISOString().slice(0, 10) : request.approvedDate,
        };
      }),
    );
  }

  const page = {
    dashboard: <DashboardPage clients={clients} projects={projects} changeRequests={changeRequests} timeEntries={timeEntries} />,
    "action-queue": (
      <ActionQueuePage
        clients={clients}
        projects={projects}
        changeRequests={changeRequests}
        timeEntries={timeEntries}
        clientPayments={clientPayments}
        hourBanks={hourBanks}
        onProjectSelect={openProjectDetail}
        onClientSelect={openClientDetail}
        onPaymentReceived={markPaymentReceived}
        onTimeEntryStatusChange={updateTimeEntryStatus}
        onChangeRequestStatusChange={updateChangeRequestStatus}
      />
    ),
    clients: <ClientsPage clients={clients} onClientCreate={createClient} onClientSelect={openClientDetail} />,
    "client-detail": (
      <ClientDetailPage
        selectedClientId={selectedClientId}
        clients={clients}
        projects={projects}
        changeRequests={changeRequests}
        clientPayments={clientPayments}
        hourBanks={hourBanks}
        onProjectCreate={createProject}
        onProjectSelect={openProjectDetail}
      />
    ),
    projects: <ProjectsPage clients={clients} projects={projects} onProjectSelect={openProjectDetail} />,
    "project-detail": (
      <ProjectDetailPage
        selectedProjectId={selectedProjectId}
        clients={clients}
        projects={projects}
        changeRequests={changeRequests}
        timeEntries={timeEntries}
        clientPayments={clientPayments}
        onChangeRequestCreate={createChangeRequest}
        onChangeRequestStatusChange={updateChangeRequestStatus}
        onPaymentReceived={markPaymentReceived}
        onTimeEntryCreate={createTimeEntry}
        onTimeEntryStatusChange={updateTimeEntryStatus}
      />
    ),
    suppliers: <SuppliersPage onSupplierSelect={openSupplierDetail} />,
    "supplier-detail": <SupplierDetailPage selectedSupplierId={selectedSupplierId} />,
    "pricing-margin": <PricingMarginPage />,
    "change-requests": (
      <ChangeRequestsPage
        changeRequests={changeRequests}
        projects={projects}
        onStatusChange={updateChangeRequestStatus}
      />
    ),
    "supplier-time": (
      <SupplierTimePage
        projects={projects}
        timeEntries={timeEntries}
        onStatusChange={updateTimeEntryStatus}
      />
    ),
    "payments-hours": (
      <PaymentsHoursPage
        clients={clients}
        projects={projects}
        clientPayments={clientPayments}
        hourBanks={hourBanks}
        onPaymentReceived={markPaymentReceived}
      />
    ),
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
