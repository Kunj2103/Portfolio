import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation, // Loading en.json translation data
    },
  },
  debug: true,
  fallbackLng: "en",
});
export default i18n;
