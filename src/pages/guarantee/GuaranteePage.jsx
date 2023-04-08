import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import InProgressCreate from "../../components/modules/InProgressCreate";
import "./Guarantee.scss";
import { MAIN_ROUTE } from '../../types/const';

const breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
  },
  {
    id: 1,
    title: "guarantee_coffee",
    link: "",
  },
];

const GuaranteePage = () => {
  return (
    <ContainerPage name="guarantee" breadcrumbs={breadcrumbs}>
      <div className="about-page__content d-flex justify-center">
        <InProgressCreate />
      </div>
    </ContainerPage>
  );
};

export default GuaranteePage;
