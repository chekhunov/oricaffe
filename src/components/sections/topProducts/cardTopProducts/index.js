import React from "react";
import classNames from "classnames";
import { Context } from "../../../../context";
import { Link } from "react-router-dom";
import "./cardTopProducts.scss";

export default function CardEmploye({
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
  isActiveDot,
  listLenght,
  index,
}) {
  const [isOpen, setIsOpen] = React.useState(false); //open close popup
  const scrollPlace = window.scrollY;
  // const [islengObj, setIsLengObj] = React.useState([]);

  const { context, setContext } = React.useContext(Context);

  let last = listLenght - 1;
  const todoComponent = {
    opacity: 0,
  };
  const todoComponentShow = {
    opacity: 1,
  };

  //ищем последнюю карточку по индексу и добавляем опасити 0
  function hideLastItem() {
    return last === index ? todoComponent : todoComponentShow;
  }

  //если количество карточек добавлено исскуственным путем на четное число +1
  function lastItem() {
    if (last % 2 == 1) {
      hideLastItem();
    }
  }

  // function addedOverflowForBody() {
  //   document.body.classList.add("overflowe");
  // }

  return (
    <div
      key={id}
      style={last === index ? todoComponent : todoComponentShow}
      className={classNames(
        "top-products__item",
        id === isActiveDot ? "active" : ""
      )}
    >
      <div className={"top-products__title title"}>
        <span className="uppercase">{name}</span>
        <span className="subtitle">{desc}</span>
      </div>

      <div className={"top-products__content"}>
        <div className="top-products__column">
          <div className="top-products__description top-products__description--meta">
            <span>{arabica},</span>
            <span>{robasta}</span>
          </div>

          <div className="top-products__description align-center">
            <span className="mr-20">упаковка</span>
            <span className="top-products__number">{weight}</span>
            <span className="top-products__practice">кг.</span>
          </div>

          <div className="top-products__description align-center">
            <span className="mr-20">ящик</span>
            <span className="top-products__number">{weightBox}</span>
            <span className="top-products__practice">кг.</span>
          </div>

          <img
            className="top-products__img-mobile"
            src={imgUrl}
            alt="top-products"
          />

          <div className="top-products__description top-products__description--three">
            <span className="mr-20">цена</span>
            <span className="top-products__number">{price}</span>
            <span>грн</span>
          </div>

          <Link to={`/${link}`}>
            <span
              className="button-trans"
              onClick={(e) => {
                setContext({
                  isOpen: true,
                  setIsOpen,
                  name,
                  desc,
                  id,
                  arabica,
                  robasta,
                  link,
                  infoEmploye,
                  weight,
                  weightBox,
                  imgUrl,
                  price,
                  showEmployeCard: true,
                  scrollPlace,
                });
                // addedOverflowForBody();
              }}
            >
              Подробнее
            </span>
          </Link>
        </div>

        <div className="top-products__column top-products__column--popup">
          <img className="top-products__img" src={imgUrl} alt="top-products" />
        </div>
      </div>
      <p className="top-products__text">{infoEmploye}</p>
    </div>
  );
}
