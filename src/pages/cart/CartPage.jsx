import React from "react";
import { Button } from "@mui/material";
import { Info } from "../../components";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import ContainerPage from "../../components/modules/containerPage";
import { useStyles } from "./CartPage.styles";

import "./CartPage.scss";
import { MAIN_ROUTE, ORDER_ROUTE } from "../../types/const";
import { Box } from "@material-ui/core";
const CartPage = (): JSX.Element => {
  const breadcrumbs = [
    {
      id: 0,
      title: "home",
      link: MAIN_ROUTE,
    },
    {
      id: 1,
      title: "cart",
      link: "",
    },
  ];

  const styles = useStyles();
  const { t } = useTranslation();
  const notify = (message) => toast(t(message));

  const { items = [], setItems, removeItem, updateItemQuantity } = useCart();

  const sum = items?.map((el) => el.itemTotal);
  const quan = items?.map((el) => el.quantity);

  const initialValue = 0;
  const sumWithInitial = (arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  };

  const isOrderWithDiscount = sumWithInitial(sum) < 10000;

  const discount = 10;
  const sumOrder = sumWithInitial(sum);
  const sumOrderWithDiscount = Math.floor(
    sumOrder - sumOrder * (discount / 100)
  );

  return (
    <Box mb={8}>
      <ContainerPage name="cart" breadcrumbs={breadcrumbs}>
        {items?.length > 0 ? (
          <div className="cart__inner d-flex flex-column">
            <div className="cart__items mb-50">
              {items?.map((obj) => (
                <div
                  key={`${obj.code}${obj.id}`}
                  className="cartItem d-flex justify-between align-center"
                >
                  <div className="cart__info d-flex align-center">
                    <div
                      className="cart__img ml-20"
                      style={{ backgroundImage: "url(" + obj?.imgUrl + ")" }}
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

                  <div className="d-flex align-center ml-20 mr-50">
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
                      <span className="cart__num price">
                        {obj?.price} {t("hrn")}
                      </span>
                    </span>

                    <div className="cart__column d-flex flex-column mr-20">
                      <span className="cart__label">{t("cart_page.sum")}</span>
                      <span className="cart__num">
                        {obj.itemTotal} {t("hrn")}
                      </span>
                    </div>

                    <div
                      className="cart__del-btn"
                      onClick={() => {
                        removeItem(obj.id);
                        notify("removed_from_cart");
                      }}
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
                  <span>
                    {t("discount_order")} ({isOrderWithDiscount ? "0%" : "10%"})
                  </span>
                  <div></div>
                  <b>
                    {isOrderWithDiscount
                      ? 0
                      : `-${sumOrder - sumOrderWithDiscount}`}{" "}
                    {t("hrn")}
                  </b>
                </li>

                <li className={"d-flex"}>
                  <span>{t("cart_page.total")}</span>
                  <div></div>
                  <b>
                    {sumOrder} {t("hrn")}
                  </b>
                </li>

                <li className={"d-flex"}>
                  <span>{t("cart_page.tax")} 20%:</span>
                  <div></div>
                  <b>
                    {Math.floor((sumWithInitial(sum) / 100) * 20)} {t("hrn")}
                  </b>
                </li>
              </ul>

              <div className="d-flex ">
                <Button
                  sx={{
                    ...styles.button,
                    backgroundColor: "#f20505",
                    marginRight: "20px",
                    border: "0px solid #8E0303",
                    "&:hover": {
                      transition: "background-color 0.3s",
                      backgroundColor: "#F0B4AE",
                    },
                    "&:active": {
                      transition: "background-color 0.3s",
                      backgroundColor: "darken($color: #F0B4AE, $amount: 40%)",
                    },
                  }}
                  onClick={() => {
                    setItems([]);
                    notify("cart_empty");
                  }}
                >
                  {t("cart_page.clear")}
                </Button>

                <Button
                  sx={{
                    ...styles.button,
                    backgroundColor: "white",
                    color: "#131938",
                    marginRight: "20px",
                    border: "1px solid #8E0303",
                    "&:hover": {
                      transition: "background-color 0.3s",
                      backgroundColor: "#fff1f1",
                    },
                    "&:active": {
                      transition: "background-color 0.3s",
                      backgroundColor: "darken($color: #fff, $amount: 40%)",
                    },
                  }}
                  onClick={() => (document.location = MAIN_ROUTE)}
                >
                  {t("cart_page.cancel")}
                </Button>

                <Button
                  href={ORDER_ROUTE}
                  sx={{
                    ...styles.button,
                    backgroundColor: "#9DD558",
                    "&:hover": {
                      transition: " background-color 0.3s",
                      backgroundColor: "#74A736",
                    },
                    "&:active": {
                      transition: "background-color 0.3s",
                      backgroundColor: "darken($color: #9DD558, $amount: 40%)",
                    },
                  }}
                >
                  {t("cart_page.checkout")}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Info
            title={t("cart_is_empty")}
            description={t("add_item_to_cart")}
            image={"/cart/empty.webp"}
          />
        )}
      </ContainerPage>
    </Box>
  );
};

export default CartPage;
