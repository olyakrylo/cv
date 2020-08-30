import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

const navLang = navigator.language.split(/[-_]/)[0];

i18n.use(initReactI18next).init({
  resources,
  lng: navLang === "en" || navLang === "ru" ? navLang : "en",
  keySeparator: ".",
});

export default i18n;
