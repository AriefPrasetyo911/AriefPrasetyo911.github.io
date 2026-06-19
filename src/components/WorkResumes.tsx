import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionLabel from "./shared/SectionLabel";

export const WorkResumes = ({ isLight: _isLight }: { isLight: boolean }) => {
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
        <section ref={sectionRef} id="resume"
            className="relative overflow-hidden pb-14 pt-16 w-full"
            style={{
                borderBottom: "0.5px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.2s ease-in-out",
                transitionDelay: "0.2s"
            }}>

            <SectionLabel>{t('projects.sectionLabel')}</SectionLabel>
        </section>
    )
}   