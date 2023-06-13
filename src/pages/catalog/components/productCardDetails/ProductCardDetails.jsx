import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";

import ContainerPage from "../../../../components/modules/containerPage";
import { useGetProductCardDetail } from "../../../../api/productCardDetails";
import Center from "../../../../components/elements/center";
import { useTranslation } from "react-i18next";
import useGetPrice from "../../../../hooks/useGetPrice";
import Loader from "../../../../components/elements/loader";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

import "./ProductCardDetails.scss";
import { MAIN_ROUTE, SHOP_ROUTE } from "../../../../types/const";

const ProductCardDetails = () => {
  const { t } = useTranslation();
  let { id: productCode } = useParams();

  const params = { code: productCode };

  const { price_site } = useGetPrice();

  const { data: productData, isLoading } = useGetProductCardDetail(params);

  const { filterData } = productData || {};

  const {
    id,
    category,
    type_of_coffee,
    name,
    cost,
    sort,
    weight,
    weight_box,
    imgUrl,
    info,
  } = filterData || {};

  const breadcrumbs = [
    {
      id: 0,
      title: "home",
      link: MAIN_ROUTE,
    },
    {
      id: 1,
      title: "catalog",
      link: SHOP_ROUTE + `/${category ? category : "coffee"}`,
    },
    {
      id: 2,
      title: "category-name",
      link: "",
    },
  ];

  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

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
    <ContainerPage name="card_details" breadcrumbs={breadcrumbs}>
      <div className="card-details__content d-flex justify-center">
        {isLoading ? (
          <Center>
            <Loader />
          </Center>
        ) : productCode ? (
          <div className="card-details__inner">
            <div className="card-details__title title">{name}</div>
            <div className="card-details__box d-flex">
              <img
                className="card-details__img"
                src={`${imgUrl}`}
                alt="card-details"
              />

              <div className="card-details__info d-flex flex-column">
                <span className="card-details__code mb-10">
                  <b>{t("cart_page.product_code")}</b> {`10000${id}`}
                </span>
                <span className="card-details__sort mb-10">
                  <b>{t("cart_page.sort")}:</b> <span>{sort}</span>
                </span>
                <span className="card-details__sort mb-10">
                  <b>{t("cart_page.type_of_coffee")}:</b>{" "}
                  <span>{t(type_of_coffee)}</span>
                </span>
                <span className="card-details__desc mb-10">
                  <b>{t("cart_page.info")}:</b> {info}
                </span>
                <span className="card-details__desc mb-10">
                  {" "}
                  <b>{t("cart_page.weight")}:</b> {weight}
                </span>
                <span className="card-details__desc mb-30">
                  <b>{t("cart_page.weight_box")}:</b> {weight_box}
                </span>
                <span className="card-details__price">
                  <b>{t("cart_page.price")}:</b>{" "}
                  <span className="card-details__price-text">
                    {price_site(cost)} {t("hrn")}
                  </span>
                </span>
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
                    maxWidth: "250px",
                  }}
                  className={cn("atuin-btn")}
                  onClick={(e) => handleContinueClick(e)}
                >
                  <span className="atuin-btn__text">{t("Add To Cart")}</span>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <Center sx={{ width: "100%" }}>
            <div>{t("there_is_currently")}</div>
          </Center>
        )}
      </div>
    </ContainerPage>
  );
};

export default ProductCardDetails;
