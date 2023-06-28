import { useState, useEffect } from "react";
import {
  SHOP_ROUTE,
  ALL_ROUTE,
  ERROR_ROUTE,
  PRODUCTIONS_DETAILS_ROUTE,
} from "../../types/const";
import { Routes, Route, useLocation } from "react-router-dom";

import { authRoutes, publicRoutes } from "../../utils/routes";

import NotFound from "../../pages/notFound";
import { CatalogPage, ProductCardDetails } from "../../pages/catalog";
import ProductionsDetailsPage from '../../pages/productionsDetails/ProductionsDetails';

const Content = () => {
  const isAuth = false;
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
        {isAuth &&
          authRoutes?.map(({ id, path, Component }, index) => (
            <Route key={id} path={path} element={Component()} />
          ))}
        {publicRoutes?.map(({ id, path, Component }, index) => (
          <Route key={id} path={path} element={Component()} />
        ))}
        <Route path={PRODUCTIONS_DETAILS_ROUTE + "/:product"} element={<ProductionsDetailsPage />} />
        <Route path={SHOP_ROUTE + "/:category"} element={<CatalogPage />} />
        <Route
          path={SHOP_ROUTE + "/:category/:id"}
          element={<ProductCardDetails />}
        />
        <Route
          path={ALL_ROUTE}
          element={<NotFound to={ERROR_ROUTE} replace="true" />}
        />
      </Routes>
    </div>
  );
};

export default Content;
