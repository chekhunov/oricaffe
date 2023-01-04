import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import "./about.scss";

export default function About({
  textAccentAbout,
  colorAbout,
  isHeigthAbout,
  bgColor,
}) {
  const { t } = useTranslation();
  const stylesBlock = {
    backgroundColor: colorAbout,
    height: isHeigthAbout + "%",
  };
  return (
    <section className="about">
      <div className="container-big">
        <div className={classNames("about__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2
            style={{ color: textAccentAbout, backgroundColor: bgColor }}
            className={classNames("about__desc d-flex", "desc")}
          >
            {t("company")}
            <a
              className="oriental-link ml-10"
              href="https://bhousecoffee.com/"
              target="_blank"
              rel="noreferrer"
            >
              Oriental caffe
            </a>
          </h2>

          <div className="line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className="about__content-block">
            <div className="container">
              <div className="about__text">
                <span className="about__meta-text pb-20">
                  {t("company")}
                  <span className="about__text-accent">Oriental caffe</span>
                  {t("about_section.headline")}
                </span>
                <p className="about__text-desc">
                  {t("company")}
                  <span className="about__text-accent">
                    Oriental caffe (Oriental caffè)
                  </span>
                  – {t("about_section.about_company")}{" "}
                  <span style={{ color: "red" }}>Samuele</span>,{" "}
                  {t("about_section.about_company_two")}
                </p>
                <p className="about__text-desc">
                  {t("about_section.about_company_three")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
