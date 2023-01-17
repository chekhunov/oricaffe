import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import Button from "../../elements/button";

import packageImg from "../../../assets/img/package/pack.jpg";

import "./package.scss";
export default function Package({ textAccent, color, isHeigth }) {
  const { t } = useTranslation();
  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  const package_attributes = {
    button: "more_info",
    urlButton: "/package",
    sx: {
      width: "200px",
    },
  };

  return (
    <section className="package">
      <div className="container-big">
        <div className={cn("package__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2
            className={cn("package__desc d-flex", "desc")}
            style={{ color: textAccent }}
          >
            <span className="ml-10">{t("package")}</span>
          </h2>

          <div className="line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className="package__content-block">
            <div className="container">
              <div className="package__content">
                <div className="package__subtitle mb-25">
                  {t("follow_the_news")}
                </div>

                <div className="package__row package-row p-20 d-flex justify-between">
                  <div className="package-row__column-left d-flex flex-column mr-20">
                    <div className="package-row__title">
                      {t("high_quality_preservation")}
                    </div>

                    <p className="package-row__text pb-20">
                      {t("there_is_a_wide")}
                    </p>

                    <Button
                      sx={package_attributes.sx}
                      link={package_attributes.urlButton}
                      text={t(package_attributes.button)}
                    />
                  </div>

                  <img
                    className="package-row__img"
                    src={packageImg}
                    alt="package"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
