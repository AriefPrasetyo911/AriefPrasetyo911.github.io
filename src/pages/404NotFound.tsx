import { useEffect, useRef } from "react";

export function NotFoundPage() {
    const starsRef = useRef<HTMLCanvasElement>(null);
    const rainRef = useRef<HTMLCanvasElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    // ── Star field + Code rain — canvas logic inline ────────────
    useEffect(() => {
        const root = rootRef.current;
        const sc = starsRef.current;
        const rc = rainRef.current;
        if (!root || !sc || !rc) return;

        const W = root.offsetWidth || 680;
        const H = root.offsetHeight || 560;

        sc.width = W; sc.height = H;
        rc.width = W; rc.height = H;

        const sctx = sc.getContext("2d")!;
        const rctx = rc.getContext("2d")!;

        // Stars
        const STARS = Array.from({ length: 110 }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.2 + 0.2,
            o: Math.random() * 0.5 + 0.15,
            speed: Math.random() * 0.8 + 0.3,
            phase: Math.random() * Math.PI * 2,
        }));

        function drawStars(t: number) {
            sctx.clearRect(0, 0, W, H);
            STARS.forEach((s) => {
                const pulse = s.o + Math.sin(t * 0.001 * s.speed + s.phase) * 0.15;
                sctx.beginPath();
                sctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                sctx.fillStyle = `rgba(255,255,255,${Math.max(0, pulse)})`;
                sctx.fill();
            });
        }

        // Code rain
        const FONT_SIZE = 13;
        const COLS = Math.floor(W / FONT_SIZE);
        const drops = Array.from({ length: COLS }, () => Math.random() * -50);
        const CHARS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]<>/\\;:=+-*&^%$#@!";

        function drawRain() {
            rctx.fillStyle = "rgba(13,13,15,0.18)";
            rctx.fillRect(0, 0, W, H);
            rctx.font = `${FONT_SIZE}px monospace`;

            drops.forEach((y, i) => {
                const char = CHARS[Math.floor(Math.random() * CHARS.length)];
                const x = i * FONT_SIZE;

                // Head — brighter purple
                rctx.fillStyle = "rgba(192,132,252,0.9)";
                rctx.fillText(char, x, y * FONT_SIZE);

                // Trail — fading green
                for (let t = 1; t < 6; t++) {
                    const tc = CHARS[Math.floor(Math.random() * CHARS.length)];
                    const alpha = (1 - t / 6) * 0.35;
                    rctx.fillStyle = `rgba(74,222,128,${alpha})`;
                    rctx.fillText(tc, x, (y - t) * FONT_SIZE);
                }

                if (y * FONT_SIZE > H && Math.random() > 0.975) drops[i] = 0;
                else drops[i] += 0.35;
            });
        }

        // Loop
        let rafId: number;
        let tick = 0;

        function loop(t: number) {
            drawStars(t);
            tick++;
            if (tick % 2 === 0) drawRain();
            rafId = requestAnimationFrame(loop);
        }

        rafId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <div
            ref={rootRef}
            className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
            style={{ background: "#0d0d0f" }}
        >
            {/* ── Canvas layers ──────────────────────────────────── */}
            <canvas ref={starsRef} className="absolute inset-0 w-full h-full pointer-events-none" />
            <canvas ref={rainRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.045 }} />

            {/* ── Grid overlay ───────────────────────────────────── */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none z-1"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(192,132,252,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,132,252,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* ── Scanline overlay ───────────────────────────────── */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
                }}
            />

            {/* ── Content ────────────────────────────────────────── */}
            <div className="relative z-[2] flex flex-col items-center">

                {/* Glitch 404 */}
                <div className="relative mb-2 leading-none" style={{ animation: "nf-fadeUp 0.6s ease both" }}>
                    <p
                        className="nf-glitch select-none"
                        style={{
                            fontSize: "clamp(72px, 16vw, 110px)",
                            fontWeight: 500,
                            letterSpacing: "-4px",
                            color: "#f3f4f6",
                            lineHeight: 1,
                        }}
                        data-text="404"
                        aria-label="404"
                    >
                        404
                    </p>
                </div>

                {/* Bracket row */}
                <div
                    className="flex items-center gap-1 mb-6"
                    style={{ animation: "nf-fadeUp 0.6s ease 0.2s both", opacity: 0 }}
                >
                    <span style={{ fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 300, color: "#c084fc" }}>&lt;</span>
                    <span style={{ fontSize: "clamp(18px, 4vw, 26px)", fontWeight: 300, color: "#4ade80", margin: "0 3px" }}>/</span>
                    <span style={{ fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 300, color: "#c084fc" }}>&gt;</span>
                </div>

                {/* Heading */}
                <h1
                    className="text-center mb-2.5"
                    style={{
                        fontSize: "clamp(16px, 3.5vw, 22px)",
                        fontWeight: 500,
                        color: "#f3f4f6",
                        animation: "nf-fadeUp 0.5s ease 0.35s both",
                        opacity: 0,
                    }}
                >
                    Page not found
                </h1>

                {/* Description */}
                <p
                    className="text-center mb-8 max-w-sm leading-relaxed"
                    style={{
                        fontSize: "13px",
                        color: "#6b7280",
                        animation: "nf-fadeUp 0.5s ease 0.45s both",
                        opacity: 0,
                    }}
                >
                    The page you're looking for doesn't exist or has been moved.
                    <br />
                    Let's get you back to{" "}
                    <em className="not-italic" style={{ color: "#c084fc" }}>arief.dev</em>
                </p>

                {/* CTA buttons */}
                <div
                    className="flex flex-wrap gap-2.5 justify-center"
                    style={{ animation: "nf-fadeUp 0.5s ease 0.55s both", opacity: 0 }}
                >
                    <a
                        href="/"
                        className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-85"
                        style={{ background: "#c084fc", textDecoration: "none" }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Back to home
                    </a>
                    <a
                        href="/#work"
                        className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-medium transition-colors"
                        style={{ border: "0.5px solid rgba(255,255,255,0.1)", color: "#9ca3af", background: "transparent", textDecoration: "none" }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="2" y="7" width="20" height="14" rx="2" />
                            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        </svg>
                        View my work
                    </a>
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-medium transition-colors"
                        style={{ border: "0.5px solid rgba(255,255,255,0.1)", color: "#9ca3af", background: "transparent", textDecoration: "none" }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Contact me
                    </a>
                </div>

                {/* Dots */}
                <div
                    className="flex gap-1.5 mt-9"
                    style={{ animation: "nf-fadeUp 0.5s ease 0.65s both", opacity: 0 }}
                >
                    {[0, 0.2, 0.4].map((delay, i) => (
                        <span
                            key={i}
                            className="block w-[5px] h-[5px] rounded-full"
                            style={{ background: "#c084fc", animation: `nf-pulseDot 1.8s ease-in-out ${delay}s infinite` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;