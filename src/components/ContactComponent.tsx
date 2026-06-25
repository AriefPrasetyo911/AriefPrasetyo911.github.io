import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionLabel from "./shared/SectionLabel";
import { Mail, MapPin, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── Isi dengan data dari dashboard EmailJS ───────────────────────────────────
// 1. Daftar / login di https://www.emailjs.com
// 2. Add Email Service  → salin Service ID 
// 3. Buat Email Template → salin Template ID
// 4. Account → API Keys  → salin Public Key
// Template harus punya variabel: {{from_name}} {{reply_to}} {{subject}} {{message}}
const EMAILJS_SERVICE_ID = "service_e44ukqo";
const EMAILJS_TEMPLATE_ID = "template_xx338dp";
const EMAILJS_PUBLIC_KEY = "3wMN1Fu6lmuw7F-Q3";
// ─────────────────────────────────────────────────────────────────────────────

const LinkedinIcon = ({ size = 20, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export const ContactComponent = ({ isLight }: { isLight: boolean }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

    // Form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message || !formRef.current) return;

        setIsSubmitting(true);
        setIsError(false);

        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: EMAILJS_PUBLIC_KEY }
            )
            .then(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                setTimeout(() => setIsSubmitted(false), 6000);
            })
            .catch(() => {
                setIsSubmitting(false);
                setIsError(true);
                setTimeout(() => setIsError(false), 6000);
            });
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="px-7 py-12 md:py-16 w-full"
            style={{
                borderBottom: "0.5px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.4s ease-in-out",
            }}
        >
            <SectionLabel>{t('contactSection.sectionLabel')}</SectionLabel>

            <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 grid lg:grid-cols-12 gap-10 lg:gap-12">
                {/* Left Side: Text and Contact Cards */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                        <h2
                            className="text-[30px] md:text-[36px] font-bold tracking-tight mb-4 animate-fade-in"
                            style={{ color: "var(--text)" }}
                        >
                            {t('contactSection.title')}
                        </h2>
                        <p
                            className="text-[18px] leading-relaxed mb-8"
                            style={{ color: "var(--text2)" }}
                        >
                            {t('contactSection.subtitle')}
                        </p>

                        <div className="space-y-5">
                            {/* Email Item */}
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-lg border"
                                    style={{
                                        borderColor: "var(--border)",
                                        background: "var(--bg2)",
                                        color: "var(--accent)"
                                    }}
                                >
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-[13px] uppercase tracking-wider font-semibold opacity-60" style={{ color: "var(--text)" }}>
                                        {t('contactSection.emailLabel')}
                                    </div>
                                    <a
                                        href="mailto:arief.prasetyo911@gmail.com"
                                        className="text-[18px] font-bold hover:opacity-85 transition-opacity"
                                        style={{ color: "var(--text)" }}
                                    >
                                        arief.prasetyo911@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location Item */}
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-lg border"
                                    style={{
                                        borderColor: "var(--border)",
                                        background: "var(--bg2)",
                                        color: "var(--accent)"
                                    }}
                                >
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-[13px] uppercase tracking-wider font-semibold opacity-60" style={{ color: "var(--text)" }}>
                                        {t('contactSection.locationLabel')}
                                    </div>
                                    <div className="text-[18px] font-bold" style={{ color: "var(--text)" }}>
                                        {t('contactSection.locationValue')}
                                    </div>
                                </div>
                            </div>

                            {/* LinkedIn Item */}
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-lg border"
                                    style={{
                                        borderColor: "var(--border)",
                                        background: "var(--bg2)",
                                        color: "var(--accent)"
                                    }}
                                >
                                    <LinkedinIcon size={20} />
                                </div>
                                <div>
                                    <div className="text-[13px] uppercase tracking-wider font-semibold opacity-60" style={{ color: "var(--text)" }}>
                                        {t('contactSection.linkedinLabel')}
                                    </div>
                                    <a
                                        href="https://linkedin.com/in/arief-budi-prasetyo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[18px] font-bold hover:opacity-85 transition-opacity"
                                        style={{ color: "var(--text)" }}
                                    >
                                        arief-budi-prasetyo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Card */}
                <div className="lg:col-span-7">
                    <div
                        className="rounded-2xl p-6 md:p-8 border shadow-lg relative overflow-hidden"
                        style={{
                            borderColor: "var(--border)",
                            background: isLight ? "rgba(255, 255, 255, 0.4)" : "rgba(19, 19, 26, 0.4)",
                            backdropFilter: "blur(10px)"
                        }}
                    >
                        {isSubmitted && (
                            <div className="absolute inset-0 bg-opacity-95 rounded-2xl flex flex-col items-center justify-center text-center p-6 z-10 transition-all duration-300"
                                style={{ background: "var(--bg2)" }}>
                                <CheckCircle2 size={56} className="text-emerald-500 mb-4 animate-bounce" />
                                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
                                    {isLight ? "Thank you!" : "Pesan Terkirim!"}
                                </h3>
                                <p style={{ color: "var(--text2)" }}>
                                    {isLight ? "Your message has been sent successfully." : "Pesan Anda telah berhasil dikirim."}
                                </p>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="from_name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={t('contactSection.namePlaceholder')}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border text-[16px] outline-none transition-all focus:border-[var(--accent)]"
                                        style={{
                                            borderColor: "var(--border)",
                                            background: "var(--bg2)",
                                            color: "var(--text)"
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        type="email"
                                        name="reply_to"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t('contactSection.emailPlaceholder')}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border text-[16px] outline-none transition-all focus:border-[var(--accent)]"
                                        style={{
                                            borderColor: "var(--border)",
                                            background: "var(--bg2)",
                                            color: "var(--text)"
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder={t('contactSection.subjectPlaceholder')}
                                    className="w-full px-4 py-3 rounded-lg border text-[16px] outline-none transition-all focus:border-[var(--accent)]"
                                    style={{
                                        borderColor: "var(--border)",
                                        background: "var(--bg2)",
                                        color: "var(--text)"
                                    }}
                                />
                            </div>

                            <div className="flex flex-col">
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={t('contactSection.messagePlaceholder')}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border text-[16px] outline-none transition-all resize-none focus:border-[var(--accent)]"
                                    style={{
                                        borderColor: "var(--border)",
                                        background: "var(--bg2)",
                                        color: "var(--text)"
                                    }}
                                />
                            </div>

                            {isError && (
                                <div className="flex items-center gap-2 px-4 py-3 rounded-lg text-[15px]" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}>
                                    <AlertCircle size={18} />
                                    <span>{t('contactSection.errorMessage')}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                style={{
                                    backgroundColor: "var(--accent)"
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>{t('contactSection.sendingButton')}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{t('contactSection.sendButton')}</span>
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;
