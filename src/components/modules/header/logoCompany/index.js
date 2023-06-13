import React from "react";
import { Link } from "react-router-dom";
import { MAIN_ROUTE } from "../../../../types/const";

export default function LogoCompany({
  isFooter = false,
  logo,
  height = 50,
  width = 50,
}) {
  return (
    <>
      <Link to={MAIN_ROUTE}>
        <div
          className={!isFooter ? "header__img" : "footer__img"}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            className={!isFooter ? "header__img" : "footer__img"}
            height={height}
            width={width}
            src={logo}
            alt="logo company"
          />
        </div>
      </Link>
    </>
  );
}
