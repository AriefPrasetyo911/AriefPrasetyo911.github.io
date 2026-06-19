import { ReactTyped } from "react-typed";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function AvailableBadge() {
    const { t } = useTranslation();
    return (
        <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1"
            style={{
                background: "rgba(124,199,240,0.12)",
                border: "0.5px solid rgba(124,108,240,0.35)"
            }}>
            <span className="relative flex h-[5px] w-[5px]">
                <span className="absolute inline-flex h-full w-full rounded-full animate-[ping_2s_ease-in-out_infinite]"
                    style={{ background: "#7c6cf0", opacity: 0.6 }}></span>
                <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-emerald-600 animate-pulse-dot" />
            </span>
            <span className="text-[16px] font-medium text-emerald-600">{t('hero.availableForHire')}</span>
        </span>
    )
}

function ProfileCard() {
    const { t } = useTranslation();
    return (
        <div className="lg:flex flex justify-center w-2/3 flex-col items-center gap-3.5 rounded-2xl px-4 py-5 transition-transform duration-300 hover:-translate-y-1.5 mt-7"
            style={{
                background: "var(--glass-bg)",
                border: "0.5px solid var(--glass-border)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
            }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full text-lg font-semibold select-none" style={{ background: "rgba(124,108,240,0.15)", border: "1.5px solid rgba(124,108,240,0.35)", color: "#7c6cf0" }}>ABP</div>
            <div className="text-center">
                <p className="text-[22px] font-medium" style={{ color: "var(--text)" }}>{t('hero.profileName')}</p>
                <p className="text-[16px] mt-0.5" style={{ color: "var(--text2)" }}>{t('hero.profileRole')}</p>
            </div>
            <AvailableBadge />
        </div>
    )
}

export const HeroComponent = ({ isLight: _isLight }: { isLight: boolean }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

    // react-i18next returns string[] for arrays via t() with returnObjects
    const typedStrings = t('hero.typedStrings', { returnObjects: true }) as string[];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="home"
            className="relative overflow-hidden pb-14 pt-16 w-full grid grid-cols-12 gap-4"
            style={{
                borderBottom: "0.5px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.2s ease-in-out",
                transitionDelay: "0.1s",
            }}>

            <div className="col-span-8 px-10 py-10">
                {/* Eyebrow */}
                <div
                    className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                    style={{ background: "rgba(124,108,240,0.10)", border: "0.5px solid rgba(124,108,240,0.30)" }}
                >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#7c6cf0" }} />
                    <span className="text-[16px] font-medium tracking-wide" style={{ color: "#7c6cf0" }}>
                        {t('hero.title')}
                    </span>
                </div>

                <h1
                    className="mb-3 leading-tight tracking-tight"
                    style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 600, color: "var(--text)" }}
                >
                    {t('hero.intro')}&nbsp;
                    <ReactTyped
                        strings={typedStrings}
                        typeSpeed={60}
                        backSpeed={40}
                        loop
                        className="typed font-medium italic"
                        style={{ color: "#7c6cf0" }}
                    />
                    <span
                        aria-hidden="true"
                        className="ml-0.5 inline-block w-[2px] translate-y-0.5 align-middle animate-[blink_1s_step-end_infinite]"
                        style={{ height: "0.85em", background: "#7c6cf0" }}
                    />
                </h1>

                {/* Sub-headline */}
                <p className="mb-3 max-w-[840px] text-[16px] leading-relaxed" style={{ color: "var(--text2)" }}>
                    {t('hero.expertise')}
                </p>
                <p className="mb-3 max-w-[840px] text-[16px] leading-relaxed" style={{ color: "var(--text2)" }}>
                    {t('hero.experience')}
                </p>
                <p className="mb-3 max-w-[840px] text-[16px] leading-relaxed" style={{ color: "var(--text2)" }}>
                    {t('hero.achievement')}
                </p>

                <div className="mt-8 w-full grid grid-cols-12 gap-3">
                    <div className="col-span-2">
                        <p className="hero-exp-title text-[22px] font-semibold text-white light:text-black">
                            {t('hero.experienceData.years')}
                            <span className="block text-[13px] text-white/70 light:text-black/60">
                                {t('hero.experienceData.years_text')}
                            </span>
                        </p>
                    </div>
                    <div className="col-span-2">
                        <p className="hero-exp-title text-[22px] font-semibold text-white light:text-black">
                            {t('hero.experienceData.projects')}
                            <span className="block text-[13px] text-white/70 light:text-black/60">
                                {t('hero.experienceData.projects_text')}
                            </span>
                        </p>
                    </div>
                </div>

            </div>
            <div className="col-span-4 px-10 py-10 flex justify-center items-center">
                <ProfileCard />
            </div>
        </section>
    );
}