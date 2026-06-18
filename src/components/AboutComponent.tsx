import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionLabel from "./shared/SectionLabel";

const TECH_BADGES = [
    "Laravel", "React", "Vue", "Angular", "Nuxt", "Next.js", "NestJS", "Node.js", "Express.js", "TypeScript", "Tailwind CSS", "Bootstrap", "REST API", "JWT", "MySQL", "PostgreSQL"
]

// Warna brand masing-masing teknologi
const TECH_COLORS: Record<string, string> = {
    "Laravel": "#ff2d20",
    "React": "#61dafb",
    "Vue": "#42b883",
    "Angular": "#dd0031",
    "Nuxt": "#00dc82",
    "Next.js": "#ffffff",
    "NestJS": "#e0234e",
    "Node.js": "#68a063",
    "Express.js": "#ffffff",
    "TypeScript": "#3178c6",
    "Tailwind CSS": "#38bdf8",
    "Bootstrap": "#7952b3",
    "REST API": "#6d6d6d",
    "JWT": "#d63aff",
    "MySQL": "#00758f",
    "PostgreSQL": "#336791",
}

function TechBadge({ badge }: { badge: string }) {
    const [hovered, setHovered] = useState(false);
    const color = TECH_COLORS[badge] ?? "var(--accent)";

    return (
        <span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="text-[11px] rounded px-2 py-1 cursor-default select-none"
            style={{
                background: hovered ? `${color}18` : "var(--code-bg)",
                border: `0.5px solid ${hovered ? `${color}55` : "var(--border)"}`,
                color: hovered ? color : "var(--text)",
                transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
            }}
        >
            {badge}
        </span>
    )
}

export const AboutComponent = ({ isLight }: { isLight: boolean }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef}
            className="px-7 py-9 md:py-12 w-full"
            style={{
                borderBottom: "0.5px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.2s ease-in-out",
                transitionDelay: "0.1s",
            }}
        >
            <SectionLabel>{t('about.sectionLabel')}</SectionLabel>

            <div className="px-10 py-10 grid md:grid-cols-2 gap-6 md:gap-8">
                {/* left side — bio & badges */}
                <div>
                    <h2 className="mb-3 text-[22px] font-semibold md:text-[26px] tracking-tight"
                        style={{ color: "var(--text-h)" }}>
                        {t('about.heading')}{" "}
                        <span style={{ color: "var(--accent)" }}>{t('about.headingAccent')}</span>
                        {t('about.headingSuffix') ? ` ${t('about.headingSuffix')}` : ""}
                    </h2>

                    <p className="text-[16px] leading-relaxed" style={{ color: "var(--text)" }}>
                        {t('about.bio')}
                    </p>

                    {/* tech badges */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {TECH_BADGES.map((badge, index) => (
                            <TechBadge key={index} badge={badge} />
                        ))}
                    </div>
                </div>

                {/* right side — latest focus card */}
                <div className="rounded-xl p-4 md:p-5 transition-transform duration-300 hover:-translate-y-0.5"
                    style={{
                        background: isLight ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.03)",
                        border: isLight ? "0.5px solid rgba(255,255,255,0.06)" : "0.5px solid rgba(0,0,0,0.06)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}>
                    <p className="text-[10px] uppercase tracking-[0.06em] mb-2.5" style={{ color: "var(--text)" }}>
                        {t('about.latestFocus')}
                    </p>

                    <span
                        className="inline-flex items-center gap-1.5 text-[10px] rounded px-2 py-1 mb-2.5"
                        style={{
                            background: "var(--accent-bg)",
                            border: "0.5px solid var(--accent-border)",
                            color: "var(--accent)",
                        }}
                    >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <rect x="9" y="9" width="6" height="6" />
                            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                        </svg>
                        {t('about.focusBadge')}
                    </span>

                    <p className="text-[12px] leading-relaxed" style={{ color: "var(--text)" }}>
                        {t('about.focusDescription')}
                    </p>
                </div>
            </div>
        </section>
    )
}