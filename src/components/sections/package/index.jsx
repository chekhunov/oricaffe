import React from "react";
import classNames from "classnames";

import "./package.scss";
export default function Package({ textAccent, color, isHeigth }) {
  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  return (
    <section className="package">
      <div className="container-big">
        <div className={classNames("package__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2
            className={classNames("package__desc d-flex", "desc")}
            style={{ color: textAccent }}
          >
            <span className="ml-10">упаковка</span>
          </h2>

          <div className="line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className="package__content-block">
            <div className="container">
              <div className="package__content">
                <div className="package__subtitle mb-25">
                  Следи за новостями и обновлениями, участвуй в акциях, получай
                  скидки!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
