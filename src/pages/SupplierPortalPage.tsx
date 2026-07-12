import { PageHeader } from "../components/PageHeader";
import { suppliers } from "../data/mockData";
import { canWorkStart } from "../lib/domainHelpers";
import type { Project } from "../types/domain";

type SupplierPortalPageProps = {
  selectedSupplierId?: string;
  projects: Project[];
};

export function SupplierPortalPage({ selectedSupplierId, projects }: SupplierPortalPageProps) {
  const fallbackSupplier = suppliers.find((supplier) => supplier.status === "approved") ?? suppliers[0];
  const supplier = suppliers.find((item) => item.id === selectedSupplierId) ?? fallbackSupplier;
  const assigned = supplier
    ? projects.filter((project) => project.assignedSupplierIds.includes(supplier.id))
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
    </>
  );
}
