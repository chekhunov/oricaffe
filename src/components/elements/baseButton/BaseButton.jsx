import React from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Link } from "react-router-dom";

import "./baseButton.scss";

const BaseButton = ({
  name = "base-batton",
  sx,
  link,
  text,
  icon,
  click,
  children,
}) => {
  const { t } = useTranslation();

  return link ? (
    <Link
      to={`/${link}`}
      onClick={click}
      style={sx}
      className={cn(`${name} base-btn`, { icon: icon })}
    >
        {children}
        {icon && <img className="icon" src={icon} alt="decoration" />}
        {t(text)}
    </Link>
  ) : (
    <div
      style={sx}
      className={cn(`${name} base-btn`, { icon: icon })}
      onClick={click}
    >
      {children}
      {icon && <img className="icon" src={icon} alt="decoration" />}
      {t(text)}
    </div>
  );
};

export default BaseButton;
