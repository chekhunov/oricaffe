import React from "react";
import SlideTitle from "./slideTitle";
import SlideSubTitle from "./slideSubTitle";
import SlideImage from "./slideImage";
import Button from "../../../elements/button";
import { useTranslation } from "react-i18next";
import orientalUrl from "../../../../assets/video/preoriental.webm";
import bgMobileUrl from "../../../../assets/img/home/mobileMainBg.webp";

import "./../Slider.scss";

export default function Slide({
  data: { url, title, subTitle, button, urlButton, sx, titleColor },
}) {
  const { t } = useTranslation();
  return (
    <div className="slide">
      <div className="slide__content">
        {title && <SlideTitle title={title} titleColor={titleColor} />}
        {subTitle && <SlideSubTitle subTitle={subTitle} />}
        {button && <Button sx={sx} link={urlButton} text={t(button)} />}
      </div>

      <video
        className="slide__desktop"
        width="100%"
        height="auto"
        autoPlay="autoplay"
        loop
        muted
        playsInline
      >
        <source src={orientalUrl} type="video/webm" />
      </video>

      <SlideImage name="slide__mobile" src={bgMobileUrl} alt={title} />
    </div>
  );
}
