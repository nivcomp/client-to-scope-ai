import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { timeEntries } from "../data/mockData";
import { getProjectName, getSupplierName } from "../lib/domainHelpers";

export function SupplierTimePage() {
  return (
    <>
      <PageHeader title="Supplier Time Entries" subtitle="Submitted time needs Yaniv's approval before it becomes payable or consumes paid hours." />
      <section className="card">
        <table>
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Project</th>
              <th>Date</th>
              <th>Hours</th>
              <th>Status</th>
              <th>Payable rule</th>
            </tr>
          </thead>
          <tbody>
            {timeEntries.map((entry) => (
              <tr key={entry.id}>
                <td>{getSupplierName(entry.supplierId)}</td>
                <td>{getProjectName(entry.projectId)}</td>
                <td>{entry.date}</td>
                <td>{entry.hours}</td>
                <td><StatusBadge label={entry.status} tone={entry.status === "approved" ? "success" : "warning"} /></td>
                <td>{entry.status === "approved" ? "Payable" : "Waiting for approval"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
