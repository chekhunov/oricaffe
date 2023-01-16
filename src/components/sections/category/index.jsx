import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../../../context";

import "swiper/scss";
import "swiper/scss/navigation";

import "./category.scss";

export default function Category({ textAccent, color, isHeigth, bgColor }) {
  const { t } = useTranslation();
  const { appState } = React.useContext(Context);

  const { category_products } = appState;
  console.log(category_products);

  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };
  return (
    <section className="category">
      <div className="container-big">
        <div className={classNames("category__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2
            style={{ color: textAccent, backgroundColor: bgColor }}
            className={classNames("category__desc d-flex", "desc")}
          >
            {t("category_coffee")}
            <a
              className="oriental-link ml-10"
              href="https://bhousecoffee.com/"
              target="_blank"
              rel="noreferrer"
            >
              Oriental caffe
            </a>
          </h2>

          <div className="line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className="container">
            <div className="category__content-block">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                // autoplay={{ delay: 5000 }}
                navigation
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {category_products &&
                  category_products.map((slide) => (
                    <SwiperSlide>
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
          </div>
        </div>
      </div>
    </section>
  );
}
