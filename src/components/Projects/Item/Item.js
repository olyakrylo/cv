import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Item.css";
import AppDialog from "../../Dialog";
import { Link } from "@material-ui/core";

export default function Item({ item, type }) {
  const [dialogOpened, setDialogOpened] = useState(false);

  function openDialog() {
    setDialogOpened(true);
  }

  function closeDialog() {
    setDialogOpened(false);
  }

  const { t, i18n } = useTranslation();
  return (
    <div className={`item item_${type}`}>
      <div className="item__info">
        <div className="item__title">
          {t(`${item.intlName}.title`)}
          {item.gitHubLink && (
            <Link target="_blank" href={item.gitHubLink} className="item__gh-link">
              <img
                alt="github"
                src={`${process.env.PUBLIC_URL}/icons/github.svg`}
                className="item__gh-image"
              />
            </Link>
          )}
        </div>
        <div className="item__subtitle">{t(`${item.intlName}.subtitle`)}</div>
        {item.link && (
          <a className="item__link" href={item.link} target="_blank" rel="noopener noreferrer">
            {t(item.linkTitle ? "open_with" : "open")}
            {item.linkTitle && <>&nbsp;{item.linkTitle}</>}
          </a>
        )}
        <div className="item__bottom">
          <button className="item__more" onClick={openDialog}>
            {t("read_more")}
          </button>
          <div className="item__techs">
            {item.techs.map((tech, i) => (
              <div className="item__tech" key={i}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <AppDialog
        opened={dialogOpened}
        title={t("project_description")}
        infoList={item.infoList[i18n.language] ?? []}
        onClose={closeDialog}
      />
    </div>
  );
}
