import React from "react";
import classNames from "classnames";
import { Divider } from "@material-ui/core";
import { Breadcrumbs } from "../../components";
import { useTranslation } from "react-i18next";
import InProgressCreate from "../../components/modules/InProgressCreate";
import "./Bonus.scss";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "bonus",
    link: "",
  },
];

const BonusPage = () => {
  const { t } = useTranslation();
  return (
    <section className={classNames("bonus-page")}>
      <div className={classNames("container-big")}>
        <div className="bonus-page__inner">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <div className="bonus-page__title pb-50">{t("bonus")}</div>

          <Divider />

          <div className="bonus-page__content d-flex justify-center mt-50">
            <InProgressCreate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusPage;
