import React from "react";
import { Context } from "../../../context";
import ClosedButton from "../closedButton";

import "./poppup.scss";
export default function Poppup({ children }) {
  const { context, setContext } = React.useContext(Context);

  const { isActiveCardPopup } = context;

  const handleClick = () => {
    document.body.classList.remove("overflowe");
    setContext({ isActiveCardPopup: false, add_to_cart: null });
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
