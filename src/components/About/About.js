import React from "react";
import "./About.css";

export default function About() {
  function getContacts() {
    const items = [
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

    return items.map(item => (
      <a href={item.href} className="info__link">
        <img src={`${process.env.PUBLIC_URL}/icons/${item.icon}.svg`} alt="" />
      </a>
    ));
  }

  const infoDetails = {
    Age: "21",
    Location: "Saint-Petersburg",
    Email: "olyakrylo24@gmail.com",
    Phone: "+79222162625",
    Website: "olyakrylo.github.io/cv",
  };

  return (
    <div className="about">
      <img
        src={`${process.env.PUBLIC_URL}/img/me.png`}
        className="about__img"
        alt=""
      />
      <div className="about__info info">
        <div className="info__hello">Hello &amp; Welcome!</div>
        <div className="info__name">
          I'm <span className="info__name_bold">Krylova Olga</span>
        </div>
        <div className="info__position">Front-End Developer</div>
        <div className="info__details">
          {Object.entries(infoDetails).reduce((prev, curr) => {
            return [
              ...prev,
              <div className="info__details_bold">{curr[0]}</div>,
              <div>{curr[1]}</div>,
            ];
          }, [])}
        </div>
        <div className="info__divider"></div>
        <div className="info__links">{getContacts()}</div>
      </div>
    </div>
  );
}
