import React from "react";

import "../../Slider.scss";

export default function SlideImage({ src, alt }) {
  return <img src={src} alt={alt} className="slide-image" />;
  // return (
  //   <div
  //     className="slide-image"
  //     style={{
  //       backgroundImage: `url(${src})`,
  //       backgroundRepeat: "no-repeat",
  //       backgroundSize: "cover",
  //       height: "900px",
  //       // backgroundImage: `linear-gradient(transparent, rgb(41, 57, 57) 99%, rgb(41, 57, 57) 30%),url(${src})`,
  //     }}
  //   ></div>
  // );
}
