import React from "react";
import "./Organization.css";

export default function Organization({ title, subtitle, year, logo }) {
  return (
    <div className="org">
      <div className="org__info">
        <div className="org__title">{title}</div>
        <div className="org__subtitle">{subtitle}</div>
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
