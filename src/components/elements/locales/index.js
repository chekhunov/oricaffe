import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import en from "../../../assets/img/flags/en.webp";
import ru from "../../../assets/img/flags/ru.webp";
import ua from "../../../assets/img/flags/ua.webp";

export default function Locales() {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(i18n.language || "ua");

  const changeLanguage = (lng) => {
    setLocale(lng);
    i18n.changeLanguage(lng);
  };

  let result = locale.match(/ua/);

  return (
    <div className="lang mr-20">
      <span className="lang__el d-flex align-center">
        <img
          className="flag-active mr-5"
          height="30"
          width="30"
          src="/icons/globe.png"
          alt="flag"
        />

        <span className="lang__text active">
          {result?.length > 0 ? "ua" : locale}
        </span>

        <div className="lang__popup">
          <span
            className="lang__item d-flex align-center"
            onClick={() => changeLanguage("en")}
          >
            <img
              height="20"
              width="30"
              className="flag mr-5"
              src={en}
              alt="flag"
            />
            <span className="lang__text">en</span>
          </span>

          <span
            className="lang__item d-flex align-center"
            onClick={() => changeLanguage("ru")}
          >
            <img
              height="20"
              width="30"
              className="flag mr-5"
              src={ru}
              alt="flag"
            />
            <span className="lang__text">ru</span>
          </span>

          <span
            className="lang__item d-flex align-center"
            onClick={() => changeLanguage("ua")}
          >
            <img
              height="20"
              width="30"
              className="flag mr-5"
              src={ua}
              alt="flag"
            />
            <span className="lang__text">ua</span>
          </span>
        </div>
      </span>
    </div>
  );
}
