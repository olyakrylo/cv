import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Item.css";
import AppDialog from "../../Dialog";

export default function Item({ intlName: intl, link, linkTitle, techs, type }) {
  const item = React.createRef();
  const [dialogOpened, setDialogOpened] = useState(false);

  function openDialog() {
    setDialogOpened(true);
  }

  function closeDialog() {
    setDialogOpened(false);
  }

  const { t } = useTranslation();
  return (
    <div className={`item item_${type}`} ref={item}>
      <div className="item__info">
        <div className="item__title">{t(`${intl}.title`)}</div>
        <div className="item__subtitle">{t(`${intl}.subtitle`)}</div>
        {link && (
          <a className="item__link" href={link} target="_blank" rel="noopener noreferrer">
            {t("open_with")}
            &nbsp;{linkTitle}
          </a>
        )}
        <div className="item__bottom">
          <button className="item__more" onClick={openDialog}>
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

      <AppDialog
        opened={dialogOpened}
        title={t("project_description")}
        content={t(`${intl}.description`)}
        onClose={closeDialog}
      />
    </div>
  );
}
