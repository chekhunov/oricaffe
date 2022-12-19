import React from "react";
import classNames from "classnames";

import "./socials.scss";
export default function socials({ textAccent, color, isHeigth }) {
  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  return (
    <section className="socials">
      <div className="container-big">
        <div className={classNames("socials__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2
            className={classNames("socials__desc d-flex", "desc")}
            style={{ color: textAccent }}
          >
            <a
              className="oriental-link"
              href="https://bhousecoffee.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              Orientalcaffe
            </a>
            <span className="ml-10">в социальных сетях</span>
          </h2>

          <div className="line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className="socials__content-block">
            <div className="container">
              <div className="socials__content">
                <div className="socials__subtitle mb-25">
                  Следи за новостями и обновлениями, участвуй в акциях, получай
                  скидки!
                </div>

                <ul className="socials__block">
                  <li className="socials__icon">
                    <a
                      className="socials__link"
                      href="https://www.facebook.com/orientalcaffeua"
                      target="_blank"
                    >
                      <svg
                        className="socials__ico"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26 26"
                        width="46"
                        height="46"
                      >
                        <path d="M13 0C5.82 0 0 5.82 0 13c0 6.518 4.801 11.899 11.057 12.839v-9.394H7.84v-3.417h3.217v-2.274c0-3.765 1.834-5.417 4.963-5.417 1.498 0 2.291.111 2.666.162v2.983h-2.134c-1.328 0-1.792 1.259-1.792 2.679v1.868h3.893l-.528 3.417H14.76v9.422C21.105 25.006 26 19.581 26 13c0-7.18-5.82-13-13-13z" />
                      </svg>
                    </a>
                  </li>

                  <li className="socials__icon">
                    <a className="socials__link" href="/" target="_blank">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>

                  <li className="socials__icon">
                    <a className="socials__link" href="/" target="_blank">
                      <svg
                        className="socials__ico"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                      >
                        <path d="M25 2c12.703 0 23 10.297 23 23S37.703 48 25 48 2 37.703 2 25 12.297 2 25 2zm7.934 32.375c.423-1.298 2.405-14.234 2.65-16.783.074-.772-.17-1.285-.648-1.514-.578-.278-1.434-.139-2.427.219-1.362.491-18.774 7.884-19.78 8.312-.954.405-1.856.847-1.856 1.487 0 .45.267.703 1.003.966.766.273 2.695.858 3.834 1.172 1.097.303 2.346.04 3.046-.395.742-.461 9.305-6.191 9.92-6.693.614-.502 1.104.141.602.644-.502.502-6.38 6.207-7.155 6.997-.941.959-.273 1.953.358 2.351.721.454 5.906 3.932 6.687 4.49.781.558 1.573.811 2.298.811.725 0 1.107-.955 1.468-2.064z" />
                      </svg>
                    </a>
                  </li>

                  <li className="socials__icon">
                    <a className="socials__link" href="/" target="_blank">
                      <svg
                        className="socials__ico"
                        width="50"
                        height="44"
                        viewBox="0 0 23 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.6111 2.41783C21.814 2.77172 20.9572 3.01005 20.0581 3.11748C20.9762 2.56769 21.6813 1.69651 22.0126 0.658313C21.154 1.16748 20.2025 1.53762 19.1896 1.73713C18.3798 0.873174 17.2233 0.333313 15.945 0.333313C13.0751 0.333313 10.9662 3.01095 11.6144 5.7906C7.92112 5.60554 4.64585 3.83609 2.453 1.14672C1.28842 3.14456 1.84904 5.7581 3.82793 7.08158C3.10029 7.0581 2.41418 6.85859 1.81564 6.52547C1.76689 8.5847 3.24293 10.5112 5.38071 10.94C4.75508 11.1098 4.06987 11.1495 3.37293 11.0159C3.93807 12.7817 5.57932 14.0664 7.52571 14.1025C5.65696 15.5677 3.30251 16.2222 0.944458 15.9441C2.91161 17.2053 5.2489 17.9411 7.75862 17.9411C16.0118 17.9411 20.6747 10.9707 20.393 4.71901C21.2615 4.09158 22.0153 3.30887 22.6111 2.41783Z"
                          fill="#2C397C"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
