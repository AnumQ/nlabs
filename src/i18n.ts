import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/en.json";
import no from "./locales/no/no.json";
import { DEFAULT_LANGUAGE } from "./Constants";

const resources = {
  en: {
    translation: en,
  },
  no: {
    translation: no,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE, // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
