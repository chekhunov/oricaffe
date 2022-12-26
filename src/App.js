import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { Home, NotFound, PageContacts } from "./pages";
import { Header, Footer, Popup, Player } from "./components";
import SocialBtn from './components/elements/socialBtn'
import { Context } from "./context";

export default function App({ appState }) {
  const [context, setContext] = useState([]);

  // const [scrollY, setScrollY] = useState(0);

  // function logit() {
  //   console.log("logit", window.pageYOffset);
  //   setScrollY(window.pageYOffset);
  // }

  // useEffect(() => console.log("scrollY effect", scrollY), [scrollY]);

  // useEffect(() => {
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
    <BrowserRouter>
      <Context.Provider value={{ appState, context, setContext }}>
        <Header appState={appState} />

        <SocialBtn />

        <Content />
        {/* <Footer /> */}
        <Popup />
      </Context.Provider>
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<PageContacts />} />
        <Route path="*" element={<NotFound to="/404" replace />} />
      </Routes>
    </div>
  );
}
