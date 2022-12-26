import React from "react";
import SlideTitle from "./slideTitle";
import SlideSubTitle from "./slideSubTitle";
import SlideImage from "./slideImage";
import Button from "../../../elements/button";

import "./../Slider.scss";

export default function Slide({
  data: { url, title, subTitle, button, urlButton, sx },
}) {

  return (
    <div className="slide">
      <div className="slide__content">
        {title && <SlideTitle title={title} />}
        {subTitle && <SlideSubTitle subTitle={subTitle} />}
        {button && <Button sx={sx} link={urlButton} text={button} />}
      </div>

      <SlideImage src={url} alt={title} />

      {/* <div className="slide__content">
        {title && <SlideTitle title={title} />}
        {subTitle && <SlideSubTitle subTitle={subTitle} />}
        {button && <Button sx={sx} link={urlButton} text={button} />}
      </div> */}
    </div>
  );
}
