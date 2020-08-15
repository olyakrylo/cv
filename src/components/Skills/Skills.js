import React from "react";
import "./Skills.css";
import "./skillsList";
import skillsList from "./skillsList";

export default function Skills() {
  return (
    <div className="skills">
      {skillsList.map((item, i) => (
        <div className="skills__item-container" key={i}>
          <div className="skills__item">
            <img
              className="skills__img"
              src={`${process.env.PUBLIC_URL}/icons/${item.icon}`}
              alt=""
            />
            <div className="skills__title">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
