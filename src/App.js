import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import LocalesMenu from "./components/LocalesMenu";
import About from "./components/About";
import Organization from "./components/Organization";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <LocalesMenu />
        </div>

        <About />

        <div className="content__title">{t("education")}</div>
        <Organization
          title="uni.status"
          subtitle="uni.faculty"
          year="2017 - 2021"
          logo="spbu.png"
        />

        <div className="content__title">{t("projects")}</div>
        <Projects />

        <div className="content__title">{t("experience")}</div>
        <Organization
          title="BIOCAD.name"
          subtitle="BIOCAD.position"
          year="2020 - ..."
          logo="biocad.png"
        />

        <div className="content__title">
          {t("interests")}&nbsp;&amp;&nbsp;{t("skills")}
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default App;
