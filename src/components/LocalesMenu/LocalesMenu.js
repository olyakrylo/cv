import React, { useState } from "react";
import "./LocalesMenu.css";
import { Button, Menu, MenuItem } from "@material-ui/core";

export default function LocalesMenu({ changeLanguage, language }) {
  const icons = {
    en: {
      text: "English",
      icon: "uk",
    },
    ru: {
      text: "Русский",
      icon: "russia",
    },
  };

  let [langMenu, setLangMenu] = useState(null);

  const openMenu = event => {
    setLangMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setLangMenu(null);
  };

  return (
    <div>
      <Button
        aria-owns="simple-menu"
        aria-haspopup="true"
        onClick={openMenu}
        className="header__lang-button"
      >
        <img
          className="language__img"
          src={`${process.env.PUBLIC_URL}/icons/${icons[language].icon}.svg`}
          alt=""
        />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={langMenu}
        keepMounted
        open={Boolean(langMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={() => changeLanguage("ru")}>
          <img
            className="language__img"
            src={`${process.env.PUBLIC_URL}/icons/${icons.ru.icon}.svg`}
            alt=""
          />
          <span className="language__title">{icons.ru.text}</span>
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>
          <img
            className="language__img"
            src={`${process.env.PUBLIC_URL}/icons/${icons.en.icon}.svg`}
            alt=""
          />
          <span className="language__title">{icons.en.text}</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
