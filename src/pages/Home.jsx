import React, { useState, useEffect } from "react";
import { Slider } from "../components";

import Category from "../components/sections/category";
import AboutProducts from "../components/sections/aboutProducts";
import TopProducts from "../components/sections/topProducts";
import Package from "../components/sections/package";

import BannerMapCaffee from "../assets/img/home/map-coffe.jpg";
import BannerBottom from "../assets/img/home/bottom.jpg";

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

  const [colorAboutProducts, setColorAboutProducts] = useState(colorDefault);
  const [colorBgAboutProducts, setColorBgAboutProducts] = useState(bgColor);
  const [isHeigthAboutProducts, setIsHeigthAboutProducts] = useState(0);
  const [textAccentAboutProducts, setTextAccentAboutProducts] =
    useState(colorDefault);

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
    // console.log(scrollPlace);

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

    //aboutProducts title
    isActiveText(1200, setTextAccentAboutProducts, setColorBgAboutProducts);
    isActiveLine(1250, 1300, setColorAboutProducts, setIsHeigthAboutProducts);

    if (scrollPlace < 1300) {
      setColorAboutProducts(colorDefault);
    }

    //tTopProducts title
    isActiveText(2440, setTextAccenttTopProducts);
    isActiveLine(2480, 2500, setColortTopProducts, setIsHeigthtTopProducts);

    if (scrollPlace < 2500) {
      setColortTopProducts(colorDefault);
    }

    //   // //participation title
    //   // isActiveText(1570, setTextAccentParticipation);
    //   // //participation line
    //   // isActiveLine(1590, 1670, setColorParticipation, setIsHeigthParticipation);

    //   // if (scrollPlace < 1590) {
    //   //   setColorParticipation(colorDefault);
    //   // }
    //   // //employers title
    //   // isActiveText(2150, setTextAccentEmployes);

    //   // //News line
    //   // isActiveLine(2650, 2480, setColorNews, setIsHeigthNews);

    //   // if (scrollPlace < 2650) {
    //   //   setColorNews(colorDefault);
    //   // }
    //   // //News title
    //   // isActiveText(2950, setTextAccentNews);

    //   // //Consultation title
    //   // isActiveText(3400, setTextAccentConsultation);
    //   // //Consultation line
    //   // isActiveLine(3400, 3400, setColorConsultation, setIsHeigthConsultation);

    //   // if (scrollPlace < 3420) {
    //   //   setColorConsultation(colorDefault);
    //   // }

    //   // //Contacts line
    //   // isActiveLine(3900, 3780, setColorContacts, setIsHeigthContacts);

    //   // if (scrollPlace < 3900) {
    //   //   setColorContacts(colorDefault);
    //   // }

    //   // //Consultation title
    //   // isActiveText(4200, setTextAccentContacts);
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

      <div className="background pb-50">
        <Category
          textAccent={textAccentAbout}
          bgColor={bgColorAbout}
          color={colorAbout}
          isHeigth={isHeigthAbout}
        />

        <AboutProducts
          textAccent={textAccentAboutProducts}
          color={colorAboutProducts}
          bgColor={colorBgAboutProducts}
          isHeigth={isHeigthAboutProducts}
        />

        <TopProducts
          textAccent={textAccentTopProducts}
          color={colortTopProducts}
          isHeigth={isHeigthtTopProducts}
        />
      </div>

      <img
        className="home__baner mb-50"
        src="/baners/baner-1.jpg"
        alt="baner"
      />

      <div className="background-two pb-50">
        <Package
          textAccent={textAccentTopProducts}
          color={colortTopProducts}
          isHeigth={isHeigthtTopProducts}
        />
      </div>

      <div className="background-bottom">
        <img className="home__baner" src={BannerMapCaffee} alt="baner" />
      </div>

      <div className="container-max">
      <div className="background-bottom">
        <img
          height={"1130"}
          className="home__baner"
          src={BannerBottom}
          alt="baner"
        />
      </div>
      </div>
    </>
  );
}
