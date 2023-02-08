import React from "react";
import {useTranslation} from "react-i18next";

import Button from "../../elements/button";

import "./howItWork.scss";

export default function HowItWork() {
  const {t} = useTranslation();

  const delivery_attributes = {
    button: "make_an_order",
    urlButton: "delivery",
    sx: {
      width: "200px",
      backgroundColor: "#2C397C",
      color: "#ffffff",
      borderRadius: "13px",
    },
  };
  return (
    <div className="how-it-work">
      <div className="container">
        <div className="how-it-work__inner">
          <div className="how-it-work__title mb-30">{t("no_hassle")}</div>
          <div className="line-dec"></div>
          <div className="how-it-work__box box d-flex justify-center align-center">
            <div className="box__item">
              <span className="box__num">1</span>
              <div className="box__title">Leave a request</div>
              <div className="box__desc">
                Our managers will help you make a choice
              </div>
            </div>
            <div className="box__item">
              <span className="box__num">2</span>
              <div className="box__title">
                Make a payment
              </div>
              <div className="box__desc">
                Choose a payment method convenient for you
              </div>
            </div>
            <div className="box__item">
              <span className="box__num">3</span>
              <div className="box__title">
                Arrange delivery
              </div>
              <div className="box__desc">
                Arrange delivery and receive goods
              </div>
            </div>
          </div>
          <Button
            sx={delivery_attributes.sx}
            link={delivery_attributes.urlButton}
            text={t(delivery_attributes.button)}
          />
        </div>
      </div>
    </div>
  );
}
