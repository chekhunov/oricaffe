import React from "react";
import { useTranslation } from "react-i18next";
import { Divider } from "@material-ui/core";
import cs from "classnames";
import Breadcrumbs from "../../elements/breadcrumbs";
import Discount from "../../elements/discount";

import "./ContainerPage.scss";

const Container = ({ children, breadcrumbs, name, isDiscount = false }) => {
  const { t } = useTranslation();

  return (
    <section className={cs(`${name}-page`)}>
      <div className={cs("container-big")}>
        <div className={`${name}-page__inner`}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <div className={`${name}-page__title pb-50`}>{t(`${name}`)}</div>

          {isDiscount && <Discount title={t("discount")} />}

          <Divider orientation="horizontal" />
          {children}
        </div>
      </div>
    </section>
  );
};

export default Container;
