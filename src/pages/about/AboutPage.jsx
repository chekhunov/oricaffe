import React from "react";
import classNames from "classnames";
import { Divider } from "@material-ui/core";
import "./About.scss";
import { Breadcrumbs } from "../../components";
import About from "../../components/sections/about";
import { useTranslation } from "react-i18next";
import InProgressCreate from "../../components/modules/InProgressCreate";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "about",
    link: "",
  },
];

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <section className={classNames("about-page")}>
      <div className={classNames("container-big")}>
        <div className="about-page__inner">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          {/* <img
            className="page-about__title-img mt-20"
            src="/aboutPage/title.jpg"
            alt="title"
          /> */}
          <div className="about-page__title pb-50">{t("about")}</div>

          <Divider />

          <About />
          {/* 
          <div className="page-about__title">How it work</div> */}
          <div className="about-page__content d-flex justify-center">
            {/* <img
              width="75%"
              className=""
              src="/aboutPage/background.jpg"
              alt="title"
            /> */}
            <InProgressCreate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
