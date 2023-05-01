import React from "react";

import ContainerPage from "../../components/modules/containerPage";

import { MAIN_ROUTE } from "../../types/const";

const breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
  },
  {
    id: 1,
    title: "order",
    link: "",
  },
];

const OrderPage = () => {
  return (
    <ContainerPage name="order" breadcrumbs={breadcrumbs}>
      <div className="order__content d-flex justify-center"></div>
    </ContainerPage>
  );
};

export default OrderPage;
