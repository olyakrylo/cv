import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import LocalesMenu from "./components/LocalesMenu";
import About from "./components/About";
import Organization from "./components/Organization";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { biocadInfoList, gpnInfoList } from "./info";

function App() {
  const theme = createTheme({
    palette: { primary: { main: "#1a8f88" } },
    typography: {
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightMedium: 400,
      fontWeightRegular: 400,
      fontWeightBold: 500,
    },
  });

  const { t, i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="content">
          <div className="header">
            <LocalesMenu />
          </div>

          <About />

          <div className="content__title">{t("experience")}</div>
          <div className={"content__experience"}>
            <Organization
              title={"gpn.name"}
              subtitle={"gpn.position"}
              year={"gpn.year"}
              logo={"gpn.png"}
              infoList={gpnInfoList[i18n.language]}
            />
            <Organization
              title="BIOCAD.name"
              subtitle="BIOCAD.position"
              year="BIOCAD.year"
              logo="biocad.png"
              infoList={biocadInfoList[i18n.language]}
            />
          </div>

          <div className="content__title">{t("education")}</div>
          <Organization title="uni.name" subtitle="uni.status" year="2017 — 2021" logo="spbu.png" />

          <div className={"content__title"}>{t("courses")}</div>
          <Organization
            title={"shri.name"}
            subtitle={"shri.company"}
            year={"shri.year"}
            logo={"yandex.png"}
          />

          <div className="content__title">{t("projects")}</div>
          <Projects />

          <div className="content__title">{t("skills.title")}</div>
          <Skills />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
