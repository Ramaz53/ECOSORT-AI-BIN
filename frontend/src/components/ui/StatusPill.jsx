export default function StatusPill({ on, children }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${on ? "bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-400" : "bg-track text-muted"}`}>
      <span className={`h-2 w-2 rounded-full ${on ? "animate-pulse bg-green-500" : "bg-slate-400"}`} />
      {children}
    </span>
  );
}
