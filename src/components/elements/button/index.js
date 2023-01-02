import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Button.scss";

export default function Button({ sx, link, text }) {
  const { t } = useTranslation();
  return (
    <Link to={link} className={`${link}-btn`}>
      <span style={sx} className="atuin-btn">
        <span className="atuin-btn__text">{t(text)}</span>
      </span>
    </Link>
  );
}
