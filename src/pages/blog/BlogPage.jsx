import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import InProgressCreate from "../../components/modules/InProgressCreate";

import "./Blog.scss";
import { MAIN_ROUTE } from '../../types/const';

const breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
  },
  {
    id: 1,
    title: "blog",
    link: "",
  },
];

const BlogPage = () => {
  return (
    <ContainerPage name="blog" breadcrumbs={breadcrumbs}>
      <div className="blog__content d-flex justify-center">
        <InProgressCreate />
      </div>
    </ContainerPage>
  );
};

export default BlogPage;
