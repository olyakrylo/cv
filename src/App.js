import React from "react";
import "./App.css";
import { FormattedMessage } from "react-intl";
import LocalesMenu from "./components/LocalesMenu";
import About from "./components/About";
import Organization from "./components/Organization";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App({ changeLanguage, currLanguage }) {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <div>
            <span className="header__name">
              <FormattedMessage id="name" />
            </span>
            <span className="header__position">
              <FormattedMessage id="position" />
            </span>
          </div>
          <LocalesMenu
            language={currLanguage}
            changeLanguage={changeLanguage}
          />
        </div>
        <About />
        <div className="content__title">
          <FormattedMessage id="education" />
        </div>
        <Organization
          title="education.uni"
          subtitle="education.faculty"
          year="2017-..."
          logo="spbu.png"
        />
        <div className="content__title">
          <FormattedMessage id="projects" />
        </div>
        <Projects />
        <div className="content__title">
          <FormattedMessage id="interests" />
          &nbsp;&amp;&nbsp;
          <FormattedMessage id="skills" />
        </div>
        <Skills />
        <div className="content__title">
          <FormattedMessage id="experience" />
        </div>
        <Organization
          title="BIOCAD"
          subtitle="experience.position"
          year="2020"
          logo="biocad.png"
        />
      </div>
    </div>
  );
}

export default App;
