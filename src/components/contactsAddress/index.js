import React from "react";

import { useTranslation } from "react-i18next";

import "./contactsAddress.scss";

export default function ContactsAddress() {
  const { t } = useTranslation();
  return (
    <address className={"contacts__list"}>
      <div className={"contacts__item"}>
        <span className="icon-location"></span>

        <div className={"contacts__block"}>
          <a
            className={"contacts__title"}
            href="https://www.google.com/maps/place/Vulytsya+Aran%CA%B9+Yanosha,+31,+Berehove,+Zakarpats'ka+oblast,+Ukraine,+90201/@48.199247,22.6424614,17z/data=!3m1!4b1!4m6!3m5!1s0x47385b2aea2eb8c3:0x1c64b872282aa715!8m2!3d48.1992434!4d22.6446501!16s%2Fg%2F11c899jkdr"
            target="_blanck"
          >
            Vulytsya Aranʹ Yanosha, 31, Berehove, Zakarpats'ka oblast, Ukraine,
            90201
          </a>

          <p className={"contacts__text"}>{t("where_to_find_us")}</p>
        </div>
      </div>

      <div className={"contacts__item"}>
        <span className="icon-phone"></span>

        <div className={"contacts__block"}>
          <a className={"contacts__title"} href="tel:+380506924860">
            +38(050) 692 48 60
          </a>

          <p className={"contacts__text"}>{t("for_all_questions")}</p>
        </div>
      </div>

      <div className={"contacts__item"}>
        <span className="icon-mail"></span>

        <div className={"contacts__block"}>
          <a
            className={"contacts__title"}
            href="mailto:orientalcaffeua@gmail.com"
          >
            orientalcaffeua@gmail.com
          </a>

          <p className={"contacts__text"}>{t("our_email")}</p>
        </div>
      </div>
    </address>
  );
}
