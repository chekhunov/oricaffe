import * as React from "react";
import cn from "classnames";
import { Context } from "../../../context";
import { Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CardTopProducts from "./cardTopProducts";
import Poppup from "../../elements/poppup";

import "swiper/scss";
import "swiper/scss/navigation";

import "./topProducts.scss";
export default function TopProducts({ textAccent, color, isHeigth }) {
  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  const { appState, context } = React.useContext(Context);

  const { isActiveCardPopup } = context;

  const { top_products_card } = appState || [];

  return (
    <section className={"top-products"}>
      <div className="container-big">
        <div className={cn("top-products__inner", "inner")}>
          <h2
            className={cn("top-products__desc", "desc")}
            style={{ color: textAccent }}
          >
            <span className="ml-10">Топ продукции</span>
          </h2>

          <div className="line top-products__line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className={"top-products__block pt-50"}>
            <Swiper
              modules={[Navigation, Autoplay, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              // autoplay={{ delay: 5000 }}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {top_products_card &&
                top_products_card.map((item, index) => (
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
