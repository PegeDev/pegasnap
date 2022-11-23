import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  ar: {
    default: require("./public/locales/en/default.json"),
  },
  de: {
    default: require("./public/locales/de/default.json"),
  },
  en: {
    default: require("./public/locales/en/default.json"),
  },
  es: {
    default: require("./public/locales/es/default.json"),
  },
  es: {
    default: require("./public/locales/es/default.json"),
  },
  fr: {
    default: require("./public/locales/fr/default.json"),
  },
  id: {
    default: require("./public/locales/id/default.json"),
  },
  it: {
    default: require("./public/locales/it/default.json"),
  },
  "nl-NL": {
    default: require("./public/locales/nl-NL/default.json"),
  },
  ru: {
    default: require("./public/locales/ru/default.json"),
  },
  tr: {
    default: require("./public/locales/nl-NL/default.json"),
  },
  uk: {
    default: require("./public/locales/ru/default.json"),
  },
  vi: {
    default: require("./public/locales/ru/default.json"),
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: "default",
    lng: "id",
    ns: ["default"],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
  });

export default i18n;
