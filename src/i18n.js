import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import th from "./locales/th.json";

i18n
  .use(initReactI18next) // Initialize React integration
  .use(LanguageDetector) // Detect user language
  .init({
    resources: {
      en: { translation: en },
      th: { translation: th },
    },
    fallbackLng: "en", // Default language
    interpolation: { escapeValue: false },
  });

export default i18n;
