import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import InProgressCreate from "../../components/modules/InProgressCreate";

import "./Delivery.scss";
import { MAIN_ROUTE } from '../../types/const';

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
  },
  {
    id: 1,
    title: "delivery_coffee",
    link: "",
  },
];

const DeliveryPage = () => {
  return (
    <ContainerPage name="delivery" breadcrumbs={breadcrumbs}>
      <div className="about-page__content d-flex justify-center">
        <InProgressCreate />
      </div>
    </ContainerPage>
  );
};

export default DeliveryPage;
