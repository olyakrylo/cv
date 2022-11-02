import React, { useState } from "react";
import "./Organization.css";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import AppDialog from "../Dialog";

export default function Organization({ title, subtitle, year, logo, infoList }) {
  const [dialogOpened, setDialogOpened] = useState(false);

  function openDialog() {
    setDialogOpened(true);
  }

  function closeDialog() {
    setDialogOpened(false);
  }

  const { t } = useTranslation();
  return (
    <div className="org">
      <div className="org__info">
        <div className="org__title">{t(title)}</div>
        <div className="org__subtitle">{t(subtitle)}</div>

        {infoList && (
          <Button className="org__more" variant={"outlined"} onClick={openDialog}>
            {t("read_more")}
          </Button>
        )}

        <div className="org__year">{t(year)}</div>
      </div>
      <img className="org__img" src={`${process.env.PUBLIC_URL}/img/${logo}`} alt="" />

      {infoList && (
        <AppDialog
          opened={dialogOpened}
          infoList={infoList}
          title={t("project_description")}
          onClose={closeDialog}
        />
      )}
    </div>
  );
}
