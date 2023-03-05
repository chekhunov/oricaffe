import React from "react";
import { Divider } from "@material-ui/core";
import { Info, Breadcrumbs } from "../../components";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";

import "./Cart.scss";
const CartPage = ({ onClosed, onRemove, items = [] }) => {
  const breadcrumbs = [
    {
      id: 0,
      title: "home",
      link: "",
    },
    {
      id: 1,
      title: "cart",
      link: "",
    },
  ];

  const { t } = useTranslation();

  const { items: cart, setItems, removeItem, updateItemQuantity } = useCart();

  const sum = cart.map((el) => el.itemTotal);
  const quan = cart.map((el) => el.quantity);
  console.log(cart);
  const initialValue = 0;
  const sumWithInitial = (arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  };

  return (
    <div className="cart mb-50">
      <div className="container-big">
        <div className="d-flex justify-between align-center pt-30 mb-30">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>

        <div className="cart__title pb-50">{t("cart")}</div>

        <Divider />

        {cart?.length > 0 ? (
          <div className="cart__inner d-flex flex-column">
            <div className="cart__items mb-50">
              {cart?.map((obj) => (
                <div
                  key={`${obj.id}${obj.code}`}
                  className="cartItem d-flex justify-between align-center"
                >
                  <div className="d-flex align-center">
                    <div
                      className="cart__img ml-20"
                      style={{ backgroundImage: "url(/" + obj?.imgUrl + ")" }}
                    ></div>

                    <div className="mr-20 d-flex align-center">
                      <span className="d-flex flex-column mr-20">
                        <span className="cart__label">
                          {t("cart_page.product_code")}
                        </span>
                        <span className="cart__num">{obj.code}</span>
                      </span>

                      <p className="cart__name mb-5">
                        {obj.name} {obj.desc}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-center ml-50">
                    <button
                      className="cart__btn-quantity mr-10"
                      onClick={() =>
                        updateItemQuantity(obj.id, obj.quantity - 1)
                      }
                    >
                      -
                    </button>

                    <span className="cart__quantity">{obj.quantity}</span>

                    <button
                      className="cart__btn-quantity ml-10"
                      onClick={() =>
                        updateItemQuantity(obj.id, obj.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className="d-flex align-center">
                    <span className="cart__column d-flex flex-column mr-50">
                      <span className="cart__label">
                        {t("cart_page.price")}
                      </span>
                      <span className="cart__num price">{obj?.price} грн.</span>
                    </span>

                    <div className="cart__column d-flex flex-column mr-20">
                      <span className="cart__label">{t("cart_page.sum")}</span>
                      <span className="cart__num">{obj.itemTotal} грн.</span>
                    </div>

                    <div
                      className="cart__del-btn"
                      onClick={() => removeItem(obj.id)}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                          fill="#D3D3D3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total-block">
              <ul>
                <li className={"d-flex"}>
                  <span>{t("cart_page.quantity")}</span>
                  <div></div>
                  <b>{sumWithInitial(quan)}</b>
                </li>
                <li className={"d-flex"}>
                  <span>{t("cart_page.total")}</span>
                  <div></div>
                  <b>{sumWithInitial(sum)} грн.</b>
                </li>
                <li className={"d-flex"}>
                  <span>{t("cart_page.tax")} 20%:</span>
                  <div></div>
                  <b>{(sumWithInitial(sum) / 100) * 20} грн.</b>
                </li>
              </ul>

              <div className="d-flex ">
                <button className="clear mr-20" onClick={() => setItems([])}>
                  {t("cart_page.clear")}
                </button>

                <button
                  className="cancel mr-20"
                  onClick={() => (document.location = "/")}
                >
                  {t("cart_page.cancel")}
                </button>

                <button className="checkout">{t("cart_page.checkout")}</button>
              </div>
            </div>
          </div>
        ) : (
          <Info
            title={t("cart_is_empty")}
            description={t("add_item_to_cart")}
            image={"/cart/empty.png"}
          />
        )}
      </div>
    </div>
  );
};

export default CartPage;
