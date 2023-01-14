import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import Button from "../../elements/button";

import grani from "../../../assets/img/aboutProducts/beans.png";
import green from "../../../assets/img/aboutProducts/beans-green.png";
import moka from "../../../assets/img/aboutProducts/icona_moka.png";
import chald from "../../../assets/img/aboutProducts/icona_cialda.png";
import capsule from "../../../assets/img/aboutProducts/icona_NESPRESSO.png";

import "./aboutProducts.scss";

const coffeGrani = {
  button: "more",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeGround = {
  button: "more",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeNespresso = {
  button: "more",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeGreen = {
  button: "more",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

export default function AboutProducts({
  textAccent,
  color,
  isHeigth,
  bgColor,
}) {
  const { t } = useTranslation();

  const stylesBlock = {
    backgroundColor: color,
    height: isHeigth + "%",
  };

  return (
    <section className="about-products">
      <div className="container-big">
        <div className={classNames("about-products__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2
            className={classNames("about-products__desc d-flex", "desc")}
            style={{ color: textAccent, backgroundColor: bgColor }}
          >
            {t("production_company")}
            <a
              className="oriental-link ml-10"
              href="https://bhousecoffee.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              Oriental caffe
            </a>
          </h2>

          <div className="line">
            <span style={stylesBlock} className="line__accent"></span>
          </div>

          <div className="about-products__content-block">
            <div className="container">
              <div className="about-products__content">
                <div className="about-products__subtitle mb-25">
                  {t("about_products.subtitle")}
                </div>

                <div className="about-products__inner">
                  <div className="about-products__row about-row mb-40 p-20 d-flex">
                    <div className="about-row__column-left d-flex flex-column mr-20">
                      <div className="h100p">
                        <div className="about-row__title">
                          {t("about_products.grain_coffee")}
                        </div>
                        <p className="about-row__text">
                          <span className="about__text-accent">
                            Oriental caffe
                          </span>{" "}
                          – {t("about_products.this_is_traditional")}
                        </p>
                        <p className="about-row__text paragraph pb-20">
                          {t("about_products.among_the_principles")}
                        </p>
                        <p
                          className="about-row__text pb-20"
                          style={{ fontStyle: "italic" }}
                        >
                          {t("about_products.choose_the_coffee")}
                        </p>
                      </div>

                      <Button
                        sx={coffeGrani.sx}
                        link={coffeGrani.urlButton}
                        text={t(coffeGrani.button)}
                      />
                    </div>

                    <img
                      className="about-row__img--big"
                      src={grani}
                      alt="coffe"
                    />
                  </div>

                  <div className="about-products__row d-flex mb-40">
                    <div className="about-row__column-inner column-right mr-40">
                      <div className="about-row__column mb-40 about-row d-flex justify-between align-start">
                        <div className="about-row__headline">
                          <div className="about-row__inner d-flex mb-10">
                            <div className="about-row__title mr-20 mb-0">
                              {t("about_products.ground_coffee")}
                            </div>

                            <div className="about-products__btn">
                              <Button
                                sx={coffeGround.sx}
                                link={coffeGround.urlButton}
                                text={t(coffeGround.button)}
                              />
                            </div>
                          </div>
                          <div className="d-flex">
                            <p className="about-row__text">
                              {t("about_products.many_people_represent")}
                            </p>
                            <img
                              className="about-row__img-moka"
                              src={moka}
                              alt="coffe"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="about-row__column about-row d-flex justify-between align-start">
                        <div className="about-row__headline">
                          <div className="about-row__inner d-flex mb-10">
                            <div
                              className="about-row__title mr-20"
                              style={{ marginBottom: 0 }}
                            >
                              {t("about_products.coffee_in_single_doses")}
                              <span
                                style={{ fontSize: "16px", display: "block" }}
                              >
                                (38-42 мм {t("about_products.diameter")})
                              </span>
                            </div>

                            <div className="about-products__btn">
                              <Button
                                sx={coffeGround.sx}
                                link={coffeGround.urlButton}
                                text={t(coffeGround.button)}
                              />
                            </div>
                          </div>

                          <p className="about-row__text pb-10">
                            <img
                              className="about-row__img"
                              src={chald}
                              alt="coffe"
                            />
                            {t("about_products.word_chald")}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="about-row__column-inner">
                      <div className="about-row__column about-row column-right d-flex justify-between align-start">
                        <div className="about-row__headline d-flex flex-column justify-between h100p">
                          <div>
                            <div className="about-row__title">
                              {t("about_products.coffee_nespresso")}
                            </div>

                            <img
                              className="column-right__img mb-10"
                              src={capsule}
                              alt="coffe"
                            />

                            <p className="about-row__text mb-20">
                              {t("about_products.coffee_nespresso_this")}
                            </p>
                          </div>

                          <Button
                            sx={coffeNespresso.sx}
                            link={coffeNespresso.urlButton}
                            text={t(coffeNespresso.button)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="about-products__row about-row p-20 d-flex align-start justify-between">
                    <div className="about-row__column-left mr-20">
                      <div className="about-row__title">
                        {t("about_products.coffee_green")}
                      </div>

                      <p className="about-row__text pb-20">
                        {t("about_products.june")}
                      </p>

                      <Button
                        sx={coffeGreen.sx}
                        link={coffeGreen.urlButton}
                        text={t(coffeGreen.button)}
                      />
                    </div>

                    <img
                      className="about-row__img-green about-row__img--big"
                      src={green}
                      alt="coffe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
