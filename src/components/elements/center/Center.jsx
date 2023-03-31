import React from "react";

import "./Center.scss";
const Center = ({ children, sx }) => {
  return <div className="center" style={sx}>{children}</div>;
};

export default Center;
