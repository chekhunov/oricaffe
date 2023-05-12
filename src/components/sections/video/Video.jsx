import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/bundle";

import "./video.scss";

export default function Video() {
  const video = [
    {
      id: 1,
      title: "Orientalcaffe Roasting Process - how we do it!",
      text: "1 minute in the life of a Coffee Roaster",
      urlVideo: "HjY2Bxz-jgE",
      opts: {
        height: "140",
        width: "250",
        playerVars: {
          autoplay: 1,
          origin: "https://example.com",
        },
      },
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
        container="true"
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
