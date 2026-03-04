import { NavLink } from "react-router-dom";

const navItems = [
  "Dashboard",
  "Projects",
  "Scans",
  "Schedule",
  "Notifications",
  "Settings",
  "Support",
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-60 flex-col justify-between border-r border-gray-800 bg-darkSurface px-4 py-6 text-sm text-gray-300 dark:bg-darkSurface">
      <div>
        <div className="mb-8 text-2xl font-bold text-white">aps</div>
        <nav className="space-y-1">
          {navItems.map((label) => (
            <button
              key={label}
              className={`flex w-full items-center rounded-md px-3 py-2 text-left text-sm hover:bg-gray-800 ${
                label === "Scans" ? "bg-gray-800 text-white" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-xs text-gray-400">
        <div className="font-medium text-gray-100">admin@edu.com</div>
        <div className="text-[11px]">Security Lead</div>
      </div>
    </aside>
  );
}
