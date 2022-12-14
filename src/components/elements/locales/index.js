import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import en from "../../../assets/img/flags/en.png";
import ru from "../../../assets/img/flags/ru.png";
import ua from "../../../assets/img/flags/ua.png";

export default function Locales() {
  const { i18n, ready } = useTranslation();
  console.log(i18n);
  const [locale, setLocale] = useState(i18n.language);

  const changeLanguage = (lng) => {
    setLocale(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang mr-20">
      <span className="lang__el d-flex align-center">
        <img
          className="flag mr-5"
          height="20"
          width="30"
          src={`flags/${locale === "en-US" ? "en" : locale}.png`}
          alt="flag"
        />

        <span className="lang__text active">
          {locale === "en-US" ? "en" : locale}
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
