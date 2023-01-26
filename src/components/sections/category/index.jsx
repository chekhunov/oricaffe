import React from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetNavMenu } from "../../../api/navMenu";

import "swiper/scss";
import "swiper/scss/navigation";

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
        // autoplay={{ delay: 5000 }}
        navigation
        onSwiper={(swiper) => swiper}
        onSlideChange={() => console.log("slide change")}
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
