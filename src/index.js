import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";
import { IntlProvider } from "react-intl";

const messages = {
  ru: ruTranslation,
  en: enTranslation,
};

const localStorageLocale = localStorage.getItem("locale");
const language =
  localStorageLocale === "ru" || localStorageLocale === "en"
    ? localStorageLocale
    : navigator.language.split(/[-_]/)[0];

function changeLanguage(locale) {
  if (language !== locale) {
    localStorage.setItem("locale", locale);
    window.location.reload();
  }
}

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <App changeLanguage={changeLanguage} currLanguage={language} />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

serviceWorker.unregister();
