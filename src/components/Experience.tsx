import { useEffect, useRef, useState } from "react";
import SectionLabel from "./shared/SectionLabel";
import { useTranslation } from "react-i18next";

interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    type: string;
    location: string;
    period: string;
    status: string;
    tags: string[];
    summary: string;
    highlights: string[];
    active: boolean;
}

interface ExperienceData {
    sectionLabel: string;
}

export const Experience = ({ isLight: _isLight }: { isLight: boolean }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

    // Load experience array from i18n — first item is sectionLabel, rest are entries
    const experienceRaw = t("experience", { returnObjects: true }) as unknown as (ExperienceData | ExperienceItem)[];
    const sectionLabel = (experienceRaw[0] as ExperienceData).sectionLabel;
    const experiences = experienceRaw.slice(1) as ExperienceItem[];

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
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="work"
            className="relative overflow-hidden pb-14 pt-16 w-full"
            style={{
                borderBottom: "0.5px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.2s ease-in-out",
                transitionDelay: "0.2s"
            }}>

            <SectionLabel>{sectionLabel}</SectionLabel>

            <div className="w-full px-10 py-10">
                {experiences.map((item, index) => {
                    const isLast = index === experiences.length - 1;

                    return (
                        <div className="flex gap-5"
                            key={item.id ?? item.company}
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(16px)",
                                transition: "all 0.35s ease-out",
                                transitionDelay: `${0.2 + index * 0.08}s`,
                            }}>

                            {/* Timeline rail */}
                            <div className="flex flex-col items-center shrink-0 pt-1" style={{ width: "12px" }}>
                                {/* Dot */}
                                <span
                                    className="rounded-full shrink-0"
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        background: item.active ? "var(--accent)" : "var(--border)",
                                        boxShadow: item.active ? "0 0 8px var(--accent)" : "none",
                                    }}
                                />
                                {/* Connector line */}
                                {!isLast && (
                                    <span
                                        className="flex-1"
                                        style={{
                                            width: "1px",
                                            background: "var(--border)",
                                            marginTop: "4px",
                                            marginBottom: "-4px",
                                        }}
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div style={{ paddingBottom: isLast ? "0" : "28px" }} className="flex-1 min-w-0">
                                {/* Role · Type */}
                                <p className="text-[16px] font-semibold leading-snug" style={{ color: "var(--text-h)" }}>
                                    {item.role}
                                    {item.type && (
                                        <span style={{ color: "var(--text)", fontWeight: 400 }}>
                                            {" · "}{item.type}
                                        </span>
                                    )}
                                </p>

                                {/* Company · Location */}
                                <p className="text-[14px] mt-1" style={{ color: "var(--accent)" }}>
                                    {item.company}
                                    {item.location && (
                                        <span style={{ opacity: 0.7 }}>
                                            {" · "}{item.location}
                                        </span>
                                    )}
                                </p>

                                {/* Period */}
                                <p className="text-[13px] mt-0.5" style={{ color: "var(--text)", opacity: 0.6 }}>
                                    {item.period}
                                </p>

                                {/* Summary */}
                                {item.summary && (
                                    <p className="text-[14px] mt-3 leading-relaxed" style={{ color: "var(--text)", opacity: 0.8 }}>
                                        {item.summary}
                                    </p>
                                )}

                                {/* Highlights */}
                                {item.highlights?.length > 0 && (
                                    <ul className="mt-2 flex flex-col gap-1.5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {item.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} className="flex gap-2 text-[13px] leading-relaxed" style={{ color: "var(--text)", opacity: 0.65 }}>
                                                <span className="shrink-0 mt-1.5" style={{
                                                    width: "4px",
                                                    height: "4px",
                                                    borderRadius: "50%",
                                                    background: "var(--accent)",
                                                    opacity: 0.5,
                                                }} />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {item.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[11px] rounded-md px-2 py-0.5"
                                                style={{
                                                    background: "transparent",
                                                    border: "1px solid var(--border)",
                                                    color: "var(--text)",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};