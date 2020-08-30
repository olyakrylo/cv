import React, { useState } from "react";
import "./Item.css";

export default function SkillsItem({ info }) {
  const [showTitle, toggleTitle] = useState(false);

  function turnOver(event) {
    const item = event.currentTarget;
    item.classList.add("skills__item_hidden");
    setTimeout(() => {
      toggleTitle(!showTitle);
      item.classList.remove("skills__item_hidden");
    }, 300);
  }

  return (
    <div className="skills__item" onClick={turnOver}>
      {!showTitle && (
        <img
          className="skills__img"
          src={`${process.env.PUBLIC_URL}/icons/${info.icon}`}
          alt=""
        />
      )}
      {showTitle && info.text}
    </div>
  );
}
