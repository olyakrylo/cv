import React from "react";
import "./About.css";
import { Tooltip } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

export default function About() {
  const infoDetails = {
    age: "21",
    location: "Saint-Petersburg",
    email: "olyakrylo24@gmail.com",
    phone: "+79222162625",
    website: "olyakrylo.github.io/cv",
  };

  const icons = [
    {
      icon: "vk",
      href: "https://vk.com/olyakrylo",
    },
    {
      icon: "tg",
      href: "https://t.me/olyakrylo",
    },
    {
      icon: "github",
      href: "https://github.com/olyakrylo",
    },
    {
      icon: "inst",
      href: "https://www.instagram.com/olyakrylo",
    },
  ];

  function getDetails() {
    return Object.entries(infoDetails).reduce((prev, [field, value]) => {
      return [
        ...prev,
        <div className="info__details_bold" key={field}>
          <FormattedMessage id={`about.${field}`} />
        </div>,
        <div key={value}>
          {field === "location" ? <FormattedMessage id="about.city" /> : value}
        </div>,
      ];
    }, []);
  }

  function getContacts() {
    return icons.map((item, i) => (
      <Tooltip title={item.href}>
        <a href={item.href} className="info__link" key={i}>
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
        <div className="info__hello">
          <FormattedMessage id="about.hello" />!
        </div>
        <div className="info__name">
          <FormattedMessage id="about.name"></FormattedMessage>
          &nbsp;
          <span className="info__name_bold">
            <FormattedMessage id="name" />
          </span>
        </div>
        <div className="info__position">
          <FormattedMessage id="position" />
        </div>
        <div className="info__details">{getDetails()}</div>
        <div className="info__divider"></div>
        <div className="info__links">{getContacts()}</div>
      </div>
    </div>
  );
}
