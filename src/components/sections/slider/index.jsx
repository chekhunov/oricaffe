import React from "react";
import PropTypes from "prop-types";
import Slide from "./slide";

const defaultItems = [
  {
    title: "banners.b-0",
    titleColor: "grey",
    button: "catalog_products",
    urlButton: "contacts",
    sx: {
      width: "200px",
      borderRadius: "5px 25px 5px 25px",
    },
  },
];

const Slider = function ({ width, height, autoPlay, autoPlayTime }) {
  return (
    <>
      <div style={{ width, height }} className="slider">
        <Slide data={defaultItems[0]} />
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
  height: "100%",
};

export default Slider;
