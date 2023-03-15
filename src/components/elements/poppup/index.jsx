import React, { useContext} from "react";
import ClosedButton from "../closedButton";
import StateContext from "../../../utils/stateContext";

import "./poppup.scss";
export default function Poppup({ children }) {
  const { stateContext, setStateContext } = useContext(StateContext);

  const { isActiveCardPopup } = stateContext;

  const handleClick = () => {
    document.body.classList.remove("overflowe");
    setStateContext({ isActiveCardPopup: false, add_to_cart: null });
  };

  return (
    <>
      {isActiveCardPopup && (
        <div className="poppup">
          <div className="poppup-inner">
            <ClosedButton click={handleClick} />
            {children}
          </div>
        </div>
      )}
    </>
  );
}
