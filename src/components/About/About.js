import React from "react";
import "./About.css";
import { Tooltip } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { about, contactIcons } from "../../info";

export default function About() {
  const { t } = useTranslation();

  function getDetails() {
    return Object.entries(about).reduce((prev, [field, value]) => {
      return [
        ...prev,
        <div className="info__details_bold" key={field}>
          {t(`about.${field}`)}
        </div>,
        <div key={value}>{t(value)}</div>,
      ];
    }, []);
  }

  function getContacts() {
    return contactIcons.map((item, i) => (
      <Tooltip title={item.href} key={i}>
        <a href={item.href} className="info__link">
          <img
            src={`${process.env.PUBLIC_URL}/icons/${item.icon}.svg`}
            alt=""
          />
        </a>
      </Tooltip>
    ));
  }

  return (
    <div className="about">
      <img
        src={`${process.env.PUBLIC_URL}/img/me.png`}
        className="about__img"
        alt=""
      />
      <div className="about__info info">
        <div className="info__hello">{t("about.hello")}!</div>
        <div className="info__name">
          {t("about.name")}
          &nbsp;
          <span className="info__name_bold">{t("name")}</span>
        </div>
        <div className="info__position">{t("position")}</div>
        <div className="info__details">{getDetails()}</div>
        <div className="info__divider"></div>
        <div className="info__links">{getContacts()}</div>
      </div>
    </div>
  );
}
