import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { Home, NotFound, PageContacts } from "./pages";
import { Header, Footer, Popup } from "./components";
import SocialBtn from './components/elements/socialBtn'
import { Context } from "./context";

export default function App({ appState }) {
  const [context, setContext] = useState([]);

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
