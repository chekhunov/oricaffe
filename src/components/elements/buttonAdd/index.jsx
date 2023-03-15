import React from "react";
import { useTranslation } from "react-i18next";

import "./buttonAdd.scss";
export default function ButtonAdd({ click }) {
  const { t } = useTranslation();

  return (
    <div className="button-add-cart" onClick={click}>
      <span className="button-add-cart__text">{t("add_to_cart")}</span>
    </div>
  );
}
