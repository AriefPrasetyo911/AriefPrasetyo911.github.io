export function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 mb-5 text-[16px] font-bold uppercase tracking-[0.08em] px-4 md:px-10"
            style={{ color: "var(--text" }}>
            {children}
            <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>
    )
}

export default SectionLabel;