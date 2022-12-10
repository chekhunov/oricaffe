import React from "react";
import classNames from "classnames";

import "./about.scss";

export default function About({ textAccentAbout, colorAbout, isHeigthAbout }) {
  const stylesBlock = {
    backgroundColor: colorAbout,
    height: isHeigthAbout + "%",
  };
  return (
    <section className="about">
      <div className="container-big">
        <div className={classNames("about__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2
            style={{ color: textAccentAbout }}
            className={classNames("about__desc d-flex", "desc")}
          >
            Компания
            <a
              className="oriental-link ml-10"
              href="https://bhousecoffee.com/"
              target="_blank"
              rel="noreferrer"
            >
              Orientalcaffe
            </a>
          </h2>

          <div className="line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className="about__content-block">
            <div className="container">
              <div className="about__text">
                <span className="about__meta-text pb-20">
                  Компания
                  <span className="about__text-accent">Orientalcaffe</span>
                  была основана в 1955 году благодаря семье{" "}
                  <span className="about__text-accent">Bonachi</span> и ее
                  вкладу в дальнейшее развитие компании.
                </span>
                <span className="about__text-desc">
                  Компания занимается комплексным производством от посадки зерна
                  до обработки, фасовки COFFE и других продуктов в
                  таблетированном, порошковом, капсулированном виде. Наша
                  система работы построена на полностью официальных принципах,
                  поэтому при работе с нами Вы гарантированно получите тот
                  результат, которого ожидаете, без лишних проблем.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
