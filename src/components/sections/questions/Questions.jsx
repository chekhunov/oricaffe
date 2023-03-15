import React from "react";
import { useTranslation } from "react-i18next";
import { pageRoutes } from "../../../utils/routes";

import "./questions.scss";
const Questions = () => {
  const { t } = useTranslation();

  return (
    <section className="questions">
      <div className="container-big">
        <div className="questions__inner d-flex justify-between align-start">
          <div className="questions__column left">
            <div className="title questions__title">{t("questions.faq")}</div>

            <p className="questions__descriptions">{t("questions.help")}</p>
          </div>

          <div className="questions__column right">
            <ul className="questions__menu">
              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    {t("questions.how_work")}

                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="questions__item-desc">
                  {t("questions.every_day")}
                </p>
              </li>

              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    {t("questions.can_cancel")}

                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="questions__item-desc">{t("questions.cancel")}</p>
              </li>

              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    {t("questions.what_cancel")}

                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="questions__item-desc">
                  {t("questions.customers_accept")}
                  <a className="questions__item-link" href={pageRoutes.terms}>
                    {t("questions.here")}
                  </a>
                </p>
              </li>

              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    {t("questions.pre_order")}

                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="questions__item-desc">
                  {t("questions.pre_order_anytime")}
                </p>
              </li>

              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    {t("questions.pre_order_anytime")}
                    Когда я получу товар, если оформил предзаказ?
                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="questions__item-desc">
                  Вы получите товар по предзаказу в оговоренный срок при этом
                  компания предоставит вам скидку на продукцию.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
