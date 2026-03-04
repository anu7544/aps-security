const colorMap = {
  Critical: "bg-critical/10 text-critical border-critical/40",
  High: "bg-high/10 text-high border-high/40",
  Medium: "bg-medium/10 text-medium border-medium/40",
  Low: "bg-low/10 text-low border-low/40",
};

export default function SeverityBadge({ level }) {
  return (
    <span
      className={`inline-flex min-w-[70px] justify-center rounded-full border px-2 py-0.5 text-xs font-semibold ${colorMap[level]}`}
    >
      {level}
    </span>
  );
}
