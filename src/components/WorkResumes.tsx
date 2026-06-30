import { useEffect, useRef, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SectionLabel from "./shared/SectionLabel";
import { Brain, Landmark, Briefcase, ArrowRightLeft, Gamepad2, Globe, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

interface Projects {
    id: string;
    name: string;
    category: string;
    badge: { label: string; kind: string };
    period: string;
    status: string;
    featured: boolean;
    tags: string[];
    summary: string;
    description: string;
    link: string;
}

interface ProjectTitle {
    sectionLabel: string;
}

const getProjectIcon = (id: string, label: string) => {
    const l = (label || '').toLowerCase();
    if (l.includes('game')) return Gamepad2;
    if (l.includes('internal') || l.includes('tool')) return Monitor;
    if (l.includes('migration') || l.includes('conversion')) return ArrowRightLeft;
    if (l.includes('gov')) return Landmark;
    if (l.includes('ai')) return Brain;
    if (l.includes('web')) return Globe;

    switch (id) {
        case 'sinergiedu': return Brain;
        case 'spbe': return Landmark;
        case 'jdih': return Landmark;
        case 'traffic-monitoring': return Landmark;
        case 'appraisal-system': return Monitor;
        case 'corporate-website': return ArrowRightLeft;
        case 'nareta':
        case 'playsimulacra': return Gamepad2;
        case 'world-debt': return Globe;
        default: return Briefcase;
    }
}

const getBadgeStyles = (kind: string) => {
    switch (kind) {
        case 'ai':
            return {
                color: '#a78bfa',
                borderColor: 'rgba(167, 139, 250, 0.3)',
                backgroundColor: 'rgba(167, 139, 250, 0.05)'
            };
        case 'gov':
            return {
                color: '#6ee7b7',
                borderColor: 'rgba(110, 231, 183, 0.3)',
                backgroundColor: 'rgba(110, 231, 183, 0.05)'
            };
        default:
            return {
                color: '#9ca3af',
                borderColor: 'rgba(156, 163, 175, 0.3)',
                backgroundColor: 'transparent'
            };
    }
}

const getHeaderBg = (kind: string) => {
    switch (kind) {
        case 'ai': return 'linear-gradient(to bottom, rgba(139, 92, 246, 0.05), transparent)';
        case 'gov': return 'linear-gradient(to bottom, rgba(16, 185, 129, 0.05), transparent)';
        default: return 'linear-gradient(to bottom, rgba(79, 70, 229, 0.05), transparent)';
    }
}

const getIconColor = (kind: string) => {
    switch (kind) {
        case 'ai': return '#8b5cf6';
        case 'gov': return '#10b981';
        default: return '#6366f1';
    }
}

export const WorkResumes = ({ isLight: _isLight }: { isLight: boolean }) => {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const [showAll, setShowAll] = useState(false)
    const { t } = useTranslation();

    // Load experience array from i18n — first item is sectionLabel, rest are entries
    const projectRaw = t("projects", { returnObjects: true }) as unknown as (ProjectTitle | Projects)[];

    const { sectionLabel, projects } = useMemo(() => {
        return {
            sectionLabel: (projectRaw[0] as ProjectTitle).sectionLabel,
            projects: projectRaw.slice(1) as Projects[]
        }
    }, [projectRaw]);

    const displayedProjects = showAll ? projects : projects.slice(0, 6);

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
        <section ref={sectionRef} id="resume"
            className="relative overflow-hidden pb-14 pt-16 w-full"
            style={{
                borderBottom: "0.5px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.2s ease-in-out",
                transitionDelay: "0.2s"
            }}>

            <SectionLabel>{sectionLabel}</SectionLabel>

            <div className="w-full px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {displayedProjects.map((item, index) => {
                    const Icon = getProjectIcon(item.id, item.badge?.label || '');
                    const badgeStyles = getBadgeStyles(item.badge.kind);
                    const headerBg = getHeaderBg(item.badge.kind);
                    const iconColor = getIconColor(item.badge.kind);

                    return (
                        <Link to={`/project/${item.id}`} key={item.id}
                            className="flex flex-col rounded-[16px] overflow-hidden"
                            style={{
                                border: "1px solid var(--border)",
                                background: "var(--bg)",
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(20px)",
                                transition: "all 0.4s ease-out",
                                transitionDelay: `${0.2 + index * 0.1}s`
                            }}>
                            {/* Top Banner with Icon */}
                            <div className="h-[140px] w-full flex items-center justify-center border-b"
                                style={{
                                    borderColor: "var(--border)",
                                    background: headerBg
                                }}>
                                <Icon size={40} color={iconColor} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-3 flex-1">
                                <div className="inline-flex w-fit items-center px-2 py-0.5 rounded text-[12px] font-medium"
                                    style={{
                                        color: badgeStyles.color,
                                        backgroundColor: badgeStyles.backgroundColor,
                                        border: `1px solid ${badgeStyles.borderColor}`
                                    }}>
                                    {item.badge.label}
                                </div>
                                <h3 className="text-[18px] font-bold tracking-tight" style={{ color: "var(--text-h)" }}>
                                    {item.name}
                                </h3>
                                <p className="text-[14px] leading-relaxed flex-1" style={{ color: "var(--text)", opacity: 0.7 }}>
                                    {item.summary}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {item.tags.map(tag => (
                                        <span key={tag}
                                            className="text-[11px] rounded-md px-2.5 py-1 font-medium"
                                            style={{
                                                background: "rgba(255,255,255,0.03)",
                                                border: "1px solid var(--border)",
                                                color: "var(--text)",
                                                opacity: 0.8
                                            }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            {projects.length > 6 && (
                <div className="w-full flex justify-center pb-6">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2.5 rounded-full text-[14px] font-medium transition-all hover:bg-white/5"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid var(--border)",
                            color: "var(--text)"
                        }}
                    >
                        {showAll ? "Show Less" : "View All Projects"}
                    </button>
                </div>
            )}
        </section>
    )
}