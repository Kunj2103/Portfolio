import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources: {
      en: {
        translation: enTranslation, // Loading en.json translation data
      },
      es: {
        translation: esTranslation, // Loading es.json translation data
      },
    },
    debug: true,
    fallbackLng: "en",
  });
export default i18n;
