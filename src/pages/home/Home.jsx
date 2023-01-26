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

import BannerMapCaffee from "../../assets/img/home/map-coffe.jpg";
import BannerBottom from "../../assets/img/home/bottom.jpg";

import "./home.scss";

export default function Home() {
  const colorDefault = "rgba(205, 186, 170, 0.5)";
  const colorAccent = "#8E0303";
  const bgColorDefault = "transparent";
  const bgColor = "#F4BC2F";

  const [setColor] = React.useState(colorDefault);
  const [setBgColor] = React.useState(bgColor);

  const [colorAbout, setColorAbout] = useState(colorDefault);
  const [bgColorAbout, setBgColorAbout] = useState(bgColorDefault);
  const [isHeigthAbout, setIsHeigthAbout] = useState(0);
  const [textAccentAbout, setTextAccentAbout] = useState(colorDefault);

  const [colortTopProducts, setColortTopProducts] = useState(colorDefault);
  const [isHeigthtTopProducts, setIsHeigthtTopProducts] = useState(0);
  const [textAccentTopProducts, setTextAccenttTopProducts] =
    useState(colorDefault);

  // calculation number heigth %
  function procentAccentBlock(num) {
    return (Number(window.scrollY) - num) / 4.5;
  }

  //calculation and set color line
  function isActiveLine(
    scrollTop,
    numProcentAccentBlock,
    setColor,
    setIsHeigth
  ) {
    const scrollPlace = window.scrollY;
    if (scrollPlace > scrollTop) {
      setColor(colorAccent);
      let procentAccentBlockAbout = procentAccentBlock(numProcentAccentBlock);
      if (procentAccentBlockAbout < 100) {
        setIsHeigth(procentAccentBlockAbout);
      }
      if (procentAccentBlockAbout > 100) {
        setIsHeigth(100);
      }
    }
  }

  //calculation and set color text
  function isActiveText(scrollTop, setTextAccent, setBgAccent) {
    const scrollPlace = window.scrollY;
    if (scrollPlace > scrollTop) {
      setTextAccent(colorAccent);
      setBgAccent(bgColor);
    }
    if (scrollPlace < scrollTop) {
      setTextAccent(colorDefault);
      setBgAccent(bgColorDefault);
    }
  }

  const listenScrollEvent = (event) => {
    const scrollPlace = window.scrollY;

    //default
    if (scrollPlace < 10) {
      setColor(colorDefault);
      setBgColor(bgColorDefault);
    }

    //about title
    isActiveText(640, setTextAccentAbout, setBgColorAbout);
    isActiveLine(660, 680, setColorAbout, setIsHeigthAbout);

    if (scrollPlace < 680) {
      setColorAbout(colorDefault);
    }

    //tTopProducts title
    isActiveText(2440, setTextAccenttTopProducts);
    isActiveLine(2480, 2500, setColortTopProducts, setIsHeigthtTopProducts);

    if (scrollPlace < 2500) {
      setColortTopProducts(colorDefault);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent, { passive: true });
    return () =>
      window.removeEventListener("scroll", listenScrollEvent, {
        passive: true,
      });
  }, [listenScrollEvent]);

  return (
    <>
      <Slider />

      <Box name="base-set set-1">
        <Headline
          name="category"
          bgColor={bgColorAbout}
          textAccent={textAccentAbout}
          color={colorAbout}
          isHeigth={isHeigthAbout}
        >
          <Category />
        </Headline>

        <AboutProducts />

        <Headline
          name="top-products"
          bgColor={bgColorAbout}
          textAccent={textAccentTopProducts}
          color={colortTopProducts}
          isHeigth={isHeigthtTopProducts}
        >
          <TopProducts />
        </Headline>
      </Box>

      <img className="home__banner" src="/baners/baner-1.jpg" alt="banner" />

      <Box name="base-set set-2">
        <Package
          textAccent={textAccentTopProducts}
          color={colortTopProducts}
          isHeigth={isHeigthtTopProducts}
        />

        <Delivery
          textAccent={textAccentTopProducts}
          color={colortTopProducts}
          isHeigth={isHeigthtTopProducts}
        />
      </Box>

      <HowItWork />

      <div className="container-max">
        <img className="home__banner" src={BannerMapCaffee} alt="banner" />
      </div>

      <Box name="set-3">
        <div className="container-max">
          <img className="home__baner" src={BannerBottom} alt="baner" />
        </div>
      </Box>
    </>
  );
}
