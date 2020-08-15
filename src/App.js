import React from "react";
import "./App.css";
import About from "./components/About";
import Organization from "./components/Organization";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <span className="header__name">Krylova Olga</span>
          <span className="header__position">Front-End Developer</span>
        </div>
        <About />
        <div className="content__title">Education</div>
        <Organization
          title="4th year bachelor at Saint-Petersburg State University"
          subtitle="Faculty of Applied Maths and Control Processes"
          year="2017-..."
          logo="spbu.png"
        />
        <div className="content__title">Projects</div>
        <Projects />
        <div className="content__title">Interests &amp; Skills</div>
        <Skills />
        <div className="content__title">Experience</div>
        <Organization
          title="BIOCAD"
          subtitle="Junior Front-End developer"
          year="2020"
          logo="biocad.png"
        />
      </div>
    </div>
  );
}

export default App;
