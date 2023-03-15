import React from "react";
import { useTranslation } from "react-i18next";

import "./NotFound.scss";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="error">
      <div className="container">
        <div className="error__inner d-flex flex-column align-center">
          <span className="title">404</span>
          <p className="subtitle">{t("not_found.there_is_coffee")}</p>
          <p className="text">{t("not_found.sorry")}</p>
          <a href="/" className="error__link">
            {t("not_found.homepage")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
