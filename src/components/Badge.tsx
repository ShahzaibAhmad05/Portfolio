export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-slate-100 px-3 py-1 text-[13px] text-slate-900">
      {children}
    </span>
  );
}
