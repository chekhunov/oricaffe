import React, { useState } from "react";
import { Slider } from "../../components";

import Category from "../../components/sections/category";
import AboutProducts from "../../components/sections/aboutProducts";
import TopProducts from "../../components/sections/topProducts";
import Package from "../../components/sections/package";
import Delivery from "../../components/sections/delivery";
import HowItWork from "../../components/sections/howItWork";

import Box from "../../components/elements/box";
import Headline from "../../components/modules/headline";

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

const HomePage = () => {
  const colorAccent = "#8E0303";
  const bgColor = "#f2f2f2";

  const [colorAbout] = useState(colorAccent);
  const [bgColorAbout] = useState(bgColor);
  const [isHeigthAbout] = useState(100);
  const [textAccentAbout] = useState(colorAccent);

  const [bgColorProducts] = useState(bgColor);
  const [textAccentProducts] = useState(colorAccent);

  const [colorTopProducts] = useState(colorAccent);
  const [bgColorTopProducts] = useState(bgColor);
  const [isHeigthTopProducts] = useState(100);
  const [textAccentTopProducts] = useState(colorAccent);

  const [colorPackage] = useState(colorAccent);
  const [bgColorPackage] = useState(bgColor);
  const [isHeigthPackage] = useState(100);
  const [textAccentPackage] = useState(colorAccent);

  const [colorDelivery] = useState(colorAccent);
  const [bgColorDelivery] = useState(bgColor);
  const [isHeigthDelivery] = useState(100);
  const [textAccentDelivery] = useState(colorAccent);

  const [colorBlog] = useState(colorAccent);
  const [bgColorBlog] = useState(bgColor);
  const [isHeigthBlog] = useState(100);
  const [textAccentBlog] = useState(colorAccent);

  const [bgColorReviews] = useState(bgColor);
  const [textAccentReviews] = useState(colorAccent);

  const [colorVideo] = useState(colorAccent);
  const [bgColorVideo] = useState(bgColor);
  const [isHeigthVideo] = useState(100);
  const [textAccentVideo] = useState(colorAccent);

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
          name="topproducts"
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
};

export default HomePage;
