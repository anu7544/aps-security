export default function PrimaryButton({ children, onClick, variant = "teal" }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors";
  const styles =
    variant === "teal"
      ? "bg-teal text-black hover:bg-teal/90"
      : "border border-gray-600 bg-transparent text-gray-100 hover:bg-gray-800";

  return (
    <button className={`${base} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
}
