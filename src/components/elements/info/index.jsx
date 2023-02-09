import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../elements/button";

import "./info.scss";
const Info = ({ title, image, description }) => {
  const { t } = useTranslation();

  return (
    <div className="cart-empty d-flex align-center justify-center flex-column flex">
      <img className="mb-30" width="120px" src={image} alt="Empty" />
      <h2 className="mb-10">{title}</h2>
      <p className="cart-empty__desc opacity-6 mb-40">{description}</p>

      <Button
        link={""}
        text={t("back_to")}
        icon={"/icons/arrow_left.svg"}
        sx={{
          minWidth: "200px",
          backgroundColor: "#2C397C",
          color: "white",
          boxShadow: "none",
        }}
      />
    </div>
  );
};

export default Info;
