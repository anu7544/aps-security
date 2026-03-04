import Sidebar from "../../Sidebar";
import ThemeToggle from "../components/ThemeToggle";

export default function AppShell({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0F0F0F] text-gray-100 dark:bg-[#0F0F0F]">
      <Sidebar />
      <main className="flex-1 bg-[#0F0F0F] px-6 py-4 text-gray-100 dark:bg-[#0F0F0F]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">Org:</div>
            <div className="text-sm font-medium text-white">Project X</div>
          </div>
          <ThemeToggle />
        </div>
        {children}
      </main>
    </div>
  );
}
