import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { clientPayments, clients, hourBanks } from "../data/mockData";
import { currency, getProjectName } from "../lib/domainHelpers";

export function PaymentsHoursPage() {
  return (
    <>
      <PageHeader title="Payments / Hour Banks" subtitle="Manual payment and paid-hour tracking for the first internal MVP." />
      <section className="detail-grid">
        <article className="card">
          <h2>Client payments</h2>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Rule</th>
              </tr>
            </thead>
            <tbody>
              {clientPayments.map((payment) => (
                <tr key={payment.id}>
                  <td>{getProjectName(payment.projectId)}</td>
                  <td>{currency.format(payment.amount)}</td>
                  <td><StatusBadge label={payment.status} tone={payment.status === "received" ? "success" : "warning"} /></td>
                  <td>{payment.status === "received" ? "Work can use this payment" : "Work remains gated"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <article className="card">
          <h2>Hour banks</h2>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Project</th>
                <th>Remaining</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              {hourBanks.map((bank) => (
                <tr key={bank.id}>
                  <td>{clients.find((client) => client.id === bank.clientId)?.company}</td>
                  <td>{bank.projectId ? getProjectName(bank.projectId) : "General"}</td>
                  <td>{bank.hoursRemaining} hrs</td>
                  <td>{bank.expiryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
}
