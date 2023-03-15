import React from "react";
import cn from "classnames";

export default function ClosedButton({ click }) {
  return (
    <>
      <button
        className={cn("closed-btn")}
        onClick={click}
      >
        <span className="closed-btn__line"></span>
      </button>
    </>
  );
}
