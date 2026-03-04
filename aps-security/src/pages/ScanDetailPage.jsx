import { useState } from "react";
import AppShell from "../layouts/AppShell";
import { activeScan } from "../data/activeScan";
import PrimaryButton from "../components/PrimaryButton";
import SeverityBadge from "../components/SeverityBadge";

const steps = ["Spidering", "Mapping", "Testing", "Validating", "Reporting"];

export default function ScanDetailPage() {
  const [activeTab, setActiveTab] = useState("Activity Log");
  const [toast, setToast] = useState("");

  const handleAction = (label) => {
    setToast(`${label} clicked`);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <AppShell>
      {/* Breadcrumb + actions */}
      <header className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="text-xs text-gray-400">
          Scan / Private Assets /{" "}
          <span className="font-medium text-gray-200">New Scan</span>
        </div>
        <div className="flex gap-2">
          <PrimaryButton variant="ghost" onClick={() => handleAction("Export Report")}>
            Export Report
          </PrimaryButton>
          <PrimaryButton onClick={() => handleAction("Stop Scan")}>
            Stop Scan
          </PrimaryButton>
        </div>
      </header>

      {/* Toast */}
      {toast && (
        <div className="mb-3 inline-flex rounded-md bg-gray-800 px-3 py-1 text-xs text-gray-100">
          {toast}
        </div>
      )}

      {/* Progress + steps */}
      <section className="mb-4 flex flex-wrap gap-6 rounded-xl border border-gray-800 bg-[#020617] p-4 text-sm">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 rounded-full border-4 border-gray-700">
            <div className="absolute inset-[6px] flex items-center justify-center rounded-full bg-[#020617] text-center">
              <div className="text-xs text-gray-400">
                <span className="block text-lg font-semibold text-gray-100">0%</span>
                In Progress
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-2 text-xs text-gray-400">Scan Phases</div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`h-6 w-20 rounded-full border px-2 text-center text-[11px] ${
                    index === 0
                      ? "border-teal bg-teal/10 text-teal"
                      : "border-gray-700 text-gray-400"
                  }`}
                >
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <div className="h-px w-4 bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metadata */}
      <section className="mb-4 overflow-hidden rounded-xl border border-gray-800 bg-[#020617] text-xs text-gray-300">
        <table className="min-w-full">
          <thead className="bg-[#030712] text-[11px] uppercase text-gray-500">
            <tr>
              <th className="px-4 py-2 text-left">Scan Type</th>
              <th className="px-4 py-2 text-left">Targets</th>
              <th className="px-4 py-2 text-left">Started At</th>
              <th className="px-4 py-2 text-left">Credentials</th>
              <th className="px-4 py-2 text-left">Files</th>
              <th className="px-4 py-2 text-left">Checklists</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">{activeScan.header.type}</td>
              <td className="px-4 py-3">{activeScan.header.targets}</td>
              <td className="px-4 py-3">{activeScan.header.startedAt}</td>
              <td className="px-4 py-3">{activeScan.header.credentials}</td>
              <td className="px-4 py-3">{activeScan.header.files}</td>
              <td className="px-4 py-3">{activeScan.header.checklists}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Bottom panels */}
      <section className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        {/* Live console */}
        <div className="flex flex-col rounded-xl border border-gray-800 bg-[#020617]">
          <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2 text-xs">
            <div className="font-medium text-gray-100">
              Live Scan Console (Running...)
            </div>
            <div className="inline-flex rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-400">
              Running
            </div>
          </div>
          <div className="flex border-b border-gray-800 text-xs">
            {["Activity Log", "Verification Loops"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-teal text-teal"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="h-64 overflow-auto bg-black/90 px-4 py-3 font-mono text-[11px] text-gray-200">
            {activeTab === "Activity Log" ? (
              activeScan.logs.map((line, idx) => (
                <div key={idx} className="mb-1">
                  {line}
                </div>
              ))
            ) : (
              <div>No verification loops yet.</div>
            )}
          </div>
        </div>

        {/* Finding log */}
        <div className="flex flex-col rounded-xl border border-gray-800 bg-[#020617]">
          <div className="border-b border-gray-800 px-4 py-2 text-xs font-medium text-gray-100">
            Finding Log
          </div>
          <div className="flex-1 space-y-3 overflow-auto px-4 py-3 text-xs">
            {activeScan.findings.map((f) => (
              <div
                key={f.id}
                className="rounded-lg border border-gray-700 bg-[#020617] p-3"
              >
                <div className="mb-1 flex items-center justify-between text-[11px]">
                  <SeverityBadge level={f.severity} />
                  <span className="text-gray-500">{f.time}</span>
                </div>
                <div className="mb-1 text-sm font-semibold text-gray-100">
                  {f.title}
                </div>
                <div className="mb-1 text-[11px] text-teal">{f.path}</div>
                <div className="text-[11px] text-gray-300">{f.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status bar */}
      <footer className="mt-4 rounded-xl border border-gray-800 bg-[#020617] px-4 py-2 text-[11px] text-gray-400">
        Sub-Agents: 0 | Parallel Executions: 2 | Operations: 1 | Critical: 0 |
        High: 0 | Medium: 0 | Low: 0
      </footer>
    </AppShell>
  );
}
