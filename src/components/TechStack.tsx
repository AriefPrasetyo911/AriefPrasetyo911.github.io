import { useEffect, useState, useRef } from "react"
import SectionLabel from "./shared/SectionLabel";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface Skill {
    name: string;
    type: string;
    accent: boolean;
    icon: React.ReactNode;
}

const SKILLS: Skill[] = [
    {
        name: "Angular", type: "Frontend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2l9 3.5-1.4 12L12 22l-7.6-4.5L3 5.5z" />
                <path d="M12 6l5 12M12 6l-5 12M9 14h6" />
            </svg>
        ),
    },
    {
        name: "Vue / Nuxt", type: "Frontend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 4l10 16L22 4h-4l-6 10L6 4H2z" />
            </svg>
        ),
    },
    {
        name: "React / NextJs", type: "Frontend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2l9 3.5-1.4 12L12 22l-7.6-4.5L3 5.5z" />
                <path d="M12 6l5 12M12 6l-5 12M9 14h6" />
            </svg>
        ),
    },
    {
        name: "Laravel", type: "Backend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
    },
    {
        name: "Node.js", type: "Backend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v8M8 8v8" />
            </svg>
        ),
    },
    {
        name: "NestJS", type: "Backend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
    },
    {
        name: "Express.js", type: "Backend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 2h14v20H5z" />
                <path d="M9 9h6M9 15h6" />
            </svg>
        ),
    },
    {
        name: "Bootstrap", type: "Frontend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 2h14v20H5z" />
                <path d="M9 9h6M9 15h6" />
            </svg>
        ),
    },
    {
        name: "TailwindCSS", type: "Frontend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
    },
    {
        name: "Sass / Scss", type: "Frontend", accent: true,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
    },
    {
        name: "MySQL / PostgreSQL", type: "Database", accent: false,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
        ),
    },
    {
        name: "AI / LLM", type: "Integration", accent: false,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
            </svg>
        ),
    },
    {
        name: "TypeScript", type: "Language", accent: false,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6M12 9v6" />
            </svg>
        ),
    },
    {
        name: "Bun.js", type: "Tooling", accent: false,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 2h14v20H5z" />
                <path d="M9 9h6M9 15h6" />
            </svg>
        ),
    },
    {
        name: "Go", type: "Learning", accent: false,
        icon: (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="8" cy="12" r="4" />
                <circle cx="16" cy="12" r="4" />
                <path d="M8 8v8M16 8v8" />
            </svg>
        ),
    },
];

const getSkillStyle = (type: string, isDark: boolean) => {
    switch (type) {
        case "Frontend":
            return {
                background: "bg-cyan-200/50",
                border: "0.5px solid var(--accent-border)",
                color: "var(--accent)",
            }
        case "Backend":
            return {
                background: "var(--accent-bg)",
                border: "0.5px solid var(--accent-border)",
                color: "var(--accent)",
            }
        case "Database":
            return {
                background: "var(--accent-bg)",
                border: "0.5px solid var(--accent-border)",
                color: "var(--accent)",
            }
        case "Integration":
            return {
                background: "var(--accent-bg)",
                border: "0.5px solid var(--accent-border)",
                color: "var(--accent)",
            }
        case "Language":
            return {
                background: "var(--accent-bg)",
                border: "0.5px solid var(--accent-border)",
                color: "var(--accent)",
            }
        case "Tooling":
            return {
                background: "var(--accent-bg)",
                border: "0.5px solid var(--accent-border)",
                color: "var(--accent)",
            }
        case "Learning":
            return {
                background: "var(--accent-bg)",
                border: "0.5px solid var(--accent-border)",
                color: "var(--accent)",
            }
    }
}

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

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="rounded-xl p-3 cursor-default"
            style={{
                background: hover
                    ? (isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)")
                    : (isDark ? "rgba(255,255,255,0.02)" : "var(--code-bg)"),
                border: `0.5px solid ${hover ? "var(--accent-border)" : "var(--border)"}`,
                transform: visible
                    ? (hover ? "translateY(-2px)" : "translateY(0)")
                    : "translateY(16px)",
                opacity: visible ? 1 : 0,
                transition: `opacity 0.4s ease ${index * 0.05}s, transform 0.25s ease, border-color 0.25s ease, background 0.25s ease`,
            }}
        >
            <div className="mb-1.5 flex justify-center" style={{ color: skill.accent ? "var(--accent)" : "var(--text)" }}>
                {skill.icon}
            </div>
            <p className="text-[18px] font-semibold flex justify-center" style={{ color: "var(--text-h)" }}>
                {skill.name}
            </p>
            <p className={clsx("text-[14px] mt-3.5 flex justify-center px-2 py-1 rounded-md", getSkillStyle(skill.type, isDark))} style={{ color: "var(--text)" }}>
                {skill.type}
            </p>
        </div>
    );
}

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
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 px-4 py-6 gap-3.5">
                {SKILLS.map((skill, index) => {
                    return <SkillChip skill={skill}
                        isDark={_isLight}
                        index={index}
                        visible={visible}
                        key={index} />
                })}
            </div>
        </section>
    )
}