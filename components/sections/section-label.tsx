export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand">
      {children}
    </div>
  );
}
