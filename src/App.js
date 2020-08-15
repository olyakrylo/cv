import React from "react";
import "./App.css";
import About from "./components/About";

function App() {
  return (
    <div className="container">
      <div className="top-background"></div>
      <div className="content">
        <div className="header">
          <span className="header__name">Krylova Olga</span>
          <span className="header__position">Front-End Developer</span>
        </div>
        <About />
      </div>
    </div>
  );
}

export default App;
