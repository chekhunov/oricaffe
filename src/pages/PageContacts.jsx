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
    <section className={classNames(style.pageContacts, "page-contacts")}>
      <div className={classNames("container-big")}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <div className={style.title}>Контакты</div>

        <div className={style.inner}>
          <Contacts />
        </div>
      </div>
    </section>
  );
}
