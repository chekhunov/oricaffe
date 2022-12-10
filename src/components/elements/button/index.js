import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

export default function Button({ sx, link, text }) {
  return (
    <Link to={link}>
      {/* <span style={sx} className="button-trans btn-contact"> */}
      <span style={sx} className="atuin-btn">
        <span className="atuin-btn__text">{text}</span>
      </span>
    </Link>
  );
}
