import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

export default function LoginPage() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className={`flex min-h-screen ${
        theme === "dark" ? "bg-[#050505] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Left gradient section */}
      <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-black via-[#0F172A] to-[#0CC8A8] px-12 py-10 text-white lg:flex">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">aps</div>
          <ThemeToggle />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-semibold">
            Expert level Cybersecurity in hours not weeks.
          </h1>
          <h2 className="mb-4 text-sm uppercase tracking-wide text-teal">
            What's included
          </h2>
          <ul className="space-y-3 text-sm text-gray-100">
            <li>Effortlessly spider and map targets to uncover hidden security flaws</li>
            <li>Deliver high-quality, validated findings in hours, not weeks.</li>
            <li>Generate professional, enterprise-grade security reports automatically.</li>
          </ul>
        </div>
        <div className="text-xs text-gray-300">
          ★ Trustpilot <span className="font-semibold">Rated 4.5/5.0</span> (100k+ reviews)
        </div>
      </div>

      {/* Right form section */}
      <div className="flex w-full items-center justify-center px-4 py-10 lg:w-1/2">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl dark:bg-[#111827] dark:text-gray-100">
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <div className="text-xl font-bold text-gray-900 dark:text-white">aps</div>
            <ThemeToggle />
          </div>
          <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Sign up
          </h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <button className="text-teal underline">Log in</button>
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-300">
                  First name*
                </label>
                <input
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-teal focus:ring-1 focus:ring-teal dark:border-gray-600 dark:bg-[#020617]"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-300">
                  Last name*
                </label>
                <input
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-teal focus:ring-1 focus:ring-teal dark:border-gray-600 dark:bg-[#020617]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-300">
                Email address*
              </label>
              <input
                type="email"
                required
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-teal focus:ring-1 focus:ring-teal dark:border-gray-600 dark:bg-[#020617]"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-300">
                Password (8+ characters)*
              </label>
              <input
                type="password"
                minLength={8}
                required
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-teal focus:ring-1 focus:ring-teal dark:border-gray-600 dark:bg-[#020617]"
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
              <input type="checkbox" required className="mt-0.5" />
              <span>
                I agree to Aps's Terms &amp; Conditions and acknowledge the Privacy Policy
              </span>
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-teal px-4 py-2 text-sm font-semibold text-black hover:bg-teal/90"
            >
              Create account
            </button>

            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
              OR
              <span className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              {["Apple", "Google", "Meta"].map((p) => (
                <button
                  key={p}
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:bg-[#020617] dark:text-gray-100"
                >
                  {p}
                </button>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
