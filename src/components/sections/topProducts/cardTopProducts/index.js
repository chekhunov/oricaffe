import React from "react";
import classNames from "classnames";
import { Context } from "../../../../context";
import "./cardTopProducts.scss";

export default function CardTopProducts({
  name,
  desc,
  id,
  arabica,
  link,
  infoEmploye,
  robasta,
  weight,
  weightBox,
  imgUrl,
  price,
}) {
  // const [islengObj, setIsLengObj] = React.useState([]);

  const { context, setContext } = React.useContext(Context);

  return (
    <div key={id} className={classNames("top-products__item")}>
      <a href={link}>
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
            </div>

            <div
              className="top-products__description top-products__description--meta d-flex justify-center mb-30"
              style={{ fontWeight: "400", fontSize: "14px", color: "#131938" }}
            >
              <span>{arabica},</span>
              <span>{robasta}</span>
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
        <p className="top-products__text">{infoEmploye}</p>
      </a>
    </div>
  );
}
