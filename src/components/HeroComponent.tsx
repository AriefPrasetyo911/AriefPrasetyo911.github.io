import { ReactTyped } from "react-typed";

import { useRef, useState, useEffect } from "react";

const STATS = [
    { value: "8+", label: "Years experience" },
    { value: "10+", label: "Projects delivered" },
];
const TECH_STACK = ["Laravel", "Vue", "NestJS", "TypeScript"];

function AvailableBadge() {
    return (
        <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1"
            style={{
                background: "rgba(124,108,240,0.12)",
                border: "0.5px solid rgba(124,108,240,0.35)"
            }}>
            <span className="relative flex h-[5px] w-[5px]">
                <span className="absolute inline-flex h-full w-full rounded-full animate-[ping_2s_ease-in-out_infinite]"
                    style={{ background: "#7c6cf0", opacity: 0.6 }}></span>
                <span className="relative inline-flex h-[5px] w-[5px] rounded-full" style={{ background: "#7c6cf0" }} />
            </span>
            <span className="text-[16px] font-medium" style={{ color: "#7c6cf0" }}>Available for hire</span>
        </span>
    )
}

function ProfileCard({ isLight }: { isLight: boolean }) {
    return (
        <div className="lg:flex flex justify-center w-2/3 flex-col items-center gap-3.5 rounded-2xl px-4 py-5 transition-transform duration-300 hover:-translate-y-1.5"
            style={{ background: isLight ? "rgba(255,255,255,0.55)" : "rgba(19,19,26,0.6)", border: isLight ? "0.5px solid rgba(0,0,0,0.08)" : "0.5px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", boxShadow: isLight ? "0 4px 24px rgba(0,0,0,0.08)" : "0 4px 32px rgba(0,0,0,0.35)" }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full text-lg font-semibold select-none" style={{ background: "rgba(124,108,240,0.12)", border: "1.5px solid rgba(124,108,240,0.35)", color: "#7c6cf0" }}>ABP</div>
            <div className="text-center">
                <p className="text-[22px] font-medium" style={{ color: "var(--text)" }}>Arief Budi Prasetyo</p>
                <p className="text-[16px] mt-0.5" style={{ color: "var(--text2)" }}>Fullstack Developer · AI Integration</p>
            </div>
            <AvailableBadge />
        </div>
    )
}

export default function HeroComponent({ isLight }: { isLight: boolean }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

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
        <section ref={sectionRef}
            className="relative overflow-hidden pb-14 pt-16 w-full grid grid-cols-12 gap-4"
            style={{
                borderBottom: "0.5px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.5s ease-in-out",
                transitionDelay: "0.2s",
            }}>

            <div className="col-span-8 px-10 py-10">
                {/* Eyebrow */}
                <div
                    className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                    style={{ background: "rgba(124,108,240,0.10)", border: "0.5px solid rgba(124,108,240,0.30)" }}
                >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#7c6cf0" }} />
                    <span className="text-[16px] font-medium tracking-wide" style={{ color: "#7c6cf0" }}>
                        Fullstack Developer · AI Integrations
                    </span>
                </div>

                <h1
                    className="mb-3 leading-tight tracking-tight"
                    style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 600, color: "var(--text)" }}
                >
                    Hello, I'm Arief. I'm a &nbsp;
                    <ReactTyped
                        strings={[
                            "Fullstack Developer",
                            "Frontend Developer",
                            "Backend Developer",
                            "Freelancer",
                        ]}
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
                <p className="mb-7 max-w-[840px] text-[16px] leading-relaxed" style={{ color: "var(--text2)" }}>
                    8+ years crafting scalable web apps. Specializing in{" "}
                    {TECH_STACK.map((t, i) => (
                        <span key={t}>
                            <em className="not-italic" style={{ color: "#7c6cf0" }}>{t}</em>
                            {i < TECH_STACK.length - 1 && <span style={{ color: "var(--border)" }}> · </span>}
                        </span>
                    ))}{" "}
                    with hands-on AI integration for production SaaS.
                </p>
            </div>
            <div className="col-span-4 px-10 py-10 flex justify-center items-center">
                <ProfileCard isLight={isLight} />
            </div>
        </section>
    );
}