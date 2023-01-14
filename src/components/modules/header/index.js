import React from "react";
import { useTranslation } from "react-i18next";

import classNames from "classnames";

import { Menu } from "../..";
import HeaderMenuPopup from "./headerMenuPopup";
import Button from "../../elements/button";
import LogoCompany from "./logoCompany";
import { Locales } from "../..";

// import help from "../../../assets/img/help.png";
import cart from "../../../assets/icons/anim/cart.gif";
import logo from "../../../assets/header/logo.png";

export default function Header({ appState }) {
  const { t } = useTranslation();

  const [activeId, setActiveId] = React.useState(null);
  const [activePopup, setActivePopup] = React.useState(false);

  function isActivePopup() {
    setActivePopup(!activePopup);
  }

  function addedOverflowForBody() {
    !activePopup
      ? document.body.classList.add("overflowe")
      : document.body.classList.remove("overflowe");
  }

  return (
    <header className={classNames("header")}>
      <div className="container-big">
        <div
          className={classNames(
            "header__inner d-flex justify-beetwen",
            activePopup && "active"
          )}
        >
          <div className={"header__box"}>
            <LogoCompany logo={logo} />

            <button
              className={classNames("header__popup", activePopup && "active")}
              onClick={(e) => {
                isActivePopup();
                addedOverflowForBody();
              }}
            >
              <span className="header__popup-line"></span>Меню
            </button>

            <a
              className="oriental ml-20"
              href="https://bhousecoffee.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              Orientalcaffe
            </a>
          </div>

          <a
            className="oriental-mobile ml-20"
            href="https://bhousecoffee.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Orientalcaffe
          </a>

          {!activePopup ? (
            <Menu
              activePopup={activePopup}
              menuItems={appState.menuItems}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ) : (
            <HeaderMenuPopup
              activePopup={activePopup}
              menuItems={appState.menuItems}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          )}

          {/* <a href="/">
            <img className="help" height="70" src={help} alt="help" />
          </a> */}

          <div className="d-flex align-center">
            <Locales />

            <a href="/drawer" className="cart mr-30">
              <span className="cart__count">20</span>
              <img className="cart__img" height="38" src={cart} alt="cart" />
            </a>

            <Button link={"contacts"} text={t("contacts")} />
          </div>
        </div>
      </div>
    </header>
  );
}
