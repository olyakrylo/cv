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
        <Link target="_blank" href={item.gitHubLink} className="item__title">
          {t(`${item.intlName}.title`)}
        </Link>
        <div className="item__subtitle">{t(`${item.intlName}.subtitle`)}</div>
        {item.link && (
          <a className="item__link" href={item.link} target="_blank" rel="noopener noreferrer">
            {t("open_with")}
            &nbsp;{item.linkTitle}
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
