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

const storageLang = localStorage.getItem("lang");
const navLang = navigator.language.split(/[-_]/)[0];

const getLangValue = lang => {
  return Object.keys(resources).includes(lang) ? lang : undefined;
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLangValue(storageLang) ?? getLangValue(navLang) ?? "en",
  keySeparator: ".",
});

export default i18n;
