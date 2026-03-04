export const activeScan = {
  id: "private-assets-1",
  header: {
    type: "Grey Box",
    targets: "google.com",
    startedAt: "Nov 22, 09:00AM",
    credentials: "2 Active",
    files: "Control.pdf",
    checklists: "40/350",
  },
  logs: [
    "[09:00:00] I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.",
    "[09:01:00] Good! target is online. Now let me perform port scanning to identify running services.",
    "[09:02:00] Excellent reconnaissance results: helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server). Let me probe the web server.",
    "[09:03:00] Great! I found a login page for a Help Desk Platform. TODO: Delete the testing account (test:test).",
    "[09:06:00] Great! I can access the dashboard using the 'X-UserId: 10032' header. This suggests an IDOR vulnerability.",
  ],
  findings: [
    {
      id: 1,
      severity: "Critical",
      time: "10:45:23",
      title: "SQL Injection in Authentication Endpoint",
      path: "/api/users/profile",
      description:
        "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
    },
    {
      id: 2,
      severity: "High",
      time: "10:45:23",
      title: "Unauthorized Access to User Metadata",
      path: "/api/auth/login",
      description:
        "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
    },
    {
      id: 3,
      severity: "Medium",
      time: "10:45:23",
      title: "Broken Authentication Rate Limiting",
      path: "/api/search",
      description:
        "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
    },
  ],
};
