import { createContext } from "react";
import { PoppupModel } from "../models/poppupToCart.model";

interface StateContextProps {
  stateContext: Pick<
    PoppupModel,
    "to_cart" | "isActiveCardPopup" | "type" | "dataCart" | "eur"
  >;
  setStateContext?: () => void;
}

const StateContext = createContext<StateContextProps>({
  stateContext: {
    isActiveCardPopup: false,
    type: "",
    dataCart: [],
    eur: 0,
    to_cart: {
      id: "",
      category: "",
      type_of_coffee: "",
      sort: "",
      name: "",
      weight: 0,
      weight_box: 0,
      cost: 0,
      desc: "",
      info: "",
      imgUrl: "",
      link: "",
    },
  },
});

export default StateContext;
