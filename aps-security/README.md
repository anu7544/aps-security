# APS Security Frontend Challenge

This is my implementation of the APS security frontend assignment.  
The goal was to rebuild three screens from the provided design reference and wire them together as a small React app.

Live URL: https://YOUR-VERCEL-URL  
GitHub: https://github.com/YOUR-USERNAME/aps-security

---

## Tech stack

- React (Vite)
- React Router
- Tailwind CSS
- Functional components + hooks
- Mock JSON data (no real backend)

---

## Features

### Screens

- **Login / Sign up**
  - Split layout: marketing content on the left, form on the right
  - Fields: first name, last name, email, password
  - Terms checkbox and social login buttons (Apple, Google, Meta)
  - On submit, it navigates to the dashboard

- **Dashboard (Scan list)**
  - Left sidebar with navigation and user info
  - Severity summary cards (Critical, High, Medium, Low)
  - Scan table with:
    - Name, type, status, progress, vulnerability counts, last scan time
  - Status chips for Completed / Scheduled / Failed
  - Colored badges for per‑severity vulnerability counts
  - Toolbar with search, filter/column buttons, and a “New Scan” button
  - Clicking a scan row opens the scan detail screen

- **Active Scan Detail**
  - Same sidebar + header layout as dashboard
  - Circular “0% In Progress” indicator
  - Step tracker (Spidering, Mapping, Testing, Validating, Reporting)
  - Metadata row with scan type, targets, started time, credentials, files, checklists
  - Live scan console (Activity Log / Verification Loops tabs)
  - Finding log with stacked vulnerability cards and severity badges
  - Bottom status bar (Sub‑agents, Parallel Executions, Operations, per‑severity counts)

### Theme

- Global **light / dark mode** toggle
- Dark mode uses near‑black backgrounds and teal as the primary accent
- Light mode uses white / light gray backgrounds
- Theme is stored in `localStorage` so it persists across refreshes

### Interactivity

- Navigation:
  - Login → Dashboard (on submit)
  - Dashboard row click → Scan detail
- Tabs switch between Activity Log and Verification Loops
- “New Scan”, “Export Report” and “Stop Scan” trigger visible UI feedback (toasts/state)
- Search input and buttons are wired up in the UI (no real backend calls)

---

## Project structure

```txt
src/
  components/
    ThemeToggle.jsx
    Sidebar.jsx
    PrimaryButton.jsx
    StatusChip.jsx
    SeverityBadge.jsx
  data/
    mockScans.js
    activeScan.js
  layouts/
    AppShell.jsx
  pages/
    LoginPage.jsx
    DashboardPage.jsx
    ScanDetailPage.jsx
  theme/
    ThemeContext.jsx
  main.jsx
  index.css
