import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en";
import id from "./id";

// bahasa yang didukung
export type Language = "en" | "id";

export const languages: Record<Language, { NativeName: string }> = {
  en: { NativeName: "English" },
  id: { NativeName: "Bahasa Indonesia" },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'], // Prioritas: simpan di localStorage dulu
      caches: ['localStorage'], // Simpan pilihan user di localStorage
    },
  });

export default i18n;
