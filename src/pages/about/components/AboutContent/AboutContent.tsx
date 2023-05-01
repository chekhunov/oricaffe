import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

import "./AboutContent.scss";

const AboutContent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box className="about">
      <div className="container-big">
        <div className={cn("about__inner", "inner")}>
          <div className="about__content-block">
            <div className="container">
              <div className="about__text">
                <span className="about__meta-text pb-20">
                  {t("company")}
                  <span className="about__text-accent">Orientalcaffe</span>
                  {t("about_section.headline")}
                </span>
                <p className="about__text-desc">
                  {t("company")}
                  <span className="about__text-accent">
                    Orientalcaffe (Orientalcaffè)
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
    </Box>
  );
};

export default AboutContent;
