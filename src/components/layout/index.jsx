import React, { useContext } from "react";

import SubHeader from "../modules/subHeader";
import Header from "../modules/header";
import Footer from "../modules/footer";
import Poppup from "../elements/poppup";
import ButtonTop from "../elements/buttonTop";
import SocialBtn from "../elements/socialBtn";
import ToCart from "../elements/toCart";
import StateContext from "../../utils/stateContext";

import { useInitialState } from "../../api/initialState";
import { useCart } from "react-use-cart";

import PreLoader from "../elements/preLoader";

export default function Layout({ children }) {
  const { data, isLoading, isFetching } = useInitialState();
  const { top_products, menu_subheader, nav_menu } = data;

  const { stateContext } = useContext(StateContext);
  const { items } = useCart();

  const countCart = items?.length;

  const setProductsToPoppup = top_products.filter(
    (item) => item.code === stateContext?.add_to_cart
  )[0];

  const View = {
    to_cart: {
      component: ToCart,
      props: {
        data: setProductsToPoppup,
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
}
