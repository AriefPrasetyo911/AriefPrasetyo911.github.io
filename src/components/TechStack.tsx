import { useEffect, useState, useRef } from "react"
import SectionLabel from "./shared/SectionLabel";
import { useTranslation } from "react-i18next";

// ── Reusable SVG Icons ──────────────────────────────────────────────

const Icons = {
    angular: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2l9 3.5-1.4 12L12 22l-7.6-4.5L3 5.5z" />
            <path d="M12 6l5 12M12 6l-5 12M9 14h6" />
        </svg>
    ),
    vue: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 4l10 16L22 4h-4l-6 10L6 4H2z" />
        </svg>
    ),
    layers: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    ),
    node: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v8M8 8v8" />
        </svg>
    ),
    server: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
    ),
    document: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 2h14v20H5z" />
            <path d="M9 9h6M9 15h6" />
        </svg>
    ),
    grid: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
        </svg>
    ),
    database: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
    ),
    chip: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
        </svg>
    ),
    typescript: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6M12 9v6" />
        </svg>
    ),
    go: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="8" cy="12" r="4" />
            <circle cx="16" cy="12" r="4" />
            <path d="M8 8v8M16 8v8" />
        </svg>
    ),
} as const;

// ── Skill Data ──────────────────────────────────────────────────────

interface Skill {
    name: string;
    type: string;
    accent: boolean;
    icon: React.ReactNode;
}

const SKILLS: Skill[] = [
    { name: "Angular", type: "Frontend", accent: true, icon: Icons.angular },
    { name: "Vue / Nuxt", type: "Frontend", accent: true, icon: Icons.vue },
    { name: "React / NextJs", type: "Frontend", accent: true, icon: Icons.angular },
    { name: "Laravel", type: "Backend", accent: true, icon: Icons.layers },
    { name: "Node.js", type: "Backend", accent: true, icon: Icons.node },
    { name: "NestJS", type: "Backend", accent: true, icon: Icons.server },
    { name: "Express.js", type: "Backend", accent: true, icon: Icons.document },
    { name: "Bootstrap", type: "Frontend", accent: true, icon: Icons.document },
    { name: "TailwindCSS", type: "Frontend", accent: true, icon: Icons.grid },
    { name: "Sass / Scss", type: "Frontend", accent: true, icon: Icons.grid },
    { name: "MySQL / PostgreSQL", type: "Database", accent: false, icon: Icons.database },
    { name: "AI / LLM", type: "Integration", accent: false, icon: Icons.chip },
    { name: "TypeScript", type: "Language", accent: false, icon: Icons.typescript },
    { name: "Bun.js", type: "Tooling", accent: false, icon: Icons.document },
    { name: "Go", type: "Learning", accent: false, icon: Icons.go },
];

// ── Type Badge Styles ───────────────────────────────────────────────

const TYPE_STYLES: Record<string, { bg: string; color: string; borderColor: string }> = {
    Frontend: { bg: "rgba(59, 130, 246, 0.12)", color: "#60a5fa", borderColor: "rgba(59, 130, 246, 0.25)" },  // Soft blue
    Backend: { bg: "rgba(34, 197, 94, 0.12)", color: "#4ade80", borderColor: "rgba(34, 197, 94, 0.25)" },  // Soft green
    Database: { bg: "rgba(245, 158, 11, 0.12)", color: "#fbbf24", borderColor: "rgba(245, 158, 11, 0.25)" },  // Soft amber
    Language: { bg: "rgba(168, 85, 247, 0.12)", color: "#c084fc", borderColor: "rgba(168, 85, 247, 0.25)" },  // Soft purple
    Integration: { bg: "rgba(244, 63, 94, 0.12)", color: "#fb7185", borderColor: "rgba(244, 63, 94, 0.25)" },  // Soft rose
    Tooling: { bg: "rgba(20, 184, 166, 0.12)", color: "#2dd4bf", borderColor: "rgba(20, 184, 166, 0.25)" },  // Soft teal
    Learning: { bg: "rgba(251, 146, 60, 0.12)", color: "#fb923c", borderColor: "rgba(251, 146, 60, 0.25)" },  // Soft orange
};

const DEFAULT_TYPE_STYLE = { bg: "rgba(148,163,184,0.12)", color: "#94a3b8", borderColor: "rgba(148,163,184,0.25)" };

// ── Skill Chip Component ────────────────────────────────────────────

function SkillChip({
    skill,
    isDark,
    index,
    visible,
}: {
    skill: Skill;
    isDark: boolean;
    index: number;
    visible: boolean;
}) {
    const [hover, setHover] = useState(false);
    const typeStyle = TYPE_STYLES[skill.type] ?? DEFAULT_TYPE_STYLE;

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="rounded-xl p-3 cursor-default"
            style={{
                background: hover
                    ? (isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.15)")
                    : (isDark ? "rgba(255,255,255,0.02)" : "var(--code-bg)"),
                backdropFilter: hover ? "blur(12px)" : "none",
                WebkitBackdropFilter: hover ? "blur(12px)" : "none",
                border: `0.5px solid ${hover ? "var(--accent-border)" : "var(--border)"}`,
                boxShadow: hover
                    ? (isDark
                        ? "0 8px 32px rgba(0,0,0,0.3), inset 0 0 0 0.5px rgba(255,255,255,0.06)"
                        : "0 8px 32px rgba(0,0,0,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.5)")
                    : "none",
                transform: visible
                    ? (hover ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)")
                    : "translateY(16px) scale(0.98)",
                opacity: visible ? 1 : 0,
                transition: `opacity 0.4s ease ${index * 0.05}s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s ease, background 0.25s ease, box-shadow 0.3s ease, backdrop-filter 0.25s ease`,
            }}
        >
            <div className="mb-1.5 flex justify-center" style={{ color: skill.accent ? "var(--accent)" : "var(--text)" }}>
                {skill.icon}
            </div>
            <p className="text-[16px] font-semibold flex justify-center" style={{ color: "var(--text-h)" }}>
                {skill.name}
            </p>
            <span
                className="text-[11px] font-medium mt-3 flex justify-center px-2.5 py-1 rounded-full mx-auto w-fit"
                style={{
                    background: typeStyle.bg,
                    color: typeStyle.color,
                    border: `1px solid ${typeStyle.borderColor}`,
                    letterSpacing: "0.02em",
                }}
            >
                {skill.type}
            </span>
        </div>
    );
}

// ── Main Section ────────────────────────────────────────────────────

export const TechStack = ({ isLight: _isLight }: { isLight: boolean }) => {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef}
            className="relative overflow-hidden pb-14 pt-16 w-full"
            style={{
                borderBottom: "0.5px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.2s ease-in-out",
                transitionDelay: "0.2s"
            }}>

            <SectionLabel>{t('techStack.sectionLabel')}</SectionLabel>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 px-4 md:px-10 py-10 gap-3.5">
                {SKILLS.map((skill, index) => (
                    <SkillChip
                        skill={skill}
                        isDark={_isLight}
                        index={index}
                        visible={visible}
                        key={index}
                    />
                ))}
            </div>
        </section>
    )
}