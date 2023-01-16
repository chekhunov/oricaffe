import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import LogoCompany from "../../modules/header/logoCompany";

import logo from "../../../assets/header/logo.png";

import "./footer.scss";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={cn("footer")}>
      <div className="container">
        <div className="footer__bottom">
          <div className="footer__logo">
            <div className="footer__bottom-meta">
              <LogoCompany logo={logo} height={80} width={80} />
            </div>

            <div className="footer__copy d-flex flex-column">
              <p>Copiright © 2022 Orientalcaffe.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          <div className="footer__item">
            <div className="footer__headline">{t("menu")}</div>
            <ul>
              <li>
                <a className="footer__link" href="/services">
                  {t("services")}
                </a>
              </li>

              <li>
                <a className="footer__link" href="/quality">
                  {t("quality")}
                </a>
              </li>

              <li>
                <a className="footer__link" href="/contacts">
                  {t("contacts")}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__item">
            <div className="footer__headline">{t("about_company")}</div>

            <ul>
              <li>
                <a className="footer__link" href="/about">
                  {t("history_company")}
                </a>
              </li>

              <li>
                <a className="footer__link" href="/cooperation">
                  {t("cooperation")}
                </a>
              </li>

              <li>
                <a className="footer__link" href="/faq">
                  {t("faq")}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__item">
            <div className="footer__headline">{t("legal_material")}</div>

            <ul>
              <li>
                <a className="footer__link" href="/terms-conditions">
                  {t("terms_conditions")}
                </a>
              </li>

              <li>
                <a className="footer__link" href="/privacy-policy">
                  {t("privacy_policy")}
                </a>
              </li>

              <li>
                <a className="footer__link" href="/cancelation-policy">
                  {t("cancelation_policy")}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__item">
            <div className="footer__headline mb-20">{t("find_us_on")}</div>

            <ul className="socials d-flex align-center">
              <li className="socials__item">
                <a
                  className="socials__link telegram"
                  href="https://www.facebook.com/orientalcaffeua"
                  target="_blank"
                >
                  <svg
                    className="telegram-ico"
                    fill="#000000"
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 455.731 455.731"
                  >
                    <g>
                      <path
                        d="M316.244,149.903L149.082,253.579c-2.943,1.825-4.282,5.409-3.255,8.717l22.423,72.253
                        c0.471,1.518,2.683,1.309,2.861-0.271l5.45-48.448c0.21-1.872,1.108-3.599,2.519-4.847l141.556-125.177
                        C324.025,152.81,320.089,147.518,316.244,149.903z"
                      />
                      <path
                        d="M0,0v455.731h455.731V0H0z M379.882,118.418l-52.031,248.76c-2.442,11.673-16.133,16.916-25.747,9.859l-78.559-57.665
                        l-40.039,40.881c-7.027,7.175-19.166,4.271-22.185-5.308l-28.901-91.706l-77.441-22.868c-10.16-3-10.759-17.165-0.888-21.012
                        l304.753-118.759C370.444,96.08,382.431,106.232,379.882,118.418z"
                      />
                    </g>
                  </svg>
                </a>
              </li>

              <li className="socials__item">
                <a className="socials__link" href="/" target="_blank">
                  <span className="icon-instagram"></span>
                </a>
              </li>

              <li className="socials__item">
                <a className="socials__link" href="/" target="_blank">
                  <svg
                    className="facebook-ico"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                    // fill='#ffffff'
                  >
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                  </svg>
                </a>
              </li>

              <li className="socials__item">
                <a className="socials__link" href="/" target="_blank">
                  <svg
                    className="socials__ico"
                    width="30"
                    height="30"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.6111 2.41783C21.814 2.77172 20.9572 3.01005 20.0581 3.11748C20.9762 2.56769 21.6813 1.69651 22.0126 0.658313C21.154 1.16748 20.2025 1.53762 19.1896 1.73713C18.3798 0.873174 17.2233 0.333313 15.945 0.333313C13.0751 0.333313 10.9662 3.01095 11.6144 5.7906C7.92112 5.60554 4.64585 3.83609 2.453 1.14672C1.28842 3.14456 1.84904 5.7581 3.82793 7.08158C3.10029 7.0581 2.41418 6.85859 1.81564 6.52547C1.76689 8.5847 3.24293 10.5112 5.38071 10.94C4.75508 11.1098 4.06987 11.1495 3.37293 11.0159C3.93807 12.7817 5.57932 14.0664 7.52571 14.1025C5.65696 15.5677 3.30251 16.2222 0.944458 15.9441C2.91161 17.2053 5.2489 17.9411 7.75862 17.9411C16.0118 17.9411 20.6747 10.9707 20.393 4.71901C21.2615 4.09158 22.0153 3.30887 22.6111 2.41783Z"
                      fill="#ffffff"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
