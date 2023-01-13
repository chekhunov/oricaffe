import React from "react";
import classNames from "classnames";
// import AppContext from '../../context';
import style from "./Contacts.module.scss";
import { Breadcrumbs, Contacts } from "../components";

let breadcrumbs = [
  {
    id: 0,
    title: "Главная",
    link: "",
  },
  {
    id: 1,
    title: "Контакты",
    link: "",
  },
];

export default function PageContacts() {
  return (
    <section className={classNames(style.pageContacts, "page-contacts mt-50")}>
      <div className={classNames("container-big")}>
        <div className="page-contacts__inner pt-50">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <div className={style.title}>Контакты</div>

          <div className={style.inner}>
            <Contacts />
          </div>
        </div>
      </div>
    </section>
  );
}
