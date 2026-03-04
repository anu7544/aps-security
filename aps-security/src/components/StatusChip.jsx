const map = {
  Completed: "bg-green-500/10 text-green-400 border-green-500/40",
  Scheduled: "bg-gray-500/10 text-gray-300 border-gray-500/40",
  Failed: "bg-red-500/10 text-red-400 border-red-500/40",
};

export default function StatusChip({ status }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${map[status]}`}
    >
      {status}
    </span>
  );
}
