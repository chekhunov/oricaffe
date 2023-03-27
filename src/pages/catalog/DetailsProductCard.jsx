import React from "react";
import { useParams } from "react-router-dom";

import ContainerPage from "../../components/modules/containerPage";
import InProgressCreate from "../../components/modules/InProgressCreate";

const breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "catalog",
    link: "",
  },
];

const DetailsProductCard = () => {
  let { id } = useParams();
  return (
    <ContainerPage name="catalog" breadcrumbs={breadcrumbs}>
      <div className="catalog__content d-flex justify-center">
        <div>{id}</div>
        <InProgressCreate />
      </div>
    </ContainerPage>
  );
};

export default DetailsProductCard;
