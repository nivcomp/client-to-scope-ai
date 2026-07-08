import { clients, projectPricing, projects, suppliers } from "../data/mockData";
import type { Project, ProjectStatus } from "../types/domain";

export const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export const statusLabels: Record<ProjectStatus, string> = {
  lead_started: "Lead started",
  discovery_in_progress: "Discovery",
  waiting_for_agency_pricing: "Needs pricing",
  pricing_set: "Pricing set",
  brief_ready: "Brief ready",
  scope_ready: "Scope ready",
  waiting_for_client_approval: "Client approval",
  approved_by_client: "Approved",
  waiting_for_payment: "Waiting payment",
  paid_ready_to_start: "Ready to start",
  assigned_to_supplier: "Assigned",
  in_development: "In development",
  change_requested: "Change requested",
  change_priced: "Change priced",
  change_approved: "Change approved",
  completed: "Completed",
};

export function getClient(project: Project) {
  return clients.find((client) => client.id === project.clientId);
}

export function getClientById(clientId: string) {
  return clients.find((client) => client.id === clientId);
}

export function getPricing(projectId: string) {
  return projectPricing.find((pricing) => pricing.projectId === projectId);
}

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}

export function getProjectsForClient(clientId: string) {
  return projects.filter((project) => project.clientId === clientId);
}

export function getSupplierById(supplierId: string) {
  return suppliers.find((supplier) => supplier.id === supplierId);
}

export function getSupplierName(supplierId: string) {
  return suppliers.find((supplier) => supplier.id === supplierId)?.name ?? "Unassigned";
}

export function getProjectName(projectId: string) {
  return projects.find((project) => project.id === projectId)?.name ?? "Unknown project";
}

export function canWorkStart(project: Project) {
  return project.paymentGateStatus === "paid" || project.paymentGateStatus === "hour_bank_available";
}

export function marginAmount() {
  const revenue = projectPricing.reduce((sum, pricing) => sum + pricing.clientPrice, 0);
  const cost = projectPricing.reduce((sum, pricing) => sum + pricing.supplierCostEstimate, 0);
  return { revenue, cost, margin: revenue - cost };
}
