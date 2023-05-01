import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import "./Button.scss";

export default function Button({
  sx,
  link,
  text,
  icon,
  click,
  name,
  isSubmit = false,
}) {
  return isSubmit ? (
    <button
      type="submit"
      style={sx}
      className={cn("atuin-btn")}
      onClick={click}
    >
      <span className="atuin-btn__text">{text}</span>
    </button>
  ) : (
    <Link to={link} className={`${name}-btn`} onClick={click}>
      <span style={sx} className={cn("atuin-btn", { icon: icon })}>
        {icon && <img className="ico" src={icon} alt="Arrow" />}

        <span className="atuin-btn__text">{text}</span>
      </span>
    </Link>
  );
}
