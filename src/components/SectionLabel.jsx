export default function SectionLabel({ children, light = false }) {
  return (
    <p className={`mb-8 font-mono text-[11px] font-medium uppercase tracking-[0.16em] ${light ? 'text-slate-400' : 'text-muted'}`}>
      {children}
    </p>
  )
}
