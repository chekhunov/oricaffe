import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import "./Button.scss";

export default function Button({ sx, link, text, icon, click, name }) {
  const { t } = useTranslation();
  return (
    <Link to={link} className={`${name}-btn`} onClick={click}>
      <span style={sx} className={cn("atuin-btn", { icon: icon })}>
        {icon && <img className="ico" src={icon} alt="Arrow" />}

        <span className="atuin-btn__text">{t(text)}</span>
      </span>
    </Link>
  );
}
