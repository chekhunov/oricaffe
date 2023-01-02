import React from "react";
import { Link } from "react-router-dom";
import style from "./breadcrumbs.module.scss";

export default function Breadcrumbs({ breadcrumbs }) {
  console.log(breadcrumbs, breadcrumbs.lenght);
  return (
    <>
      <div className={style.breadcrumbs}>
        <ul className={style.list}>
          {breadcrumbs &&
            breadcrumbs.map((item) => (
              <li className={style.item}>
                <Link key={item.id} to={`/${item.link}`}>
                  <span className={style.link}>{item.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
