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

  const [bgColorProducts, setBgColorProducts] = useState(bgColorDefault);
  const [textAccentProducts, setTextAccentProducts] = useState(colorDefault);

  const [colortTopProducts, setColortTopProducts] = useState(colorDefault);
  const [bgColorTopProducts, setBgColorTopProducts] = useState(bgColorDefault);
  const [isHeigthtTopProducts, setIsHeigthtTopProducts] = useState(0);
  const [textAccentTopProducts, setTextAccentTopProducts] =
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

    isActiveText(940, setTextAccentAbout, setBgColorAbout);
    isActiveLine(960, 980, setColorAbout, setIsHeigthAbout);

    if (scrollPlace < 980) {
      setColorAbout(colorDefault);
    }

    isActiveText(1600, setTextAccentProducts, setBgColorProducts);

    if (scrollPlace < 1600) {
      setBgColorProducts(colorDefault);
    }

    isActiveText(3400, setTextAccentTopProducts, setBgColorTopProducts);
    isActiveLine(3400, 3420, setColortTopProducts, setIsHeigthtTopProducts);

    if (scrollPlace < 3420) {
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
          isHeigth={isHeigthtTopProducts}
          color={colortTopProducts}
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
        src="/baners/baner-1.jpg"
        alt="banner"
      />

      <Box name="base-set set-2">
        <Headline
          name="package"
          isHeigth={{}}
          color={{}}
          bgColor={bgColorAbout}
          textAccent={textAccentTopProducts}
        >
          <Container>
            <Package />
          </Container>
        </Headline>

        <Headline
          name="delivery"
          isHeigth={{}}
          color={{}}
          bgColor={bgColorAbout}
          textAccent={textAccentTopProducts}
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
          isHeigth={{}}
          color={{}}
          bgColor={bgColorAbout}
          textAccent={textAccentTopProducts}
        >
          <Container>
            <Blog />
          </Container>
        </Headline>

        <Reviews />

        <Headline
          name="in_our_blog"
          isHeigth={{}}
          color={{}}
          bgColor={bgColorAbout}
          textAccent={textAccentTopProducts}
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
