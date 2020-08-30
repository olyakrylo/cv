import React from "react";
import "./Organization.css";
import { useTranslation } from "react-i18next";

export default function Organization({ title, subtitle, year, logo }) {
  const { t } = useTranslation();
  return (
    <div className="org">
      <div className="org__info">
        <div className="org__title">{t(title)}</div>
        <div className="org__subtitle">{t(subtitle)}</div>
        <div className="org__year">{year}</div>
      </div>
      <img
        className="org__img"
        src={`${process.env.PUBLIC_URL}/img/${logo}`}
        alt=""
      />
    </div>
  );
}
