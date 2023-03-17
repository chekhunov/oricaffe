import React from "react";
import classNames from "classnames";
import { Divider } from "@material-ui/core";
import { Breadcrumbs } from "../../components";
import { useTranslation } from "react-i18next";
import InProgressCreate from "../../components/modules/InProgressCreate";
import "./Services.scss";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "services",
    link: "",
  },
];

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <section className={classNames("services-page")}>
      <div className={classNames("container-big")}>
        <div className="services-page__inner">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <div className="services-page__title pb-50">{t("services")}</div>

          <Divider />

          <div className="services-page__content d-flex justify-center mt-50">
            <InProgressCreate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
