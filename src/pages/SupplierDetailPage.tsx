import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { supplierProfiles, timeEntries } from "../data/mockData";
import { currency, getProjectName, getSupplierById } from "../lib/domainHelpers";

type SupplierDetailPageProps = {
  selectedSupplierId?: string;
};

export function SupplierDetailPage({ selectedSupplierId }: SupplierDetailPageProps) {
  const supplier = selectedSupplierId ? getSupplierById(selectedSupplierId) : undefined;

  if (!supplier) {
    return (
      <>
        <PageHeader title="Supplier Detail" subtitle="Select a supplier from the Suppliers page to inspect assigned work, time, and visibility rules." />
        <section className="empty-state">
          <h2>No supplier selected</h2>
          <p>Open the Suppliers page and choose a supplier row.</p>
        </section>
      </>
    );
  }

  const profile = supplierProfiles.find((item) => item.supplierId === supplier.id);
  const entries = timeEntries.filter((entry) => entry.supplierId === supplier.id);

  return (
    <>
      <PageHeader title="Supplier Detail" subtitle="Supplier-facing data stays limited to assigned work, instructions, time, and amount owed." />
      <section className="detail-grid">
        <article className="card">
          <h2>{supplier.name}</h2>
          <p>{supplier.email}</p>
          <dl className="meta-list">
            <div><dt>Country</dt><dd>{supplier.country}</dd></div>
            <div><dt>Timezone</dt><dd>{supplier.timezone}</dd></div>
            <div><dt>Availability</dt><dd>{profile?.weeklyAvailabilityHours} hrs/week</dd></div>
            <div><dt>Agency cost rate</dt><dd>{profile ? currency.format(profile.hourlyRate) : "Unknown"}/hr</dd></div>
          </dl>
        </article>
        <article className="card warning-card">
          <h2>Supplier visibility rule</h2>
          <p>Supplier portal excludes client price, margin, and internal agency notes.</p>
        </article>
      </section>
      <section className="card">
        <h2>Time entries</h2>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Date</th>
              <th>Hours</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>{getProjectName(entry.projectId)}</td>
                <td>{entry.date}</td>
                <td>{entry.hours}</td>
                <td><StatusBadge label={entry.status} tone={entry.status === "approved" ? "success" : "warning"} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
