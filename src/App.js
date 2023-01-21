import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { pageRoutes } from "./utils/routes";
import LayoutDefault from "./components/layout";
import { Home, NotFound, PageAbout, PageContacts, Drawer } from "./pages";

export default function App() {
  // const history = useHistory();
  // const { error } = useGetProfile();

  // useEffect(() => {
  //   if (error) {
  //     history.replace(pageRoutes.auth);
  //   }
  // }, [error]);

  return (
    <LayoutDefault>
      <Content />
    </LayoutDefault>
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
        <Route path={pageRoutes.main} element={<Home />} />
        <Route path={pageRoutes.about} element={<PageAbout />} />
        <Route path={pageRoutes.contacts} element={<PageContacts />} />
        <Route path={pageRoutes.cart} element={<Drawer />} />
        <Route
          path={pageRoutes.all}
          element={<NotFound to={pageRoutes.not_found} replace />}
        />
      </Routes>
    </div>
  );
}
