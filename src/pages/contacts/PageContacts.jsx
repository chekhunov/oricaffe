import React from "react";
import { useTranslation } from "react-i18next";
import { Breadcrumbs, Contacts } from "../../components";

import { Divider } from "@material-ui/core";

import "./contacts.scss";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "contacts",
    link: "",
  },
];

export default function PageContacts() {
  const { t } = useTranslation();

  return (
    <section className="page-contacts mt-50">
      <div className="container-big">
        <div className="page-contacts__inner pt-50">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <div className="page-contacts__title">{t("contacts")}</div>

          <Divider />

          <div className="page-contacts__box">
            <Contacts />
          </div>
        </div>
      </div>
    </section>
  );
}
