import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import Button from "../../elements/button";

import deliveryImg from "../../../assets/img/delivery/delivery.gif";

import "./delivery.scss";
export default function Delivery({ textAccent, color, isHeigth }) {
  const { t } = useTranslation();
  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  const delivery_attributes = {
    button: "more_info",
    urlButton: "/delivery",
    sx: {
      width: "200px",
    },
  };

  return (
    <section className="delivery">
      <div className="container-big">
        <div className={cn("delivery__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2
            className={cn("delivery__desc d-flex", "desc")}
            style={{ color: textAccent }}
          >
            <span className="ml-10">{t("delivery")}</span>
          </h2>

          <div className="line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className="delivery__content-block">
            <div className="container">
              <div className="delivery__content">
                <div className="delivery__subtitle mb-25">
                  {t("we_cooperate_with")}
                </div>

                <div className="delivery__row delivery-row p-20 d-flex justify-between">
                  <div className="delivery-row__column-left d-flex flex-column mr-20">
                    <div className="delivery-row__title">
                      {t("since_our_production")}
                    </div>

                    <p className="delivery-row__text pb-20">
                      {t("we_quite_easily")}
                    </p>

                    <Button
                      sx={delivery_attributes.sx}
                      link={delivery_attributes.urlButton}
                      text={t(delivery_attributes.button)}
                    />
                  </div>

                  <img
                    className="delivery-row__img"
                    src={deliveryImg}
                    alt="delivery"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
