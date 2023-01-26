import React from "react";

const Box = ({ name, children }) => {
  return <div className={name}>{children}</div>;
};

export default Box;
