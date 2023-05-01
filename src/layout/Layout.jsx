import React, { useContext } from "react";

import SubHeader from "../components/modules/subHeader";
import Header from "../components/modules/header";
import Footer from "../components/modules/footer";
import Poppup from "../components/elements/poppup";
import ButtonTop from "../components/elements/buttonTop";
import SocialBtn from "../components/elements/socialBtn";
import ToCart from "../components/elements/toCart";
import StateContext from "../utils/stateContext";
import useGetPrice from "../hooks/useGetPrice";

import { useInitialState } from "../api/initialState";
import { useCart } from "react-use-cart";

import PreLoader from "../components/elements/preLoader";

const Layout = ({ children }) => {
  const { data, isLoading, isFetching } = useInitialState();
  const { products, menu_subheader, nav_menu } = data;
  const { items } = useCart();
  const { stateContext } = useContext(StateContext);

  const countCart = items?.length;

  const setProductsToPoppup = products.find(
    (item) => item.id === stateContext.add_to_cart
  );

  const { price_site } = useGetPrice();

  const newData = {
    price: price_site(setProductsToPoppup?.cost),
    ...setProductsToPoppup,
  };

  const View = {
    to_cart: {
      component: ToCart,
      props: {
        data: newData,
        isActiveCardPopup: true,
      },
    },
  }[stateContext?.type];

  const ViewComponent = View?.component;
  const view_props = View?.props;

  return (
    <>
      <SubHeader menuSubheader={menu_subheader} />
      <Header
        navMenu={nav_menu}
        menuSubheader={menu_subheader}
        countCart={countCart}
      />
      <ButtonTop />
      <SocialBtn />
      <main>{isLoading || isFetching ? <PreLoader /> : children}</main>
      <Footer />

      {ViewComponent ? (
        <Poppup>
          <ViewComponent viewProps={view_props} />
        </Poppup>
      ) : null}
    </>
  );
};

export default Layout;
