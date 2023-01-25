import * as React from "react";
import cn from "classnames";

import { Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import TopProductsCard from "./topProductsCard";
import { useGetTopProducts } from "../../../api/topProductList";

import "swiper/scss";
import "swiper/scss/navigation";

import "./topProducts.scss";
export default function TopProducts({ textAccent, color, isHeigth }) {
  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  const { data } = useGetTopProducts();
  const { top_products } = data || [];

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
              navigation
              onSwiper={(swiper) => swiper}
              onSlideChange={() => console.log("slide change")}
            >
              {top_products &&
                top_products.map((item, index) => (
                  <SwiperSlide key={item.code} virtualIndex={index}>
                    <TopProductsCard {...item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
