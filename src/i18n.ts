import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import En from "@app/locales/en.json";
import Ko from "@app/locales/ko.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: En,
      },
      ko: {
        translations: Ko,
      },
    },
    fallbackLng: "en",
    debug: process.env.NODE_ENV !== "production",
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
  });

export default i18n;
