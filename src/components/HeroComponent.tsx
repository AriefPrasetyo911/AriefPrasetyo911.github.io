import { ReactTyped } from "react-typed";
// import bgImage from "../assets/img/hero-bg-3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"


function AvailableBadge() {
    return (
        <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1"
            style={{
                background: "rgba(74,222,128,0.08)",
                border: "0.5px solid rgba(74,222,128,0.28)"
            }}>
            <span className="relative flex h-[5px] w-[5px]">
                <span className="absolute inline-flex h-full w-full rounded-full animate-[ping_2s_ease-in-out_infinite]"
                    style={{ background: "#4ade80", opacity: 0.6 }}></span>
                <span className="relative inline-flex h-[5px] w-[5px] rounded-full" style={{ background: "#4ade80" }} />
            </span>
            <span className="text-[10px] font-medium" style={{ color: "#4ade80" }}>Available for hire</span>
        </span>
    )
}

function ProfileCard({ isLight }: { isLight: boolean }) {
    return (
        <div className="hidden lg:flex absolute right-7 top-10 w-44 flex-col items-center gap-3.5 rounded-2xl px-4 py-5 transition-transform duration-300 hover:-translate-y-1.5"
            style={{ background: isLight ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.60)", border: isLight ? "0.5px solid rgba(255,255,255,0.07)" : "0.5px solid rgba(0,0,0,0.07)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", boxShadow: isLight ? "0 4px 32px rgba(0,0,0,0.35)" : "0 4px 24px rgba(0,0,0,0.08)" }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold select-none" style={{ background: "rgba(170,59,255,0.12)", border: "1.5px solid rgba(170,59,255,0.35)", color: "var(--accent)" }}>AB</div>
            <div className="text-center">
                <p className="text-[13px] font-medium" style={{ color: "var(--text-h)" }}>Arief Budi P.</p>
                <p className="text-[10px] mt-0.5" style={{ color: "var(--text)" }}>Fullstack · AI Dev</p>
            </div>
            <AvailableBadge />
        </div>
    )
}

const STATS = [
    { value: "8+", label: "Years experience" },
    { value: "20+", label: "Projects delivered" },
    { value: "3", label: "SaaS products" },
];

const TECH_STACK = ["Laravel", "Vue", "NestJS", "TypeScript"];

export default function HeroComponent({ isLight }: { isLight: boolean }) {
    return (
        // buat 2 kolom kanan dan kiri. Kanan untuk hero dan kiri untuk card
        // <section className="container mx-auto px-6 grid grid-cols-2 gap-4 bg-gray-900 text-white">
        //     <div className="col-span-1 flex flex-col justify-center">
        //         <div>
        //             <h2>Arief Budi Prasetyo</h2>
        //             <p>
        //                 I'm{" "}
        //                 <ReactTyped
        //                     strings={[
        //                         "Fullstack Developer",
        //                         "Frontend Developer",
        //                         "Backend Developer",
        //                         "Freelancer",
        //                     ]}
        //                     typeSpeed={60}
        //                     backSpeed={40}
        //                     loop
        //                     className="typed text-black font-medium italic"
        //                 />
        //             </p>
        //             <div className="social-links">
        //                 <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        //                 <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        //                 <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        //                 <a href="https://www.linkedin.com/in/arief-budi-prasetyo-306465122/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="col-span-1">
        //         <div className="card">
        //             <div className="card-body">
        //                 <h2 className="card-title">Card Title</h2>
        //                 <p>Card Content</p>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className="relative overflow-hidden px-7 pb-14 pt-16"
            style={{ borderBottom: "0.5px solid var(--border)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>

            {/* Ambient glow */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full"
                style={{ background: isLight ? "radial-gradient(circle, rgba(170,59,255,0.08) 0%, transparent 70%)" : "radial-gradient(circle, rgba(170,59,255,0.05) 0%, transparent 70%)", filter: "blur(40px)" }} />

            <ProfileCard isLight={isLight} />

            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "var(--accent-bg)", border: "0.5px solid var(--accent-border)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                <span className="text-[11px] font-medium tracking-wide" style={{ color: "var(--accent)" }}>Fullstack Developer · AI Integrations</span>
            </div>

            {/* Headline */}
            {/* <h1 className="mb-3 leading-tight tracking-tight" style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 600, color: "var(--text-h)" }}>
                Building products<br />
                that <span style={{ color: "var(--accent)" }}>{typedText}</span>
                <span aria-hidden="true" className="ml-0.5 inline-block w-[2px] translate-y-0.5 align-middle animate-[blink_1s_step-end_infinite]" style={{ height: "0.85em", background: "var(--accent)" }} />
            </h1> */}

            {/* Sub */}
            <p className="mb-7 max-w-[440px] text-[13px] leading-relaxed" style={{ color: "var(--text)" }}>
                8+ years crafting scalable web apps. Specializing in{" "}
                {TECH_STACK.map((t, i) => (
                    <span key={t}>
                        <em className="not-italic" style={{ color: "#4ade80" }}>{t}</em>
                        {i < TECH_STACK.length - 1 && <span style={{ color: "var(--border)" }}> · </span>}
                    </span>
                ))}{" "}with hands-on AI integration for production SaaS.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2.5 mb-8">
                <a href="#work" className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-85 no-underline" style={{ background: "var(--accent)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
                    View my work
                </a>
                <a href="/cv.pdf" download className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-[12px] font-medium transition-colors no-underline" style={{ border: `0.5px solid ${isLight ? "rgba(255,255,255,0.12)" : "var(--border)"}`, color: "var(--text)", background: "transparent" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    Download CV
                </a>
            </div>

            {/* Stats */}
            <div className="flex gap-7">
                {STATS.map((s) => (
                    <div key={s.label}>
                        <p className="text-xl font-semibold tracking-tight" style={{ color: "var(--text-h)" }}>{s.value}</p>
                        <p className="mt-0.5 text-[11px]" style={{ color: "var(--text)" }}>{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}