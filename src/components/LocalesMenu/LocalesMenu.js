import React, { useState } from "react";
import "./LocalesMenu.css";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { languages, langIcons } from "../../info";

export default function LocalesMenu() {
  let [langMenu, setLangMenu] = useState(null);

  const openMenu = event => {
    setLangMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setLangMenu(null);
  };

  const { i18n } = useTranslation();

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
          src={`${process.env.PUBLIC_URL}/icons/${
            langIcons[i18n.language].icon
          }.svg`}
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
        {languages.map(lang => (
          <MenuItem key={lang} onClick={() => i18n.changeLanguage(lang)}>
            <img
              className="language__img"
              src={`${process.env.PUBLIC_URL}/icons/${langIcons[lang].icon}.svg`}
              alt=""
            />
            <span className="language__title">{langIcons[lang].name}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
