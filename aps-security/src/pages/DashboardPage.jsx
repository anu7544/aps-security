import AppShell from "../layouts/AppShell";
import { scans } from "../data/mockScans";
import { useNavigate } from "react-router-dom";
import StatusChip from "../components/StatusChip";
import PrimaryButton from "../components/PrimaryButton";

const stats = [
  {
    label: "Critical Severity",
    value: 86,
    change: "+2% increase than yesterday",
    color: "text-critical",
  },
  {
    label: "High Severity",
    value: 16,
    change: "+0.9% increase than yesterday",
    color: "text-high",
  },
  {
    label: "Medium Severity",
    value: 26,
    change: "+0.9% decrease than yesterday",
    color: "text-medium",
  },
  {
    label: "Low Severity",
    value: 16,
    change: "+0.9% increase than yesterday",
    color: "text-low",
  },
];

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/scans/${id}`);
  };

  return (
    <AppShell>
      <header className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs text-gray-400">
          Owner: <span className="font-medium text-gray-200">Nammagiri</span> •
          Total Scans: 100 • Scheduled: 1000 • Rescans: 100 • Failed Scans: 100 •
          10 mins ago
        </div>
      </header>

      {/* Severity cards */}
      <section className="mb-6 grid gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-gray-800 bg-[#111827] p-4 text-sm"
          >
            <div className="mb-2 text-xs text-gray-400">{s.label}</div>
            <div className={`text-2xl font-semibold ${s.color}`}>{s.value}</div>
            <div className="mt-1 text-[11px] text-gray-400">{s.change}</div>
          </div>
        ))}
      </section>

      {/* Toolbar */}
      <section className="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative w-full max-w-xs">
            <input
              placeholder="Search scans by name or type..."
              className="w-full rounded-md border border-gray-700 bg-[#020617] px-3 py-2 text-xs text-gray-100 placeholder:text-gray-500 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
            />
          </div>
          <button className="rounded-md border border-gray-700 bg-[#020617] px-3 py-2 text-xs text-gray-100">
            Filter
          </button>
          <button className="rounded-md border border-gray-700 bg-[#020617] px-3 py-2 text-xs text-gray-100">
            Column
          </button>
        </div>
        <PrimaryButton>New Scan</PrimaryButton>
      </section>

      {/* Table */}
      <section className="overflow-hidden rounded-xl border border-gray-800 bg-[#020617]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-xs text-gray-300">
            <thead className="bg-[#030712] text-[11px] uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">Scan Name</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Progress</th>
                <th className="px-4 py-3">Vulnerability</th>
                <th className="px-4 py-3">Last Scan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {scans.map((scan) => (
                <tr
                  key={scan.id}
                  onClick={() => handleRowClick(scan.id)}
                  className="cursor-pointer hover:bg-gray-900/70"
                >
                  <td className="px-4 py-3 text-sm text-gray-100">{scan.name}</td>
                  <td className="px-4 py-3 text-xs text-gray-300">{scan.type}</td>
                  <td className="px-4 py-3">
                    <StatusChip status={scan.status} />
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-200">
                    {scan.progress}%
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1 text-[11px]">
                      <span className="rounded-full bg-critical/10 px-2 py-0.5 text-critical">
                        {scan.vulns.critical}
                      </span>
                      <span className="rounded-full bg-high/10 px-2 py-0.5 text-high">
                        {scan.vulns.high}
                      </span>
                      <span className="rounded-full bg-medium/10 px-2 py-0.5 text-medium">
                        {scan.vulns.medium}
                      </span>
                      <span className="rounded-full bg-low/10 px-2 py-0.5 text-low">
                        {scan.vulns.low}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-300">
                    {scan.lastScan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-gray-800 px-4 py-2 text-[11px] text-gray-500">
          Showing {scans.length} of 100 Scans
        </div>
      </section>
    </AppShell>
  );
}
