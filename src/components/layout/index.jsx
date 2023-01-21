import React from "react";

import SubHeader from "../modules/subHeader";
import Header from "../modules/header";
import Footer from "../modules/footer";
import Poppup from "../elements/poppup";
import ButtonTop from "../elements/buttonTop";
import SocialBtn from "../elements/socialBtn";
import ToCart from "../elements/toCart";

import { useInitialState } from "../../api/initialState";
import ViewPoppupContext from "../../utils/ViewPoppupContext";
// import { Context } from "../../context";

import { useGetCart } from "../../api/cart.api";
import PreLoader from "../elements/preLoader";

export default function Layout({ children }) {
  const { data, isLoading, isFetching } = useInitialState();
  const { top_products, menu_subheader, nav_menu } = data;

  const { data: cart } = useGetCart();

  // const [showBtnTop, setShowBtnTop] = useState(false)

  // const { context } = React.useContext(Context);
  // const { add_to_cart } = context;

  const add_to_cart = 0;

  //get modal popupp component with props
  const View = {
    to_cart: {
      component: ToCart,
      props: { data: top_products[add_to_cart] },
    },
  }["to_cart"];

  const ViewComponent = View?.component;
  const viewProps = View?.props;

  return (
    <>
      <SubHeader menuSubheader={menu_subheader} />
      <Header
        navMenu={nav_menu}
        menuSubheader={menu_subheader}
        countCart={cart || 0}
      />
      <ButtonTop />
      <SocialBtn />
      <main>{isLoading || isFetching ? <PreLoader /> : children}</main>
      <Footer />
      {isLoading || (isFetching && !viewProps) ? (
        <PreLoader />
      ) : ViewComponent ? (
        <Poppup>
          <ViewPoppupContext.Provider
            value={{
              ...viewProps,
            }}
          >
            <ViewComponent />
          </ViewPoppupContext.Provider>
        </Poppup>
      ) : null}
    </>
  );
}
