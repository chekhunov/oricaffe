import React from "react";
import classNames from "classnames";

import "./aboutProducts.scss";

export default function AboutProducts() {
  return (
    <section className="about-products">
      <div className="container-big">
        <div className={classNames("about-products__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2 className={classNames("about-products__desc d-flex", "desc")}>
            Продукция компании
            <a
              className="oriental-link ml-10"
              href="https://bhousecoffee.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              Orientalcaffe
            </a>
          </h2>

          <div className={"about-products__content-block"}>
            <div className="container">
              <div className={"about-products__content"}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
