import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./breadcrumbs.module.scss";

export default function Breadcrumbs({ breadcrumbs }) {
  const { t } = useTranslation();

  const length = breadcrumbs.length - 1;

  return (
    <>
      <div className={style.breadcrumbs}>
        <ul className={style.list}>
          {breadcrumbs &&
            breadcrumbs.map((item, index) => (
              <li className={style.item}>
                {length !== index ? (
                  <Link key={item.id} to={`/${item.link}`}>
                    <span
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      className={style.link}
                    >
                      {" "}
                      {t(item.title)}
                    </span>
                  </Link>
                ) : (
                  <span className={style.link}>{t(item.title)}</span>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
