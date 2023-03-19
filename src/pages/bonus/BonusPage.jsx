import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import InProgressCreate from "../../components/modules/InProgressCreate";

import "./Bonus.scss";

const breadcrumbs = [
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
  return (
    <ContainerPage name="bonus" breadcrumbs={breadcrumbs}>
      <div className="about-page__content d-flex justify-center">
        <InProgressCreate />
      </div>
    </ContainerPage>
  );
};

export default BonusPage;
