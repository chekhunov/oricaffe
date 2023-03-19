import React from "react";

import ContainerPage from "../../components/modules/containerPage";
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
