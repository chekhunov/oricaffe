import React from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/bundle";

import "./video.scss";

export default function Video() {
  const { t } = useTranslation();

  const video = [
    {
      id: 1,
      title: "Coffee",
      text: "Latest customer",
      urlVideo: "N_N39X2J-UQ",
      opts: {
        height: "140",
        width: "250",
        playerVars: {
          autoplay: 1,
        },
      },
    },
    {
      id: 2,
      title: "NE Coffee",
      text: "Latest customer",
      urlVideo: "KQ6zr6kCPj8",
    },
    {
      id: 3,
      title: "NE Coffee",
      text: "Latest customer",
      urlVideo: "y8trd3gjJt0",
    },
    {
      id: 4,
      title: "NE Coffee",
      text: "Latest customer",
      urlVideo: "oqFtayBRdfs",
    },
    {
      id: 5,
      title: "NE Coffee",
      text: "Latest customer",
      urlVideo: "oqFtayBRdfs",
    },
  ];

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const mobile = window.innerWidth;
  
  const opts = {
    height: "200",
    width: mobile < 340 ? "250" : "350",
    src: "FmDECqhWLV8",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="video">
      <Swiper
        container
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => swiper}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 50 },
          480: { slidesPerView: 1, spaceBetween: 0 },
          900: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
          1440: { slidesPerView: 3, spaceBetween: 50 },
        }}
      >
        {video?.map((slide) => (
          <SwiperSlide key={`slide-video_${slide.id}`}>
            <YouTube
              width="100%"
              height="100%"
              className={"video__item"}
              videoId={slide.urlVideo}
              opts={opts}
              onReady={onPlayerReady}
            />
            <div className="video__title">{slide.title}</div>
            <div className="video__text">{slide.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
