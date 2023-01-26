import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";

import BaseButton from "../baseButton";

import StateContext from "../../../utils/stateContext";

export default function ToCart({ viewProps }) {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const { data } = viewProps;

  const { setStateContext } = useContext(StateContext);
  const { addItem } = useCart();

  const { code, imgUrl, name, desc, price } = data;

  const handleCancelClick = () => {
    document.body.classList.remove("overflowe");
    setStateContext({ isActiveCardPopup: false, type: "", add_to_cart: null });
  };

  const handleContinueClick = () => {
    addItem(data, quantity);
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

  return (
    <div className="add-to-cart h100p d-flex flex-column justify-between">
      <div className="subtitle__cart text-center mb-20">
        {t("popup.choose_the_quantity")}
      </div>

      <div className="cartItem d-flex justify-between align-center mb-50">
        <div className="d-flex align-center">
          <div
            className="cart__img ml-20"
            style={{ backgroundImage: "url(/" + imgUrl + ")" }}
          ></div>

          <div className="mr-20 d-flex align-center">
            <span className="d-flex flex-column mr-40">
              <span style={{ fontSize: "10px" }} className="cart__label">
                {t("cart_page.product_code")}
              </span>
              <span style={{ fontSize: "14px" }} className="cart__num">
                {code}
              </span>
            </span>

            <p style={{ fontSize: "14px" }} className="cart__name">
              {name} {desc}
            </p>
          </div>
        </div>

        <div className="d-flex align-center pr-20 pl-20">
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
            <b>{price}</b>
          </li>

          <li className={"d-flex"}>
            <span>{t("cart_page.total")}</span>
            <div></div>
            <b>{price * quantity} грн.</b>
          </li>
        </ul>

        <div className="d-flex justify-between">
          <BaseButton
            name={cancel_attributes.button}
            click={handleCancelClick}
            text={t(cancel_attributes.text)}
            sx={cancel_attributes.sx}
          />

          <div className="d-flex">
            <BaseButton
              name={continue_attributes.button}
              click={handleContinueClick}
              text={t(continue_attributes.text)}
              sx={continue_attributes.sx}
            />

            <BaseButton
              name={make_order_attributes.button}
              link="/cart"
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
