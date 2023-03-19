import React from "react";
import CreatePng from "../../assets/icons/create.webp";
export default function InProgressCreate() {
  return (
    <div className="d-flex flex-column align-center">
      <img className="mb-30" height={80} src={CreatePng} alt="create" />
      <div>Просимо вибачення сторінка в процесі розробки...</div>
    </div>
  );
}
