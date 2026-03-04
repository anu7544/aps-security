import { useTheme } from "../theme/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-gray-500 px-3 py-1 text-xs font-medium
                 text-gray-200 hover:bg-gray-700 dark:bg-darkSurface"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "Light" : "Dark"} mode
    </button>
  );
}
