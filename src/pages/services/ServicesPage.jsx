import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import InProgressCreate from "../../components/modules/InProgressCreate";
import "./Services.scss";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "services",
    link: "",
  },
];

const ServicesPage = () => {
  return (
    <ContainerPage name="services" breadcrumbs={breadcrumbs}>
      <div className="about-page__content d-flex justify-center">
        <InProgressCreate />
      </div>
    </ContainerPage>
  );
};

export default ServicesPage;
