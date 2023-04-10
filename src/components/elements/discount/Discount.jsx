import React from "react";
import "./Discount.scss";

const Discount = ({ title = "discount" }) => {
  return <div className="discount">{title}</div>;
};

export default Discount;
