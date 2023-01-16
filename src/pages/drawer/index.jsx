import React from "react";
import { Info, Breadcrumbs } from "../../components";
import { useTranslation } from "react-i18next";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "drawer",
    link: "",
  },
];

function Drawer({ onClosed, onRemove, items = [] }) {
  const { t } = useTranslation();
  return (
    <div className="drawer mt-50 mb-50">
      <div className="container-big">
        <div className="d-flex justify-between align-center pt-30 mb-30">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center">
                  {/* <div
                    style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className=" mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 990 руб.</b>
                  </div>
                  <img
                    className={" removeBtn"}
                    onClick={() => onRemove(obj.id)}
                    src="/img/btnremove.svg"
                    alt=" removebtn"
                  /> */}
                </div>
              ))}
            </div>

            <div className="cart-total-block">
              <ul>
                <li className={"d-flex"}>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className={"d-flex"}>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button>Оформить заказ</button>
            </div>
          </div>
        ) : (
          <Info
            title={t("cart_is_empty")}
            description={t("add_item_to_cart")}
            image={"cart/empty.png"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
