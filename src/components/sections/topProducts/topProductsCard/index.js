import React, { useContext } from "react";
import cn from "classnames";
import StateContext from "../../../../utils/stateContext";

import "./topProductsCard.scss";
export default function TopProductsCard({
  id,
  code,
  name,
  desc,
  sort,
  weight,
  imgUrl,
  price,
}) {
  const { setStateContext } = useContext(StateContext);

  const handleClick = () => {
    console.log(id, "click");
    setStateContext({
      isActiveCardPopup: true,
      type: "to_cart",
      add_to_cart: code,
    });
    document.body.classList.add("overflowe");
  };

  return (
    <div className={cn("top-products__item")}>
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

            <div className="top-products__cart" onClick={handleClick}>
              <svg
                width="36"
                height="34"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.6246 3.93925C23.3027 3.54091 22.8242 3.31248 22.3119 3.31248H4.0189L3.85554 2.14174C3.73985 1.31272 3.02136 0.6875 2.18422 0.6875H0.749996C0.335811 0.6875 0 1.02331 0 1.4375C0 1.85168 0.335811 2.18749 0.749996 2.18749H2.18422C2.27722 2.18749 2.3571 2.25696 2.36989 2.34907L4.39436 16.8582C4.51005 17.6872 5.22855 18.3124 6.06568 18.3124H6.87891C6.79566 18.5471 6.74991 18.7995 6.74991 19.0624C6.74991 20.303 7.75927 21.3124 8.9999 21.3124C10.2405 21.3124 11.2499 20.303 11.2499 19.0624C11.2499 18.7995 11.2041 18.5471 11.1209 18.3124H15.1289C15.0456 18.5471 14.9999 18.7995 14.9999 19.0624C14.9999 20.303 16.0092 21.3124 17.2499 21.3124C18.4905 21.3124 19.4998 20.303 19.4998 19.0624C19.4998 18.7995 19.4541 18.5471 19.3708 18.3124H20.9999C21.4141 18.3124 21.7499 17.9766 21.7499 17.5624C21.7499 17.1482 21.4141 16.8124 20.9999 16.8124H6.06573C5.97273 16.8124 5.89286 16.7429 5.88006 16.6508L5.69331 15.3124H20.4636C21.2538 15.3124 21.9478 14.7516 22.1139 13.9785L23.9621 5.35365C24.0695 4.85298 23.9465 4.33745 23.6246 3.93925ZM9.74994 19.0624C9.74994 19.4759 9.41348 19.8124 8.99995 19.8124C8.58642 19.8124 8.24995 19.4759 8.24995 19.0624C8.24995 18.6489 8.58642 18.3124 8.99995 18.3124C9.41348 18.3124 9.74994 18.6488 9.74994 19.0624ZM17.9999 19.0624C17.9999 19.4759 17.6634 19.8124 17.2499 19.8124C16.8364 19.8124 16.4999 19.4759 16.4999 19.0624C16.4999 18.6489 16.8364 18.3124 17.2499 18.3124C17.6634 18.3124 17.9999 18.6488 17.9999 19.0624ZM22.4954 5.03921L20.6472 13.6638C20.6288 13.7499 20.5515 13.8124 20.4636 13.8124H5.48397L4.22819 4.81243H22.3119C22.3861 4.81243 22.4323 4.8503 22.458 4.88209C22.4836 4.91382 22.5109 4.96684 22.4954 5.03921Z"
                  fill="#8E0303"
                />
              </svg>
            </div>
          </div>

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

            <span
              style={{ fontWeight: "400", fontSize: "14px", color: "#131938" }}
            >
              {desc}
            </span>
          </div>

          <div
            className="top-products__description top-products__description--meta d-flex justify-center mb-40"
            style={{ fontWeight: "400", fontSize: "14px", color: "#131938" }}
          >
            <span>{sort}</span>
          </div>

          <div
            className="top-products__description top-products__description--three d-flex justify-center ml-20"
            style={{
              color: "#131938",
            }}
          >
            <span className="top-products__price">{price}</span>
            <span>грн</span>
          </div>
        </div>
      </div>
    </div>
  );
}
