import React from "react";
import classNames from "classnames";

import "./topProducts.scss";
export default function TopProducts({ textAccent, color, isHeigth }) {
  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  return (
    <section className="top-products">
      <div className="container-big">
        <div className={classNames("top-products__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2
            className={classNames("top-products__desc d-flex", "desc")}
            style={{ color: textAccent }}
          >
            <span className="ml-10">Топ продукции</span>
          </h2>

          <div className="line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className="top-products__content-block">
            <div className="container">
              <div className="top-products__content">
                <div className="top-products__subtitle mb-25">
                  Следи за новостями и обновлениями, участвуй в акциях, получай
                  скидки!
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
