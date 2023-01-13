import * as React from "react";
import classNames from "classnames";
// import { Context } from "../../../context";
import CardTopProducts from "./cardTopProducts";
import { Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./topProducts.scss";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

let topProductsCard = [
  {
    id: 0,
    name: "Il Rosso in grains",
    desc: "в зернах",
    arabica: "Арабика: 80%",
    robasta: "Робаста: 20%",
    weight: "1",
    weightBox: "12",
    price: "900",
    imgUrl: "topProducts/nero.jpg",
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
    imgUrl: "topProducts/nero.jpg",
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
    imgUrl: "topProducts/nero.jpg",
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
    imgUrl: "topProducts/nero.jpg",
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
    imgUrl: "topProducts/nero.jpg",
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
    imgUrl: "topProducts/nero.jpg",
    infoEmploye:
      "елітна Арабіка з Центральної і Південної Америки і суміш високоякісної відбірної Робусти з найкращих областей Індії ",
    link: "",
  },
];

export default function TopProducts({ textAccent, color, isHeigth }) {
  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  // const { context, setContext } = React.useContext(Context);

  const contentWrapper = React.useRef(null);

  return (
    <section className={"top-products"}>
      <div className="container-big">
        <div className={classNames("top-products__inner", "inner")}>
          <h2
            className={classNames("top-products__desc", "desc")}
            style={{ color: textAccent }}
          >
            <span className="ml-10">Топ продукции</span>
          </h2>

          <div className="line top-products__line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className={"top-products__block pt-50 pb-50"}>
            <Swiper
              modules={[Navigation, Autoplay, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              // autoplay={{ delay: 5000 }}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {topProductsCard &&
                topProductsCard.map((item, index) => (
                  <SwiperSlide>
                    <CardTopProducts
                      key={`card_${item.id}`}
                      {...item}
                      index={index}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
