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
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 50 },
          768: { slidesPerView: 2, spaceBetween: 50 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 20 },
          1440: { slidesPerView: 4, spaceBetween: 50 },
        }}
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
