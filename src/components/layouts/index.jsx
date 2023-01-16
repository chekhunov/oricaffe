import React from "react";

import SubHeader from "../modules/subHeader";
import Header from "../modules/header";
import Footer from "../modules/footer";
import Poppup from "../elements/poppup";
import SocialBtn from "../elements/socialBtn";
import ToCart from "../elements/toCart";
import { Context } from "../../context";

export default function Layout({ children, appState }) {
  const { context } = React.useContext(Context);
  const { top_products_card } = appState;

  const { add_to_cart } = context;
  return (
    <>
      <SubHeader appState={appState} />
      <Header appState={appState} />
      <SocialBtn />
      <main>{children}</main>
      <Footer />
      <Poppup>
        {add_to_cart &&
          top_products_card.map(
            (el) => el.id === add_to_cart ? <ToCart {...el} /> : ''
          )}
      </Poppup>
    </>
  );
}
