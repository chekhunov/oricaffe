import React from "react";
import cn from "classnames";
import {useTranslation} from "react-i18next";

import "./headline.scss";

export default function Category({
                                   name, textAccent, color, isHeigth, bgColor, children, sx = ''
                                 }) {
  const {t} = useTranslation();

  const stylesBlock = {
    backgroundColor: color, height: isHeigth + "%",
  };
  return (<section className="headline" style={{...sx}}>
    <div className="container-big">
      <div className={cn("headline__inner", "inner")}>
        <div className="line">
          <span className="line__accent"></span>
        </div>

        <h2
          style={{color: textAccent, backgroundColor: bgColor}}
          className={cn("headline__desc d-flex", "desc")}
        >
          {t(`${name}_coffee`)}
          <a
            className="oriental-link ml-10"
            href="https://bhousecoffee.com/"
            target="_blank"
            rel="noreferrer"
          >
            Oriental caffe
          </a>
        </h2>

        <div className="line">
          <span style={stylesBlock} className="line__accent"></span>
        </div>

        {children}
      </div>
    </div>
  </section>);
}
