import React, { useContext } from "react";
import cn from "classnames";
import StateContext from "../../../../utils/stateContext";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { pageRoutes } from "../../../../utils/routes";
import { useTranslation } from "react-i18next";

import "./topProductsCard.scss";
import useGetPrice from "../../../../hooks/useGetPrice";
export default function TopProductsCard({
  id,
  category,
  type_of_coffee,
  sort,
  name,
  weight,
  weight_box,
  cost,
  imgUrl,
  sx,
}) {
  const { setStateContext } = useContext(StateContext);

  const { t } = useTranslation();

  const { price_site } = useGetPrice();

  const handleClick = (e) => {
    setStateContext({
      isActiveCardPopup: true,
      type: "to_cart",
      add_to_cart: id,
    });
    document.body.classList.add("overflowe");
    e.preventDefault();
  };

  return (
    <Link
      to={pageRoutes.catalog + `/${category}/${id}`}
      className={cn("top-products__item")}
    >
      <div className="top-products__cart" onClick={(e) => handleClick(e)}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.6565 18.3152C8.75692 18.3152 8.83832 18.2338 8.83832 18.1334C8.83832 18.0329 8.75692 17.9515 8.6565 17.9515C8.55608 17.9515 8.47468 18.0329 8.47468 18.1334C8.47468 18.2338 8.55608 18.3152 8.6565 18.3152ZM6.83832 18.1334C6.83832 17.1292 7.65235 16.3152 8.6565 16.3152C9.66065 16.3152 10.4747 17.1292 10.4747 18.1334C10.4747 19.1375 9.66065 19.9515 8.6565 19.9515C7.65235 19.9515 6.83832 19.1375 6.83832 18.1334Z"
            fill="white"
            stroke="#8E0300"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.6565 18.3152C17.7569 18.3152 17.8383 18.2338 17.8383 18.1334C17.8383 18.0329 17.7569 17.9515 17.6565 17.9515C17.5561 17.9515 17.4747 18.0329 17.4747 18.1334C17.4747 18.2338 17.5561 18.3152 17.6565 18.3152ZM15.8383 18.1334C15.8383 17.1292 16.6523 16.3152 17.6565 16.3152C18.6607 16.3152 19.4747 17.1292 19.4747 18.1334C19.4747 19.1375 18.6607 19.9515 17.6565 19.9515C16.6523 19.9515 15.8383 19.1375 15.8383 18.1334Z"
            fill="white"
            stroke="#8E0300"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.11102 1.76971C1.11102 1.21743 1.55874 0.769714 2.11102 0.769714H5.38375C5.86038 0.769714 6.27076 1.1061 6.3643 1.57346L7.02223 4.86062H20.111C20.409 4.86062 20.6915 4.99355 20.8815 5.22318C21.0715 5.45281 21.1491 5.7552 21.0933 6.04795L19.7828 12.92C19.6623 13.5269 19.3321 14.072 18.8501 14.46C18.3709 14.8458 17.772 15.0517 17.1571 15.0424H9.22132C8.60643 15.0517 8.00751 14.8458 7.52831 14.46C7.04656 14.0722 6.71649 13.5274 6.59581 12.9208C6.59575 12.9206 6.59587 12.9211 6.59581 12.9208L5.22996 6.09671C5.22377 6.07114 5.21856 6.04517 5.21438 6.01887L4.56407 2.76971H2.11102C1.55874 2.76971 1.11102 2.322 1.11102 1.76971ZM7.42253 6.86062L8.55732 12.5304C8.58641 12.6768 8.66611 12.8084 8.78245 12.9021C8.89878 12.9957 9.04436 13.0455 9.19368 13.0426L9.21284 13.0424H17.1656L17.1847 13.0426C17.3341 13.0455 17.4796 12.9957 17.596 12.9021C17.7116 12.809 17.791 12.6785 17.8205 12.5332C17.8207 12.5322 17.8209 12.5313 17.8211 12.5304L18.9023 6.86062H7.42253Z"
            fill="white"
          />
          <path
            d="M6.59581 12.9208C6.71649 13.5274 7.04656 14.0722 7.52831 14.46C8.00751 14.8458 8.60643 15.0517 9.22132 15.0424H17.1571C17.772 15.0517 18.3709 14.8458 18.8501 14.46C19.3321 14.072 19.6623 13.5269 19.7828 12.92L21.0933 6.04795C21.1491 5.7552 21.0715 5.45281 20.8815 5.22318C20.6915 4.99355 20.409 4.86062 20.111 4.86062H7.02223L6.3643 1.57346C6.27076 1.1061 5.86038 0.769714 5.38375 0.769714H2.11102C1.55874 0.769714 1.11102 1.21743 1.11102 1.76971C1.11102 2.322 1.55874 2.76971 2.11102 2.76971H4.56407L5.21438 6.01887C5.21856 6.04517 5.22377 6.07114 5.22996 6.09671L6.59581 12.9208ZM6.59581 12.9208C6.59587 12.9211 6.59575 12.9206 6.59581 12.9208ZM7.42253 6.86062H18.9023L17.8211 12.5304C17.8209 12.5313 17.8207 12.5322 17.8205 12.5332C17.791 12.6785 17.7116 12.809 17.596 12.9021C17.4796 12.9957 17.3341 13.0455 17.1847 13.0426L17.1656 13.0424H9.21284L9.19368 13.0426C9.04436 13.0455 8.89878 12.9957 8.78245 12.9021C8.66611 12.8084 8.58641 12.6768 8.55732 12.5304L7.42253 6.86062Z"
            stroke="#8E0300"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={"top-products__content"}>
        <div className="top-products__column">
          <div className="top-products__image">
            <div
              className="top-products__weight"
              style={{
                color: "#131938",
              }}
            >
              <span className="top-products__number">{weight}</span>
              <span className="top-products__practice">кг.</span>
            </div>

            <img
              className="top-products__img"
              src={imgUrl}
              alt="top-products"
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

          <div className={"top-products__title title"}>
            <span
              style={{
                fontWeight: "400",
                fontSize: "20px",
                color: "#131938",
              }}
            >
              {name}
            </span>

            <div
              className="top-products__description products-card__description--meta d-flex justify-center mb-10"
              style={{ fontWeight: "400", fontSize: "14px", color: "#131938" }}
            >
              <span>{sort}</span>
            </div>
          </div>

          <div className="top-products__info">
            { t('discount')}
          </div>

          <div
            className="top-products__description top-products__description--three d-flex justify-start"
            style={{
              color: "#131938",
            }}
          >
            <span className="top-products__price">
              <span className="top-products__price-name">{t("price")}: </span>
              {price_site(cost)}
            </span>
            <span>{t("hrn")}</span>
          </div>

          <div className="top-products__code">
            {t("code_of_product")}:{`10000${id}`}
          </div>
        </div>
      </div>
    </Link>
  );
}
