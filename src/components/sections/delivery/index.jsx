import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../elements/button";

import deliveryImg from "../../../assets/img/delivery/delivery.webm";

import "./delivery.scss";

export default function Delivery() {
  const { t } = useTranslation();

  const delivery_attributes = {
    button: "more_info",
    urlButton: "delivery",
    sx: {
      width: "200px",
    },
  };

  return (
    <div className="delivery__content-block">
      <div className="container">
        <div className="delivery__content">
          <div className="delivery__subtitle mb-25">
            {t("we_cooperate_with")}
          </div>

          <div className="delivery__row delivery-row p-20 d-flex justify-between">
            <div className="delivery-row__column-left d-flex flex-column">
              <div className="delivery-row__title">
                {t("since_our_production")}
              </div>

              <p className="delivery-row__text pb-20">{t("we_quite_easily")}</p>

              <Button
                sx={delivery_attributes.sx}
                link={delivery_attributes.urlButton}
                text={t(delivery_attributes.button)}
              />
            </div>

            <div className="delivery-row__img">
              <video
                width="100%"
                height="auto"
                autoPlay="autoplay"
                loop
                muted
                playsInline
              >
                <source src={deliveryImg} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
