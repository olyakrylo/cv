import React from "react";
import "./Organization.css";
import { FormattedMessage } from "react-intl";

export default function Organization({ title, subtitle, year, logo }) {
  return (
    <div className="org">
      <div className="org__info">
        <div className="org__title">
          <FormattedMessage id={title} />
        </div>
        <div className="org__subtitle">
          <FormattedMessage id={subtitle} />
        </div>
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
