import React from "react";
import classNames from "classnames";
import { Divider } from "@material-ui/core";
import "./About.scss";
import { Breadcrumbs } from "../../components";
import About from "../../components/sections/about";
import { useTranslation } from "react-i18next";

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

export default function PageAbout() {
  const { t } = useTranslation();
  return (
    <section className={classNames("page-about mt-50")}>
      <div className={classNames("container-big")}>
        <div className="page-about__inner">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          {/* <img
            className="page-about__title-img mt-20"
            src="/aboutPage/title.jpg"
            alt="title"
          /> */}
          <div className="page-about__title pb-50">{t("about")}</div>

          <Divider />

          <About />
{/* 
          <div className="page-about__title">How it work</div> */}
          <div className="page-about__content d-flex justify-center">
            {/* <img
              width="75%"
              className=""
              src="/aboutPage/background.jpg"
              alt="title"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
