import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";

import Arrows from "./arrow";
// import Dots from "./dots";

import SlidesList from "./sliderList";

export const SliderContext = createContext();

const defaultItems = [
  // {
  //   url: "/baners/1.jpg",
  //   title:
  //     "Благодаря нам у Вас больше времени для того, чтобы заниматься любимым делом — приготовлением кофе!",
  //   subTitle:
  //     "Мы здесь для того, чтобы компания Orientalcaffe избавила Вас от головной боли, предоставив вам уникальную возможность заниматься любимым делом – наслаждаться вкусом свеже сваренного кофе!",
  //   button: "Сделать заказ",
  //   urlButton: "/contacts",
  //   sx: {
  //     width: "200px",
  //   },
  // },
  {
    url: "/baners/b-0.jpg",
    title: "banners.b-0",
    titleColor: "grey",
    button: "catalog_products",
    urlButton: "/contacts",
    sx: {
      width: "200px",
      borderRadius: "5px 25px 5px 25px",
    },
  },
];

const Slider = function ({ width, height, autoPlay, autoPlayTime }) {
  const [items] = useState(defaultItems);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

  return (
    <>
      <div
        style={{ width, height }}
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <SliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: items.length,
            slideNumber: slide,
            items,
          }}
        >
          <Arrows />
          <SlidesList />
          {/* <Dots /> */}
        </SliderContext.Provider>
      </div>
      <div className="decor-lamore">l’amore per l’aroma</div>
    </>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

Slider.defaultProps = {
  autoPlay: true,
  autoPlayTime: 10000,
  width: "100%",
  height: "920px",
};

export default Slider;
