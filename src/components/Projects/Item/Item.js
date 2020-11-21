import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Item.css";

export default function Item({ intlName: intl, link, linkTitle, techs, type }) {
  const item = React.createRef();

  const [showDescr, toggleDescr] = useState(false);

  function more() {
    item.current.classList.add("item_hidden");
    const height = getComputedStyle(item.current).height;
    item.current.style.height = height;
    setTimeout(() => {
      item.current.classList.remove("item_hidden");
      toggleDescr(true);
    }, 300);
  }

  function back() {
    item.current.classList.add("item_hidden");
    setTimeout(() => {
      item.current.classList.remove("item_hidden");
      item.current.style.height = "auto";
      toggleDescr(false);
    }, 300);
  }

  const { t } = useTranslation();
  return (
    <div className={`item item_${type}`} ref={item}>
      {!showDescr && (
        <div className="item__info">
          <div className="item__title">{t(`${intl}.title`)}</div>
          <div className="item__subtitle">{t(`${intl}.subtitle`)}</div>
          <a className="item__link" href={link} target="_blank" rel="noopener noreferrer">
            {t("open_with")}
            &nbsp;{linkTitle}
          </a>
          <div className="item__bottom">
            <button className="item__more" onClick={more}>
              {t("read_more")}
            </button>
            <div className="item__techs">
              {techs.map((tech, i) => (
                <div className="item__tech" key={i}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showDescr && (
        <div className="item__descr">
          {t(`${intl}.description`)}
          <button className="item__descr-back" onClick={back}>
            {t("back")}
          </button>
        </div>
      )}
    </div>
  );
}
