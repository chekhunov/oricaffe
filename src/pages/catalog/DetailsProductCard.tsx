import React from "react";
import { useParams } from 'react-router-dom';

const DetailsProductCard = () => {
  let { id } = useParams();
  return (
    <div className='d-flex flex-column'>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
      <div>{id}</div>
    </div>
  );
};

export default DetailsProductCard;
