import React from "react";
import cn from 'classnames'

import "../../Slider.scss";

export default function SlideImage({ name, src, alt }) {
  return <img src={src} alt={alt} className={cn("slide-image", name)} />;
}
