import React from "react";
import { useParams } from "react-router-dom";
import InProgressCreate from "../../components/modules/InProgressCreate";

const DetailsProductCard = () => {
  let { id } = useParams();
  return (
    <div className="d-flex flex-column align-center mt-50">
      <div>{id}</div>

      <InProgressCreate />
    </div>
  );
};

export default DetailsProductCard;
