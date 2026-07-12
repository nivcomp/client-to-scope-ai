import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { fileLinks, projectMessages, suppliers } from "../data/mockData";
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
  const assignedProjectIds = assigned.map((project) => project.id);
  const supplierVisibleFiles = fileLinks.filter(
    (file) => assignedProjectIds.includes(file.projectId) && file.visibility === "supplier_visible",
  );
  const supplierVisibleMessages = projectMessages.filter(
    (message) => assignedProjectIds.includes(message.projectId) && message.visibility === "supplier_visible",
  );
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
      <section className="card">
        <h2>Files and links</h2>
        {supplierVisibleFiles.length ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Project</th>
                <th>Type</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {supplierVisibleFiles.map((file) => {
                const project = assigned.find((item) => item.id === file.projectId);
                return (
                  <tr key={file.id}>
                    <td>{file.title}</td>
                    <td>{project?.name ?? "Project"}</td>
                    <td>{file.fileType}</td>
                    <td><a href={file.url}>Open</a></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No supplier-visible files or links are available for this supplier yet.</p>
        )}
      </section>
      <section className="card">
        <h2>Messages</h2>
        {supplierVisibleMessages.length ? (
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>From</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {supplierVisibleMessages.map((message) => {
                const project = assigned.find((item) => item.id === message.projectId);
                return (
                  <tr key={message.id}>
                    <td>{project?.name ?? "Project"}</td>
                    <td>{message.authorRole}</td>
                    <td>{message.body}</td>
                    <td>{message.createdDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No supplier-visible project messages are available for this supplier yet.</p>
        )}
      </section>
    </>
  );
}
