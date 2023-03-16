import React from "react";
import classNames from "classnames";
import { Divider } from "@material-ui/core";
import { Breadcrumbs } from "../../components";
import { useTranslation } from "react-i18next";
import InProgressCreate from "../../components/modules/InProgressCreate";
import "./Delivery.scss";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "delivery_coffee",
    link: "",
  },
];

const BonusPage = () => {
  const { t } = useTranslation();
  return (
    <section className={classNames("delivery-page")}>
      <div className={classNames("container-big")}>
        <div className="delivery-page__inner">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <div className="delivery-page__title pb-50">
            {t("delivery_coffee")}
          </div>

          <Divider />

          <div className="delivery-page__content d-flex justify-center mt-50">
            <InProgressCreate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusPage;
