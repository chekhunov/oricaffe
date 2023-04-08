import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./breadcrumbs.module.scss";

export default function Breadcrumbs({ breadcrumbs }) {
  const { t } = useTranslation();

  const length = breadcrumbs?.length - 1;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={style.breadcrumbs}>
        <ul className={style.list}>
          {breadcrumbs?.map((item, index) => (
            <li key={item.id} className={style.item}>
              {length !== index ? (
                <Link to={item.link}>
                  <span onClick={handleClick} className={style.link}>
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
