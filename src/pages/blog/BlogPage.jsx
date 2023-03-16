import React from "react";
import classNames from "classnames";
import { Divider } from "@material-ui/core";
import { Breadcrumbs } from "../../components";
import { useTranslation } from "react-i18next";

import "./Blog.scss";
import InProgressCreate from '../../components/modules/InProgressCreate';

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "blog",
    link: "",
  },
];

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <section className={classNames("blog-page")}>
      <div className={classNames("container-big")}>
        <div className="blog-page__inner">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <div className="blog-page__title pb-50">{t("blog")}</div>

          <Divider />

          <div className="blog-page__content d-flex justify-center mt-50">
            <InProgressCreate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
