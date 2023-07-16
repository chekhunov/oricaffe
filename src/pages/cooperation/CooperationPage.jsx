import React, { useState } from "react";

import cn from "classnames";
import { useTranslation } from "react-i18next";
import ContainerPage from "../../components/modules/containerPage";

import "./CooperationPage.scss";
import { MAIN_ROUTE } from "../../types/const";
import { useGetPartners } from "../../api/partners";
import PreLoader from "../../components/elements/preLoader";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
  },
  {
    id: 1,
    title: "cooperation",
    link: "",
  },
];

const CooperationPage = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  const { data, isLoading } = useGetPartners();
    const { partners } = data || [];

  return (
    <ContainerPage name="cooperation" breadcrumbs={breadcrumbs}>
      <div className="contacts-page__row">
        <div className="contacts-page__headline">
          <div className="contacts-page__title partners-title">
            {t("our_partners")}
          </div>
          <div className="contacts-page__subtitle">{t("can_buy_goods")}</div>
        </div>

        <div className="contacts-page__partners">
          <div className="contacts-page__items">
            {isLoading ? <PreLoader /> :
            partners?.map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                className={cn(
                  "contacts-page__item",
                  index === active ? "active" : ""
                )}
                onClick={() => setActive(index)}
                target="_blank"
                rel="noreferrer"
              >
                <div className="contacts-page__caffee">{item.title}</div>
                <div className="contacts-page__address">{item.address}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </ContainerPage>
  );
};

export default CooperationPage;
