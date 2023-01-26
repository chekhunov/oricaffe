import * as React from "react";

import { Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import TopProductsCard from "./topProductsCard";
import { useGetTopProducts } from "../../../api/topProductList";

import "swiper/scss";
import "swiper/scss/navigation";

import "./topProducts.scss";
export default function TopProducts() {

  const { data } = useGetTopProducts();
  const { top_products } = data || [];

  return (
    <div className={"top-products"}>
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
  );
}
