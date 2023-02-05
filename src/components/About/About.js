import React from "react";
import "./About.css";
import { Divider, Link, Tooltip } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { about, contactIcons } from "../../info";

export default function About() {
  const { t } = useTranslation();

  function getDetails() {
    return Object.entries(about).reduce((prev, [field, value]) => {
      let content = <div key={value}>{t(value)}</div>;
      if (field === "cv") {
        content = (
          <Link key={value} href={value} target="_blank">
            View on GitHub
          </Link>
        );
      }
      return [
        ...prev,
        <div className="info__details_bold" key={field}>
          {t(`about.${field}`)}
        </div>,
        content,
      ];
    }, []);
  }

  function getContacts() {
    return contactIcons.map((item, i) => (
      <Tooltip title={item.href} key={i}>
        <a
          href={item.href}
          className={`info__link info__link_${item.modificator}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/icons/${item.icon}.svg`}
            alt=""
            className="info__link-img"
          />
        </a>
      </Tooltip>
    ));
  }

  return (
    <div className="about">
      <img src={`${process.env.PUBLIC_URL}/img/me.webp`} className="about__img" alt="" />
      <div className="about__info info">
        <div className="info__name">
          <span className="info__name_bold">{t("name")}</span>
        </div>
        <div className="info__position">{t("position")}</div>
        <Divider className="info__divider" />
        <div className="info__details">{getDetails()}</div>
        <div className="info__links">{getContacts()}</div>
      </div>
    </div>
  );
}
