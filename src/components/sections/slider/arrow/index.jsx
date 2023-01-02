import React, { useContext } from "react";
import { SliderContext } from "..";

import "./Arrow.scss";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows">
      <div className="arrow ml-50" onClick={() => changeSlide(-1)}>
        <div className="left" />
      </div>

      <div className="arrow mr-50" onClick={() => changeSlide(1)}>
        <div className="right" />
      </div>
    </div>
  );
}
