import React, { useState } from "react";
import "./Item.css";
import { useTranslation } from "react-i18next";

export default function SkillsItem({ info }) {
  const [showTitle, toggleTitle] = useState(false);

  const { t } = useTranslation();

  function turnOver(event) {
    const item = event.currentTarget;
    item.classList.add("skills__item_hidden");
    setTimeout(() => {
      toggleTitle(!showTitle);
      item.classList.remove("skills__item_hidden");
    }, 200);
  }

  return (
    <div className="skills__item" onClick={turnOver}>
      {!showTitle && (
        <img className="skills__img" src={`${process.env.PUBLIC_URL}/icons/${info.icon}`} alt="" />
      )}
      {showTitle && t(info.text)}
    </div>
  );
}
