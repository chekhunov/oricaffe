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
              <div className="box__title">{t("how_work.leave_request")}</div>
              <div className="box__desc">{t("how_work.our_managers")}</div>
            </div>

            <div className="box__item">
              <span className="box__num">2</span>
              <div className="box__title">{t("how_work.make_payment")}</div>
              <div className="box__desc">{t("how_work.choose_payment")}</div>
            </div>

            <div className="box__item">
              <span className="box__num">3</span>
              <div className="box__title">{t("how_work.arrange_delivery")}</div>
              <div className="box__desc">
                {t("how_work.arrange_delivery_receive")}
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
