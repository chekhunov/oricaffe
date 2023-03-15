import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { pageRoutes } from "./utils/routes";
import LayoutDefault from "./components/layout";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import CartPage from "./pages/cart";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import DetailsProductCard from "./pages/catalog";

import StateContext from "./utils/stateContext";
import { CartProvider } from "react-use-cart";

export default function App() {
  const [stateContext, setStateContext] = useState({});
  // const history = useHistory();
  // const { error } = useGetProfile();

  // useEffect(() => {
  //   if (error) {
  //     history.replace(pageRoutes.auth);
  //   }
  // }, [error]);

  return (
    <StateContext.Provider value={{ stateContext, setStateContext }}>
      <CartProvider>
        <LayoutDefault>
          <Content />
        </LayoutDefault>
      </CartProvider>
    </StateContext.Provider>
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
        <Route path={pageRoutes.about} element={<AboutPage />} />
        <Route path={pageRoutes.contact} element={<ContactPage />} />
        <Route path={pageRoutes.cart} element={<CartPage />} />
        <Route path={pageRoutes.blog} element={<BlogPage />} />
        <Route
          path={pageRoutes.catalog + "/:id"}
          element={<DetailsProductCard />}
        />
        <Route
          path={pageRoutes.all}
          element={<NotFound to={pageRoutes.not_found} replace />}
        />
      </Routes>
    </div>
  );
}
