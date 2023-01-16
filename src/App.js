import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LayoutDefault from "./components/layouts";
import { Home, NotFound, PageAbout, PageContacts, Drawer } from "./pages";
import { Context } from "./context";

export default function App({ appState }) {
  const [context, setContext] = useState([]);

  const contextData = {
    appState,
    context,
    setContext,
  };

  return (
    <BrowserRouter>
      <Context.Provider value={contextData}>
        <LayoutDefault appState={appState}>
          <Content />
        </LayoutDefault>
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
        <Route path="/about" element={<PageAbout />} />
        <Route path="/contacts" element={<PageContacts />} />
        <Route path="/drawer" element={<Drawer />} />
        <Route path="*" element={<NotFound to="/404" replace />} />
      </Routes>
    </div>
  );
}
