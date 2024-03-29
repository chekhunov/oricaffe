import React, { useState } from "react";
import cn from "classnames";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import useGetPrice from "../../../hooks/useGetPrice";
import { toast } from "react-toastify";

import "./ProductsCard.scss";
import { SHOP_ROUTE } from "../../../types/const";
const ProductCard = ({
  id,
  category,
  type_of_coffee,
  sort,
  name,
  state,
  weight,
  weight_box,
  cost,
  imgUrl,
  sx,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation();
  const { addItem } = useCart();

  const { price_site } = useGetPrice();

  const notify = () => toast(t("add_product_to_cart"));

  const data = {
    id: id + 1,
    code: `10000${id}`,
    imgUrl,
    name,
    quantity,
    price: price_site(cost),
  };

  const handlePlus = (e) => {
    setQuantity(quantity + 1);
    e.preventDefault();
  };

  const handleMinus = (e) => {
    setQuantity(quantity - 1);
    e.preventDefault();
  };

  const handleContinueClick = (e) => {
    addItem(data, quantity);
    e.preventDefault();
    notify();
  };

  return (
    <>
      <Link
        to={SHOP_ROUTE + "/" + category + "/" + id}
        className={cn("products-card__item")}
        style={sx}
      >
        <div className="products-card__content">
          <div className="products-card__column">
            <div className="products-card__image">
              <div
                className="products-card__weight"
                style={{
                  color: "#131938",
                }}
              >
                <span className="products-card__number">{weight}</span>
                <span className="products-card__practice">{t("kg")}</span>
              </div>

              <img
                height={200}
                className="products-card__img pb-5"
                src={imgUrl}
                alt="products-card"
              />
            </div>

            <Divider
              orientation="horizontal"
              sx={{
                height: "1px",
                width: "70%",
                alignSelf: "center",
                margin: "0 auto",
              }}
            />

            <div className={"products-card__title title"}>
              <div
                style={{
                  maxWidth: "250px",
                  height: "52px",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#131938",
                  overflow: 'hidden',
                  display: '-webkit-box',
                  webkitLineClamp: 2,
                  webkitBoxOrient: 'vertical',
                }}
              >
                {name}
              </div>

              <div
                style={{
                  maxWidth: "250px",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#131938",
                }}
                className="products-card__description products-card__description--meta d-flex justify-center mb-10"
              >
                <span>{sort}</span>
              </div>
              <div
                style={{
                  maxWidth: "250px",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#131938",
                }}
                className="products-card__description products-card__description--meta d-flex justify-center mb-10"
              >
                <span>{t(type_of_coffee)}</span>
              </div>
            </div>

            <div
              className="products-card__state"
              style={{ color: state === "on_order" ? "blue" : "green" }}
            >
              {t(state)}
            </div>

            <div
              className="products-card__description products-card__description--three d-flex justify-center"
              style={{
                color: "#131938",
              }}
            >
              <span className="products-card__price">
                {t("cart_page.price")}: {price_site(cost)}
              </span>
              <span>{t("hrn")}</span>
            </div>
          </div>

          <div className="d-flex justify-center">
            <div className="cart-item__controls d-flex align-center">
              <button
                className="cart__btn-quantity"
                onClick={(e) => handleMinus(e)}
              >
                -
              </button>

              <span style={{ fontSize: "16px" }} className="cart__quantity">
                {quantity}
              </span>

              <button
                className="cart__btn-quantity"
                onClick={(e) => handlePlus(e)}
              >
                +
              </button>
            </div>

            <span
              style={{
                borderRadius: "8px",
                backgroundColor: "#9dd558",
                minWidth: "130px",
              }}
              className={cn("atuin-btn")}
              onClick={(e) => handleContinueClick(e)}
            >
              <span className="atuin-btn__text">{t("Add To Cart")}</span>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
