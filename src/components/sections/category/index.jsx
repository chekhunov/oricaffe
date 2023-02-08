import React from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetNavMenu } from "../../../api/navMenu";

import "./swiper.scss";
import "./category.scss";

export default function Category() {
  const { t } = useTranslation();

  const { data } = useGetNavMenu();
  const { category } = data || [];

  return (
    <div className="category">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        onSwiper={(swiper) => swiper}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 3, spaceBetween: 50 },
          768: { slidesPerView: 4, spaceBetween: 50 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 20 },
          1440: { slidesPerView: 4, spaceBetween: 50 },
        }}
      >
        {category &&
          category.map((slide) => (
            <SwiperSlide key={`slide-category_${slide.id}`}>
              <a
                style={{ backgroundImage: `url(${slide.img})` }}
                href={slide.link}
                className="category__link"
              >
                <div className="category__title">{t(slide.value)}</div>
              </a>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
