import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import AboutContent from "./components/AboutContent/AboutContent";

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
      <AboutContent />
    </ContainerPage>
  );
};

export default AboutPage;
