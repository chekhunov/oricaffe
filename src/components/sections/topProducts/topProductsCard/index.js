import React, { useContext } from "react";
import cn from "classnames";
import ButtonAdd from "../../../elements/buttonAdd";
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
      type: 'to_cart',
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

            <ButtonAdd click={handleClick} />
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
