import { PageHeader } from "../components/PageHeader";
import { canWorkStart } from "../lib/domainHelpers";
import type { Project } from "../types/domain";

type SupplierPortalPageProps = {
  projects: Project[];
};

export function SupplierPortalPage({ projects }: SupplierPortalPageProps) {
  const supplierId = "supplier-1";
  const assigned = projects.filter((project) => project.assignedSupplierIds.includes(supplierId));
  return (
    <>
      <PageHeader title="Supplier Portal Placeholder" subtitle="A limited supplier view for assigned work, updates, own time entries, and amount owed." />
      <section className="card">
        <h2>Supplier cannot see client price or margin</h2>
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
    </>
  );
}
