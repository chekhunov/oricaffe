import React from "react";
import {useTranslation} from "react-i18next";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import YouTube from 'react-youtube';

import "swiper/scss";
import "swiper/scss/navigation";

import "./video.scss";

export default function Video() {
  const {t} = useTranslation();

  const video = [
    {
      id: 1,
      title: "Coffee",
      text: "Latest customer",
      urlVideo: 'N_N39X2J-UQ',
      opts: {
        height: '140',
        width: '250',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
      }
    },
    {
      id: 2,
      title: "NE Coffee",
      text: "Latest customer",
      urlVideo: 'KQ6zr6kCPj8'
    },
    {
      id: 3,
      title: "NE Coffee",
      text: "Latest customer",
      urlVideo: 'y8trd3gjJt0'
    },
    {
      id: 4,
      title: "NE Coffee",
      text: "Latest customer",
      urlVideo: 'oqFtayBRdfs'
    },
    {
      id: 5,
      title: "NE Coffee",
      text: "Latest customer",
      urlVideo: 'oqFtayBRdfs'
    }
  ]

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const opts = {
    height: '200',
    width: '370',
    src: 'FmDECqhWLV8',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };


  return (
    <div className="video">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        // autoplay={{ delay: 5000 }}
        navigation
        onSwiper={(swiper) => swiper}
        onSlideChange={() => console.log("slide change")}
      >
        {video &&
          video.map((slide) => (
            <SwiperSlide key={`slide-video_${slide.id}`}>
              <YouTube className={"video__item"} videoId={slide.urlVideo} opts={opts} onReady={onPlayerReady}/>
              <div className="video__title">{slide.title}</div>
              <div className="video__text">{slide.text}</div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
