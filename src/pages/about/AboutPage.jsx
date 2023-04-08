import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import About from "../../components/sections/about";
import InProgressCreate from "../../components/modules/InProgressCreate";

import "./About.scss";
import { MAIN_ROUTE } from '../../types/const';

const breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
  },
  {
    id: 1,
    title: "about",
    link: "",
  },
];

const AboutPage = () => {
  return (
    <ContainerPage name="about" breadcrumbs={breadcrumbs}>
      <About />

      <div className="about-page__content d-flex justify-center">
        <InProgressCreate />
      </div>
    </ContainerPage>
  );
};

export default AboutPage;
