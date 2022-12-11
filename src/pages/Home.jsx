import React, { useState, useEffect, useCallback } from "react";
import { Slider } from "../components";

import About from "../components/sections/about";
import AboutProducts from "../components/sections/aboutProducts";
import Socials from "../components/sections/socials";

import "./home.scss";

export default function Home() {
  const colorDefault = "rgba(205, 186, 170, 0.5)";
  const colorAccent = "#8E0303";

  const [setColor] = React.useState(colorDefault);

  const [colorAbout, setColorAbout] = useState(colorDefault);
  const [isHeigthAbout, setIsHeigthAbout] = useState(0);
  const [textAccentAbout, setTextAccentAbout] = useState(colorDefault);

  const [colorAboutProducts, setColorAboutProducts] = useState(colorDefault);
  const [isHeigthAboutProducts, setIsHeigthAboutProducts] = useState(0);
  const [textAccentAboutProducts, setTextAccentAboutProducts] =
    useState(colorDefault);

  const [colorSocials, setColorSocials] = useState(colorDefault);
  const [isHeigthSocials, setIsHeigthSocials] = useState(0);
  const [textAccentSocials, setTextAccentSocials] = useState(colorDefault);

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
  function isActiveText(scrollTop, setTextAccent) {
    const scrollPlace = window.scrollY;
    console.log("isActiveText", scrollPlace);
    if (scrollPlace > scrollTop) {
      setTextAccent(colorAccent);
    }
    if (scrollPlace < scrollTop) {
      setTextAccent(colorDefault);
    }
  }

  const listenScrollEvent = (event) => {
    const scrollPlace = window.scrollY;
    console.log(scrollPlace);

    //default
    if (scrollPlace < 10) {
      setColor(colorDefault);
    }

    //about title
    isActiveText(640, setTextAccentAbout);
    isActiveLine(660, 680, setColorAbout, setIsHeigthAbout);

    if (scrollPlace < 680) {
      setColorAbout(colorDefault);
    }

    //aboutProducts title
    isActiveText(1200, setTextAccentAboutProducts);
    isActiveLine(1250, 1300, setColorAboutProducts, setIsHeigthAboutProducts);

    if (scrollPlace < 1300) {
      setColorAboutProducts(colorDefault);
    }

    //socials title
    isActiveText(2440, setTextAccentSocials);
    isActiveLine(2480, 2500, setColorSocials, setIsHeigthSocials);

    if (scrollPlace < 2500) {
      setColorSocials(colorDefault);
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
      <Slider autoPlay={false} />
      <div className="background">
        <About
          textAccentAbout={textAccentAbout}
          colorAbout={colorAbout}
          isHeigthAbout={isHeigthAbout}
        />

        <AboutProducts
          textAccent={textAccentAboutProducts}
          color={colorAboutProducts}
          isHeigth={isHeigthAboutProducts}
        />

        <Socials
          textAccent={textAccentSocials}
          color={colorSocials}
          isHeigth={isHeigthSocials}
        />

        <img className='home__baner' src="/baners/baner-1.jpg" alt="baner" />
      </div>
    </>
  );
}
