import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import LogoCompany from "../../modules/header/logoCompany";

import logo from "../../../assets/header/logo.png";

import "./footer.scss";
import { CONTACT_ROUTE } from '../../../types/const';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={cn("footer")}>
      <div className="container">
        <div className="footer__bottom">
          <div className="footer__box w100p d-flex justify-between">
            <div className="footer__logo">
              <div className="footer__bottom-meta">
                <LogoCompany logo={logo} height={80} width={80} />
              </div>

              <div className="footer__copy d-flex flex-column">
                <p>Copiright © 2022 Orientalcaffe.</p>
                <p>All rights reserved.</p>
              </div>
            </div>

            <div className="footer__nav w100p d-flex justify-between">
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
                    <a className="footer__link" href={CONTACT_ROUTE}>
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
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C24 5.3726 18.6274 0 12 0C5.3726 0 0 5.3726 0 12ZM9.8 17.5L10.0042 14.4411L10.004 14.441L15.5684 9.4195C15.8126 9.20275 15.5152 9.09705 15.191 9.29365L8.32365 13.6262L5.35735 12.7003C4.71675 12.5042 4.71215 12.064 5.50115 11.7476L17.0602 7.29045C17.5881 7.05075 18.0976 7.41725 17.8961 8.22525L15.9276 17.5016C15.7901 18.1608 15.3919 18.3184 14.84 18.0139L11.8413 15.7985L10.4 17.2C10.3954 17.2044 10.3909 17.2088 10.3864 17.2132C10.2252 17.3701 10.0919 17.5 9.8 17.5Z"
                          fill="#131938"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="socials__item">
                    <a
                      className="socials__link instagram"
                      href="/"
                      target="_blank"
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.2969 12C14.2969 13.2686 13.2686 14.2969 12 14.2969C10.7314 14.2969 9.70312 13.2686 9.70312 12C9.70312 10.7314 10.7314 9.70312 12 9.70312C13.2686 9.70312 14.2969 10.7314 14.2969 12Z"
                          fill="#131938"
                        />
                        <path
                          d="M17.3713 7.93671C17.2609 7.63751 17.0848 7.3667 16.8559 7.14441C16.6336 6.91553 16.363 6.73938 16.0636 6.62897C15.8208 6.53467 15.4561 6.42242 14.7842 6.39185C14.0575 6.3587 13.8396 6.35156 11.9998 6.35156C10.1597 6.35156 9.94183 6.35852 9.21527 6.39166C8.54346 6.42242 8.17853 6.53467 7.93591 6.62897C7.63654 6.73938 7.36572 6.91553 7.14362 7.14441C6.91473 7.3667 6.73859 7.63733 6.62799 7.93671C6.53369 8.1795 6.42145 8.54443 6.39087 9.21625C6.35773 9.94281 6.35059 10.1607 6.35059 12.0007C6.35059 13.8406 6.35773 14.0585 6.39087 14.7852C6.42145 15.457 6.53369 15.8218 6.62799 16.0646C6.73859 16.364 6.91455 16.6346 7.14343 16.8569C7.36572 17.0858 7.63635 17.2619 7.93573 17.3723C8.17853 17.4668 8.54346 17.579 9.21527 17.6096C9.94183 17.6428 10.1595 17.6497 11.9996 17.6497C13.8398 17.6497 14.0577 17.6428 14.7841 17.6096C15.4559 17.579 15.8208 17.4668 16.0636 17.3723C16.6646 17.1405 17.1395 16.6655 17.3713 16.0646C17.4656 15.8218 17.5779 15.457 17.6086 14.7852C17.6418 14.0585 17.6487 13.8406 17.6487 12.0007C17.6487 10.1607 17.6418 9.94281 17.6086 9.21625C17.5781 8.54443 17.4658 8.1795 17.3713 7.93671ZM11.9998 15.5389C10.0455 15.5389 8.46124 13.9548 8.46124 12.0005C8.46124 10.0463 10.0455 8.46222 11.9998 8.46222C13.9539 8.46222 15.5381 10.0463 15.5381 12.0005C15.5381 13.9548 13.9539 15.5389 11.9998 15.5389ZM15.678 9.14923C15.2213 9.14923 14.8511 8.77899 14.8511 8.32233C14.8511 7.86566 15.2213 7.49542 15.678 7.49542C16.1346 7.49542 16.5049 7.86566 16.5049 8.32233C16.5047 8.77899 16.1346 9.14923 15.678 9.14923Z"
                          fill="#131938"
                        />
                        <path
                          d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM18.8491 14.8409C18.8157 15.5744 18.6991 16.0752 18.5288 16.5135C18.1708 17.4391 17.4391 18.1708 16.5135 18.5288C16.0754 18.6991 15.5744 18.8156 14.8411 18.8491C14.1063 18.8826 13.8715 18.8906 12.0002 18.8906C10.1287 18.8906 9.8941 18.8826 9.15912 18.8491C8.42578 18.8156 7.9248 18.6991 7.48663 18.5288C7.02667 18.3558 6.61029 18.0846 6.26605 17.7339C5.91559 17.3899 5.64441 16.9733 5.47137 16.5135C5.30109 16.0754 5.18445 15.5744 5.15112 14.8411C5.11725 14.1061 5.10938 13.8713 5.10938 12C5.10938 10.1287 5.11725 9.89392 5.15094 9.15912C5.18427 8.4256 5.30072 7.9248 5.47101 7.48645C5.64404 7.02667 5.91541 6.61011 6.26605 6.26605C6.61011 5.91541 7.02667 5.64423 7.48645 5.47119C7.9248 5.3009 8.4256 5.18445 9.15912 5.15094C9.89392 5.11743 10.1287 5.10938 12 5.10938C13.8713 5.10938 14.1061 5.11743 14.8409 5.15112C15.5744 5.18445 16.0752 5.3009 16.5135 5.47101C16.9733 5.64404 17.3899 5.91541 17.7341 6.26605C18.0846 6.61029 18.356 7.02667 18.5288 7.48645C18.6993 7.9248 18.8157 8.4256 18.8492 9.15912C18.8828 9.89392 18.8906 10.1287 18.8906 12C18.8906 13.8713 18.8828 14.1061 18.8491 14.8409Z"
                          fill="#131938"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="socials__item">
                    <a
                      className="socials__link facebook"
                      href="/"
                      target="_blank"
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z"
                          fill="#131938"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="socials__item">
                    <a
                      className="socials__link twitter"
                      href="/"
                      target="_blank"
                    >
                      <svg
                        className="socials__ico"
                        width="26"
                        height="26"
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

          <a
            className="sub-footer"
            href="https://www.linkedin.com/in/ihor-chekhunov-8764b9139/"
            target="_blank"
            rel="noreferrer"
          >
            designed and developed: Ihor Chekhunov
          </a>
        </div>
      </div>
    </footer>
  );
}
