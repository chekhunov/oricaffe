import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import BaseButton from "../baseButton";
import { toast } from "react-toastify";

import StateContext from "../../../utils/stateContext";

import "./toCart.scss";
import { BASKET_ROUTE } from "../../../types/const";

export default function ToCart({ viewProps }) {
  const { t } = useTranslation();
  const notify = (message) => toast(t(message));

  const [quantity, setQuantity] = useState(1);
  const { data } = viewProps;

  const { setStateContext } = useContext(StateContext);
  const { addItem } = useCart();

  const { id, imgUrl, name, price } = data || {};

  const handleCancelClick = () => {
    document.body.classList.remove("overflowe");
    setStateContext({ isActiveCardPopup: false, type: "", add_to_cart: null });
  };

  const newData = {
    imgUrl,
    quantity,
    price,
    name,
    id: id + 1,
    code: `10000${id}`,
  };

  const handleContinueClick = () => {
    addItem(newData, quantity);
    notify("add_product_to_cart");
    handleCancelClick();
  };

  const make_order_attributes = {
    button: "order",
    text: "make_an_order",
    sx: {
      width: "150px",
    },
  };

  const continue_attributes = {
    button: "continue",
    text: "continue_shopping",
    sx: {
      width: "180px",
    },
  };

  const cancel_attributes = {
    button: "cancel",
    text: "cancel",
    sx: {
      width: "150px",
    },
  };

  const isOrderWithDiscount = price * quantity < 10000;

  const discount = 10;
  const sumOrder = price * quantity;
  const sumOrderWithDiscount = Math.floor(
    sumOrder - sumOrder * (discount / 100)
  );

  return (
    <div className="add-to-cart h100p">
      <div className="subtitle__cart text-center mb-20">
        {t("popup.choose_the_quantity")}
      </div>

      <div className="cart-item">
        <div className="d-flex align-center">
          <div
            className="cart__img ml-20"
            style={{ backgroundImage: "url(" + imgUrl + ")" }}
          ></div>

          <div className="cart-item__headline d-flex">
            <span className="cart-item__code d-flex flex-column">
              <span style={{ fontSize: "10px" }} className="cart__label">
                {t("cart_page.product_code")}
              </span>
              <span style={{ fontSize: "14px" }} className="cart__num">
                {`10000${id}`}
              </span>
            </span>

            <p className="cart__name">{name}</p>
          </div>
        </div>

        <div className="cart-item__controls d-flex align-center">
          <button
            className="cart__btn-quantity"
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>

          <span style={{ fontSize: "16px" }} className="cart__quantity">
            {quantity}
          </span>

          <button
            className="cart__btn-quantity"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <div className="d-flex align-center">
          <div className="cart__del-btn" onClick={handleCancelClick}>
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

      <div className="cart-total-block">
        <ul>
          <li className={"d-flex"}>
            <span>{t("cart_page.price")}</span>
            <div></div>
            <b>
              {price} {t("hrn")}
            </b>
          </li>

          <li className={"d-flex"}>
            <span>
              {t("cart_page.discount")} ({isOrderWithDiscount ? "0%" : "10%"})
            </span>
            <div></div>
            <b>
              {isOrderWithDiscount ? 0 : `-${sumOrder - sumOrderWithDiscount}`}{" "}
              {t("hrn")}
            </b>
          </li>

          <li className={"d-flex"}>
            <span>{t("cart_page.total")}</span>
            <div></div>
            <b>
              {isOrderWithDiscount ? sumOrder : sumOrderWithDiscount} {t("hrn")}
            </b>
          </li>
        </ul>

        <div className="cart-total-block__controls d-flex justify-between">
          <BaseButton
            name={cancel_attributes.button}
            click={handleCancelClick}
            text={t(cancel_attributes.text)}
            sx={cancel_attributes.sx}
          />

          <div className="cart-total-block__bottom d-flex">
            <BaseButton
              name={continue_attributes.button}
              click={handleContinueClick}
              text={t(continue_attributes.text)}
              sx={continue_attributes.sx}
            />

            <BaseButton
              name={make_order_attributes.button}
              link={BASKET_ROUTE}
              click={handleContinueClick}
              text={t(make_order_attributes.text)}
              sx={make_order_attributes.sx}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
