import React, { useState, useEffect } from "react";
import { Slider } from "../../components";

import Category from "../../components/sections/category";
import AboutProducts from "../../components/sections/aboutProducts";
import TopProducts from "../../components/sections/topProducts";
import Package from "../../components/sections/package";
import Delivery from "../../components/sections/delivery";
import HowItWork from "../../components/sections/howItWork";

import Box from "../../components/elements/box";
import Headline from "../../components/modules/headline";

// import BannerMapCaffee from "../../assets/img/home/map-coffe.jpg";
import BannerBottom from "../../assets/img/home/bottom.jpg";

import "./home.scss";
import Container from "../../components/modules/Container";
import Blog from "../../components/sections/blog";
import Reviews from "../../components/sections/reviews/Reviews";
import Video from "../../components/sections/video";
import FormOrder from "../../components/sections/formOrder";
import Questions from "../../components/sections/questions";
import { DataProvider } from "../../utils/FormContext";
import InfoBlock from "../../components/elements/infoBlock";

//раскоментировать в стейтах подкинуть дефолт значения и переименовать в home
export default function Home() {
  // const colorDefault = "rgba(205, 186, 170, 0.5)";
  const colorAccent = "#8E0303";
  // const bgColorDefault = "transparent";
  const bgColor = "#F4BC2F";

  // const [setColor] = React.useState(colorDefault);
  // const [setBgColor] = React.useState(bgColor);

  const [colorAbout, setColorAbout] = useState(colorAccent);
  const [bgColorAbout, setBgColorAbout] = useState(bgColor);
  const [isHeigthAbout, setIsHeigthAbout] = useState(100);
  const [textAccentAbout, setTextAccentAbout] = useState(colorAccent);

  const [bgColorProducts, setBgColorProducts] = useState(bgColor);
  const [textAccentProducts, setTextAccentProducts] = useState(colorAccent);

  const [colorTopProducts, setColorTopProducts] = useState(colorAccent);
  const [bgColorTopProducts, setBgColorTopProducts] = useState(bgColor);
  const [isHeigthTopProducts, setIsHeigthTopProducts] = useState(100);
  const [textAccentTopProducts, setTextAccentTopProducts] =
    useState(colorAccent);

  const [colorPackage, setColorPackage] = useState(colorAccent);
  const [bgColorPackage, setBgColorPackage] = useState(bgColor);
  const [isHeigthPackage, setIsHeigthPackage] = useState(100);
  const [textAccentPackage, setTextAccentPackage] = useState(colorAccent);

  const [colorDelivery, setColorDelivery] = useState(colorAccent);
  const [bgColorDelivery, setBgColorDelivery] = useState(bgColor);
  const [isHeigthDelivery, setIsHeigthDelivery] = useState(100);
  const [textAccentDelivery, setTextAccentDelivery] = useState(colorAccent);

  const [colorBlog, setColorBlog] = useState(colorAccent);
  const [bgColorBlog, setBgColorBlog] = useState(bgColor);
  const [isHeigthBlog, setIsHeigthBlog] = useState(100);
  const [textAccentBlog, setTextAccentBlog] = useState(colorAccent);

  const [bgColorReviews, setBgColorReviews] = useState(bgColor);
  const [textAccentReviews, setTextAccentReviews] = useState(colorAccent);

  const [colorVideo, setColorVideo] = useState(colorAccent);
  const [bgColorVideo, setBgColorVideo] = useState(bgColor);
  const [isHeigthVideo, setIsHeigthVideo] = useState(100);
  const [textAccentVideo, setTextAccentVideo] = useState(colorAccent);

  // calculation number heigth %
  // function procentAccentBlock(num) {
  //   return (Number(window.scrollY) - num) / 4.5;
  // }

  //calculation and set color line
  // function isActiveLine(
  //   scrollTop,
  //   numProcentAccentBlock,
  //   setColor,
  //   setIsHeigth
  // ) {
  //   const scrollPlace = window.scrollY;
  //   if (scrollPlace > scrollTop) {
  //     setColor(colorAccent);
  //     let procentAccentBlockAbout = procentAccentBlock(numProcentAccentBlock);
  //     if (procentAccentBlockAbout < 100) {
  //       setIsHeigth(procentAccentBlockAbout);
  //     }
  //     if (procentAccentBlockAbout > 100) {
  //       setIsHeigth(100);
  //     }
  //   }
  // }

  //calculation and set color text
  // function isActiveText(scrollTop, setTextAccent, setBgAccent) {
  //   const scrollPlace = window.scrollY;
  //   if (scrollPlace > scrollTop) {
  //     setTextAccent(colorAccent);
  //     setBgAccent(bgColor);
  //   }
  //   if (scrollPlace < scrollTop) {
  //     setTextAccent(colorDefault);
  //     setBgAccent(bgColorDefault);
  //   }
  // }

  // const listenScrollEvent = (event) => {
  //   const scrollPlace = window.scrollY;

  //default
  //   if (scrollPlace < 10) {
  //     setColor(colorDefault);
  //     setBgColor(bgColorDefault);
  //   }

  //   isActiveText(940, setTextAccentAbout, setBgColorAbout);
  //   isActiveLine(960, 980, setColorAbout, setIsHeigthAbout);

  //   if (scrollPlace < 980) {
  //     setColorAbout(colorDefault);
  //   }

  //   isActiveText(1600, setTextAccentProducts, setBgColorProducts);

  //   if (scrollPlace < 1600) {
  //     setTextAccentProducts(colorDefault);
  //   }

  //   isActiveText(3400, setTextAccentTopProducts, setBgColorTopProducts);
  //   isActiveLine(3400, 3420, setColorTopProducts, setIsHeigthTopProducts);

  //   if (scrollPlace < 3420) {
  //     setColorTopProducts(colorDefault);
  //   }

  //   isActiveText(5000, setTextAccentPackage, setBgColorPackage);
  //   isActiveLine(5000, 5020, setColorPackage, setIsHeigthPackage);

  //   if (scrollPlace < 5020) {
  //     setColorPackage(colorDefault);
  //   }

  //   isActiveText(5800, setTextAccentDelivery, setBgColorDelivery);
  //   isActiveLine(5800, 5820, setColorDelivery, setIsHeigthDelivery);

  //   if (scrollPlace < 5820) {
  //     setColorDelivery(colorDefault);
  //   }

  //   isActiveText(7700, setTextAccentBlog, setBgColorBlog);
  //   isActiveLine(7700, 7720, setColorBlog, setIsHeigthBlog);

  //   if (scrollPlace < 7720) {
  //     setColorBlog(colorDefault);
  //   }

  //   isActiveText(8600, setTextAccentReviews, setBgColorReviews);

  //   if (scrollPlace < 8600) {
  //     setTextAccentReviews(colorDefault);
  //   }

  //   isActiveText(9200, setTextAccentVideo, setBgColorVideo);
  //   isActiveLine(9200, 9220, setColorVideo, setIsHeigthVideo);

  //   if (scrollPlace < 9220) {
  //     setColorVideo(colorDefault);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent, { passive: true });
  //   return () =>
  //     window.removeEventListener("scroll", listenScrollEvent, {
  //       passive: true,
  //     });
  // }, [listenScrollEvent]);

  return (
    <>
      <Slider />

      <Box name="base-set set-1">
        <Headline
          name="category"
          isHeigth={isHeigthAbout}
          color={colorAbout}
          bgColor={bgColorAbout}
          textAccent={textAccentAbout}
        >
          <Container classN="category">
            <Category />
          </Container>
        </Headline>

        <AboutProducts
          bgColor={bgColorProducts}
          textAccent={textAccentProducts}
        />

        <Headline
          name="top-products"
          isHeigth={isHeigthTopProducts}
          color={colorTopProducts}
          bgColor={bgColorTopProducts}
          textAccent={textAccentTopProducts}
          sx={{ marginBottom: "100px" }}
        >
          <Container>
            <TopProducts />
          </Container>
        </Headline>
      </Box>

      <img
        className="home__banner-clean"
        src="/baners/baner-1.webp"
        alt="banner"
      />

      <Box name="base-set set-2">
        <Headline
          name="package"
          isHeigth={isHeigthPackage}
          color={colorPackage}
          bgColor={bgColorPackage}
          textAccent={textAccentPackage}
        >
          <Container>
            <Package />
          </Container>
        </Headline>

        <Headline
          name="delivery"
          isHeigth={isHeigthDelivery}
          color={colorDelivery}
          bgColor={bgColorDelivery}
          textAccent={textAccentDelivery}
          sx={{ marginBottom: "100px" }}
        >
          <Container>
            <Delivery />
          </Container>
        </Headline>
      </Box>

      <HowItWork />

      <Box name="base-set set-4">
        <Headline
          name="in_our_blog"
          isHeigth={isHeigthBlog}
          color={colorBlog}
          bgColor={bgColorBlog}
          textAccent={textAccentBlog}
        >
          <Container>
            <Blog />
          </Container>
        </Headline>

        <Reviews bgColor={bgColorReviews} textAccent={textAccentReviews} />

        <Headline
          name="video"
          isHeigth={isHeigthVideo}
          color={colorVideo}
          bgColor={bgColorVideo}
          textAccent={textAccentVideo}
        >
          <Container>
            <Video />
          </Container>
        </Headline>

        <Container>
          <DataProvider>
            <FormOrder />
          </DataProvider>
        </Container>

        <InfoBlock />
      </Box>

      <Questions />

      <Box name="set-3">
        <div className="container-max">
          <img className="home__baner" src={BannerBottom} alt="baner" />
        </div>
      </Box>
    </>
  );
}
