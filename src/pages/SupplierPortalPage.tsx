import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { suppliers } from "../data/mockData";
import { canWorkStart, getProjectName } from "../lib/domainHelpers";
import type { Project, TimeEntry } from "../types/domain";

type SupplierPortalPageProps = {
  selectedSupplierId?: string;
  projects: Project[];
  timeEntries: TimeEntry[];
};

export function SupplierPortalPage({ selectedSupplierId, projects, timeEntries }: SupplierPortalPageProps) {
  const fallbackSupplier = suppliers.find((supplier) => supplier.status === "approved") ?? suppliers[0];
  const supplier = suppliers.find((item) => item.id === selectedSupplierId) ?? fallbackSupplier;
  const assigned = supplier
    ? projects.filter((project) => project.assignedSupplierIds.includes(supplier.id))
    : [];
  const supplierTimeEntries = supplier
    ? timeEntries.filter((entry) => entry.supplierId === supplier.id)
    : [];
  return (
    <>
      <PageHeader title="Supplier Portal Placeholder" subtitle="A limited supplier view for assigned work, updates, own time entries, and amount owed." />
      <section className="card">
        <h2>Supplier cannot see client price or margin</h2>
        <p>{selectedSupplierId ? `Viewing as ${supplier?.name}.` : `No supplier selected. Showing fallback supplier ${supplier?.name}.`}</p>
        <table>
          <thead>
            <tr>
              <th>Assigned project</th>
              <th>Start rule</th>
              <th>Visible instruction</th>
            </tr>
          </thead>
          <tbody>
            {assigned.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{canWorkStart(project) ? "Ready" : "Blocked by agency gate"}</td>
                <td>View assigned scope items only</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="card">
        <h2>My time entries</h2>
        {supplierTimeEntries.length ? (
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Date</th>
                <th>Hours</th>
                <th>Status</th>
                <th>Payable rule</th>
              </tr>
            </thead>
            <tbody>
              {supplierTimeEntries.map((entry) => (
                <tr key={entry.id}>
                  <td>{getProjectName(entry.projectId, projects)}</td>
                  <td>{entry.date}</td>
                  <td>{entry.hours}</td>
                  <td><StatusBadge label={entry.status} tone={entry.status === "approved" ? "success" : "warning"} /></td>
                  <td>{entry.status === "approved" ? "Payable" : "Not payable until agency approval"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No time entries for this supplier in the current local session.</p>
        )}
      </section>
    </>
  );
}
