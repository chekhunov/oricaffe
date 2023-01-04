import * as React from "react";
import classNames from "classnames";
// import { Context } from "../../../context";
import CardTopProducts from "./cardTopProducts";
import "./topProductsNew.scss";

let topProductsCard = [
  {
    id: 0,
    name: "il ROSSO",
    desc: "в зернах",
    arabica: "Арабика: 80%",
    robasta: "Робаста: 20%",
    weight: "1",
    weightBox: "12",
    price: "900",
    imgUrl: "topProducts/rosso-250-300.jpg",
    infoEmploye:
      "елітна Арабіка з Центральної і Південної Америки і суміш високоякісної відбірної Робусти з найкращих областей Індії ",
    link: "",
  },
  {
    id: 1,
    name: "il ROSSO",
    desc: "в зернах",
    arabica: "Арабика: 80%",
    robasta: "Робаста: 20%",
    weight: "1",
    weightBox: "12",
    price: "900",
    imgUrl: "topProducts/rosso-250-300.jpg",
    infoEmploye:
      "елітна Арабіка з Центральної і Південної Америки і суміш високоякісної відбірної Робусти з найкращих областей Індії ",
    link: "",
  },
  {
    id: 2,
    name: "il ROSSO",
    desc: "в зернах",
    arabica: "Арабика: 80%",
    robasta: "Робаста: 20%",
    weight: "1",
    weightBox: "12",
    price: "900",
    imgUrl: "topProducts/rosso-250-300.jpg",
    infoEmploye:
      "елітна Арабіка з Центральної і Південної Америки і суміш високоякісної відбірної Робусти з найкращих областей Індії ",
    link: "",
  },
  {
    id: 3,
    name: "il ROSSO",
    desc: "в зернах",
    arabica: "Арабика: 80%",
    robasta: "Робаста: 20%",
    weight: "1",
    weightBox: "12",
    price: "900",
    imgUrl: "topProducts/rosso-250-300.jpg",
    infoEmploye:
      "елітна Арабіка з Центральної і Південної Америки і суміш високоякісної відбірної Робусти з найкращих областей Індії ",
    link: "",
  },
  {
    id: 4,
    name: "il ROSSO",
    desc: "в зернах",
    arabica: "Арабика: 80%",
    robasta: "Робаста: 20%",
    weight: "1",
    weightBox: "12",
    price: "900",
    imgUrl: "topProducts/rosso-250-300.jpg",
    infoEmploye:
      "елітна Арабіка з Центральної і Південної Америки і суміш високоякісної відбірної Робусти з найкращих областей Індії ",
    link: "",
  },
  {
    id: 5,
    name: "il ROSSO",
    desc: "в зернах",
    arabica: "Арабика: 80%",
    robasta: "Робаста: 20%",
    weight: "1",
    weightBox: "12",
    price: "900",
    imgUrl: "topProducts/rosso-250-300.jpg",
    infoEmploye:
      "елітна Арабіка з Центральної і Південної Америки і суміш високоякісної відбірної Робусти з найкращих областей Індії ",
    link: "",
  },
];

const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  console.log(scrollAmount);
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

//добавляем пустой обьтект на четное количество елементов
if (topProductsCard.length % 2 == 0) {
  topProductsCard.push([...Array(1)]);
}

export default function TopProducts({ textAccent, color, isHeigth }) {
  let listLenght = topProductsCard.length;

  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  // const { context, setContext } = React.useContext(Context);

  const [isActiveDot, setIsActiveDot] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false); //open close popup
  const [showEmployeCard, setShowEmployeCard] = React.useState(false);

  const contentWrapper = React.useRef(null);

  const plus = () => {
    isActiveDot < topProductsCard.length && setIsActiveDot(isActiveDot + 1);
  };
  const minus = () => {
    isActiveDot !== 0 && setIsActiveDot(isActiveDot - 1);
  };

  const stepNext = () => {
    sideScroll(contentWrapper.current, 10, 660, 20);
  };

  const stepPrev = () => {
    sideScroll(contentWrapper.current, 10, 660, -20);
  };

  return (
    <section className={"top-products-new"}>
      <div className="container-big">
        <div className={classNames("top-products-new__inner", "inner")}>
          <h2
            className={classNames("top-products-new__desc", "desc")}
            style={{ color: textAccent }}
          >
            <span className="ml-10">Топ продукции</span>
          </h2>

          <div className="line top-products-new__line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className={"top-products-new__block"}>
            <div
              className={"top-products-new__wrapper-items"}
              ref={contentWrapper}
            >
              <div className={"top-products-new__items"}>
                {topProductsCard &&
                  topProductsCard.map((item, index) => (
                    <CardTopProducts
                      key={`card_${item.id}`}
                      {...item}
                      listLenght={listLenght}
                      index={index}
                      isActiveDot={isActiveDot}
                    />
                  ))}
              </div>
            </div>

            <div className="top-products-new__paginations paginations">
              <div className="paginations__dots">
                {topProductsCard &&
                  topProductsCard.map((dot, index) => (
                    <span
                      key={`dot_${dot.id}`}
                      className={classNames(
                        "dot",
                        dot.id === isActiveDot ? "active" : ""
                      )}
                    ></span>
                  ))}
              </div>

              <div className="paginations__left-line">
                <span className="prev">назад</span>
                <div
                  className={classNames(
                    "icon-arrowleft",
                    isActiveDot === 0 && "disabled"
                  )}
                  onClick={(e) => {
                    stepPrev();
                    minus();
                  }}
                  disabled={isActiveDot === 0}
                ></div>
              </div>

              <div className="paginations__right-line">
                <div
                  className={classNames(
                    "icon-arrowright",
                    isActiveDot === listLenght - 2 && "disabled"
                  )}
                  onClick={(e) => {
                    stepNext();
                    plus();
                  }}
                  disabled={isActiveDot === listLenght - 2}
                ></div>

                <span className="next">далее</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
