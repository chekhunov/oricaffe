import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import InProgressCreate from "../../components/modules/InProgressCreate";
import "./Guarantee.scss";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
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
