import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../elements/button";

import packageImg from "../../../assets/img/package/pack.webp";

import { PACKAGE_ROUTE } from '../../../types/const';
import "./package.scss";

export default function Package({ textAccent, color, isHeigth }) {
  const { t } = useTranslation();

  const package_attributes = {
    button: "more_info",
    urlButton: PACKAGE_ROUTE,
    sx: {
      width: "200px",
    },
  };

  return (
    <div className="package__content-block">
        <div className="package__content">
          <div className="package__subtitle mb-25">{t("follow_the_news")}</div>

          <div className="package__row package-row p-20 d-flex justify-between">
            <div className="package-row__column-left d-flex flex-column">
              <div className="package-row__title">
                {t("high_quality_preservation")}
              </div>

              <p className="package-row__text pb-20">{t("there_is_a_wide")}</p>

              <Button
                name='package'
                link={package_attributes.urlButton}
                text={t(package_attributes.button)}
                sx={package_attributes.sx}
              />
            </div>

            <img className="package-row__img" src={packageImg} alt="package" />
          </div>
        </div>
    </div>
  );
}
