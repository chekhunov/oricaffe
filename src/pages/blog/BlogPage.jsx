import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import InProgressCreate from "../../components/modules/InProgressCreate";

import "./Blog.scss";

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
  return (
    <ContainerPage name="blog" breadcrumbs={breadcrumbs}>
      <div className="blog__content d-flex justify-center">
        <InProgressCreate />
      </div>
    </ContainerPage>
  );
};

export default BlogPage;
