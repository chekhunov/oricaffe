import React, { useState, useEffect } from "react";

import LayoutDefault from "./layout/Layout";
import Content from "./components/modules/Content";

import StateContext from "./utils/stateContext";
import { CartProvider } from "react-use-cart";
import useWellCurrency from "./hooks/useWellCurrency";

export default function App() {
  const [stateContext, setStateContext] = useState({});

  const { eurData } = useWellCurrency();

  useEffect(() => {
    if (eurData?.rate) {
      localStorage.setItem("eur", eurData.rate);
    }
  }, [eurData]);

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
