import React from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { Menu } from "../..";
import HeaderMenuPopup from "./headerMenuPopup";
import Button from "../../elements/button";
import LogoCompany from "./logoCompany";
import { Locales } from "../..";
import { Link } from "react-router-dom";

/* TODO remove */
// import help from "../../../assets/img/help.png";

import cartIcon from "../../../assets/icons/anim/cart.gif";
import logo from "../../../assets/header/logo.png";

export default function Header({ navMenu, menuSubheader, cart }) {
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
    <header className={cn("header")}>
      <div className="container-big">
        <div
          className={cn(
            "header__inner d-flex justify-beetwen",
            activePopup && "active"
          )}
        >
          <div className={"header__box"}>
            <LogoCompany logo={logo} />

            <button
              className={cn("header__popup", activePopup && "active")}
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
              menuItems={navMenu}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ) : (
            <HeaderMenuPopup
              activePopup={activePopup}
              menuItems={{ navMenu, ...menuSubheader }}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          )}

          {/* TODO remove */}
          {/* help for ukraine */}
          {/* <a href="/">
            <img className="help" height="70" src={help} alt="help" />
          </a> */}

          <div className="d-flex align-center">
            <Locales />

            <Link to="cart" className="cart mr-30">
              <span className="cart__count">{cart?.length || 0}</span>
              <img
                className="cart__img"
                height="30"
                src={cartIcon}
                alt="cart"
              />
            </Link>

            <Button link={"contacts"} text={t("contacts")} />
          </div>
        </div>
      </div>
    </header>
  );
}
