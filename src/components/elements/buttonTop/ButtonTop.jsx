import React, { useState, useEffect } from "react";

import "./buttonTop.scss";
export default function ButtonTop(): JSX.Element {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const listenScrollEvent = () => {
      const eventScroll = window.scrollY;
      if (eventScroll >= 10) {
        return setShow(true);
      } else {
        return setShow(false);
      }
    };
    window.addEventListener("scroll", listenScrollEvent, { passive: true });
    return () => {
      window.removeEventListener("scroll", listenScrollEvent, {
        passive: true,
      });
    };
  }, [show]);

  return (
    show && (
      <div className="button-top d-flex" onClick={handleClick}>
        <div className="icon-arleft"></div>
      </div>
    )
  );
}
