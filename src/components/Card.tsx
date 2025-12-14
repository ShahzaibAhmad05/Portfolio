export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-slate-900/10 bg-white shadow-soft ${className}`}>
      {children}
    </div>
  );
}
