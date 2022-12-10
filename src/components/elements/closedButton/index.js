import React from "react";
import classNames from "classnames";
import { Context } from "../../../context";

export default function ClosedButton({ isOpen, setIsOpen }) {
  const { setContext } = React.useContext(Context);

  function removeOverflowForBody() {
    document.body.classList.remove("overflowe");
  }
  return (
    <>
      <button
        className={classNames("closed-btn")}
        onClick={(e) => {
          removeOverflowForBody();
          setContext(isOpen);
        }}
      >
        <span className="closed-btn__line"></span>
      </button>
    </>
  );
}
