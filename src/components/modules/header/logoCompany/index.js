import React from "react";
import { Link } from "react-router-dom";

export default function LogoCompany({ logo }) {
  return (
    <>
      <Link to={"/"}>
        <div
          className={"header__img"}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            className={"header__img"}
            height="50"
            width="50"
            src={logo}
            alt="logo company"
          />
        </div>
      </Link>
    </>
  );
}
