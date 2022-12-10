import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../../../assets/header/logo.png";

export default function LogoCompany({ setActiveId, logo }) {
  return (
    <>
      <Link to={"/"}>
        <div className={"header__img"} onClick={setActiveId}>
          <img
            className={"header__img"}
            height="70"
            width="70"
            src={logo}
            alt="logo company"
          />
        </div>
      </Link>
    </>
  );
}
