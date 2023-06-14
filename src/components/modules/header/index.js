import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { Menu } from "../..";
import HeaderMenuPopup from "./headerMenuPopup";
import Button from "../../elements/button";
import LogoCompany from "./logoCompany";
import { Locales } from "../..";
import { Link } from "react-router-dom";

import cartIcon from "../../../assets/icons/anim/cart.gif";
import logo from "../../../assets/header/logo.png";
import { BASKET_ROUTE, CONTACT_ROUTE } from "../../../types/const";

const home = [
  {
    id: 0,
    value: "home",
    link: "",
  },
];

export default function Header({ navMenu, menuSubheader, countCart }) {
  const { t } = useTranslation();

  const [activeId, setActiveId] = useState(null);
  const [activePopup, setActivePopup] = useState(false);

  function isActivePopup() {
    setActivePopup(!activePopup);
    addedOverflowForBody();
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
              Orientalcaffé
            </a>
          </div>

          <a
            className="oriental-mobile ml-20"
            href="https://bhousecoffee.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Orientalcaffé
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
              setActivePopup={isActivePopup}
              activePopup={activePopup}
              menuItems={[
                ...home,
                ...navMenu,
                ...menuSubheader,
                {
                  id: 3,
                  value: "contacts",
                  link: CONTACT_ROUTE,
                },
              ]}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          )}

          <div className="d-flex align-center">
            <Locales />

            <Link to={BASKET_ROUTE} className="header__cart mr-30">
              <span className="header__cart-count">{countCart}</span>
              <img
                className="header__cart-img"
                height="30"
                src={cartIcon}
                alt="cart"
              />
            </Link>

            <Button link={CONTACT_ROUTE} name="contacts" text={t("contacts")} />
          </div>
        </div>
      </div>
    </header>
  );
}
