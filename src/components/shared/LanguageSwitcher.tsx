import { useTranslation } from "react-i18next";
import type { Language } from "../../i18n/locales";
import { languages } from "../../i18n/locales";

const LANGUAGE_DETAILS: Record<Language, { label: string; activeBg: string }> = {
    en: {
        label: "🇬🇧 EN",
        activeBg: "bg-blue-600 text-white hover:bg-blue-700"
    },
    id: {
        label: "🇮🇩 ID",
        activeBg: "bg-red-600 text-white hover:bg-red-700"
    }
};

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as Language;

    return (
        <div
            className="inline-flex rounded-full border border-(--border) p-0.5 bg-black/5 dark:bg-white/5 backdrop-blur-sm"
            role="group"
            aria-label="Select language"
        >
            {(Object.keys(languages) as Language[]).map((code) => {
                const isActive = currentLang === code;
                const details = LANGUAGE_DETAILS[code];

                return (
                    <button
                        key={code}
                        onClick={() => i18n.changeLanguage(code)}
                        className={`
                            px-3 py-1 text-[11px] font-bold rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1
                            ${isActive
                                ? details.activeBg + ' shadow-sm'
                                : 'text-(--text2) hover:text-(--text) hover:bg-black/5 dark:hover:bg-white/10'
                            }
                        `}
                    >
                        {details.label}
                    </button>
                );
            })}
        </div>
    )
}