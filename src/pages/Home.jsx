import React, { useState, useEffect, useCallback } from "react";
import { About, Slider } from "../components";

import AboutProducts from "../components/sections/aboutProducts";

import "./home.scss";

export default function Home() {
  const colorDefault = "rgba(205, 186, 170, 0.5)";
  const colorAccent = "#1EAEFF";

  const [setColor] = React.useState(colorDefault);

  const [colorAbout, setColorAbout] = useState(colorDefault);
  const [isHeigthAbout, setIsHeigthAbout] = useState(0);
  const [textAccentAbout, setTextAccentAbout] = useState(colorDefault);

  // // calculation number heigth %
  // function procentAccentBlock(num) {
  //   return (Number(window.scrollY) - num) / 4.5;
  // }

  // //calculation and set color line
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

  // //calculation and set color text
  // function isActiveText(scrollTop, setTextAccent) {
  //   const scrollPlace = window.scrollY;
  //   console.log("isActiveText", scrollPlace);
  //   if (scrollPlace > scrollTop) {
  //     setTextAccent(colorAccent);
  //   }
  //   if (scrollPlace < scrollTop) {
  //     setTextAccent(colorDefault);
  //   }
  // }

  // const listenScrollEvent = (event) => {
  //   const scrollPlace = window.scrollY;

  //   //default
  //   if (scrollPlace < 10) {
  //     setColor(colorDefault);
  //   }

  //   //about title
  //   isActiveText(540, setTextAccentAbout);
  //   //about line
  //   isActiveLine(560, 580, setColorAbout, setIsHeigthAbout);

  //   if (scrollPlace < 500) {
  //     setColorAbout(colorDefault);
  //   }

  //   // //treatment title
  //   // isActiveText(1000, setTextAccentTreatment);
  //   // //treatment line
  //   // isActiveLine(1020, 1100, setColorTreatment, setIsHeigthTreatment);

  //   // if (scrollPlace < 1020) {
  //   //   setColorTreatment(colorDefault);
  //   // }

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
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent, { passive: true });
  //   return () =>
  //     window.removeEventListener("scroll", listenScrollEvent, {
  //       passive: true,
  //     });
  // }, [listenScrollEvent]);
 
  // useEffect(() => {
  //   console.log(window.pageYOffset);
  //   function watchScroll() {
  //     window.addEventListener("scroll", logit);
  //   }
  //   watchScroll();
  //   // Remove listener (like componentWillUnmount)
  //   return () => {
  //     window.removeEventListener("scroll", logit);
  //   };
  // }, []);

  return (
    <>
      <Slider autoPlay={false} />
      <div className="background">
        <About
          textAccentAbout={textAccentAbout}
          colorAbout={colorAbout}
          isHeigthAbout={isHeigthAbout}
        />
        <About
        // textAccentAbout={textAccentAbout}
        // colorAbout={colorAbout}
        // isHeigthAbout={isHeigthAbout}
        />
        <About
        // textAccentAbout={textAccentAbout}
        // colorAbout={colorAbout}
        // isHeigthAbout={isHeigthAbout}
        />
        <AboutProducts />
      </div>
    </>
  );
}
