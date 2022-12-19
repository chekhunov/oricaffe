import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Button from "../../elements/button";

import grani from "../../../assets/img/aboutProducts/Percentuali_grani.jpg";

import "./aboutProducts.scss";

const coffeGrani = {
  button: "Подробнее",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeGround = {
  button: "Подробнее",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeMono = {
  button: "Подробнее",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeNespresso = {
  button: "Подробнее",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeGreen = {
  button: "Подробнее",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

export default function AboutProducts({ textAccent, color, isHeigth }) {
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
            style={{ color: textAccent }}
          >
            Продукция компании
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
                  На нашем предприятии имеется все необходимое оборудование для
                  производства продукции в виде:
                </div>

                <div className="about-products__inner">
                  <div className="about-products__row about-row mb-40 p-20 d-flex align-start">
                    <div className="about-row__column-left d-flex flex-column h100p mr-20">
                      <div>
                        <div className="about-row__title">
                          Производство зернового кофе
                        </div>
                        <p className="about-row__text">
                          <span className="about__text-accent">
                            Oriental caffe
                          </span>{" "}
                          – это традиционный итальянский кофе свежей обжарки. На
                          каждой упаковке присутствует (штамп) срок годности,
                          это гарантирует аромат и максимальное качество. Наши
                          клиенты должны получить ощущение от кофе "я в Италии".
                        </p>
                        <p className="about-row__text paragraph pb-20">
                          Среди принципов нашей деятельности — натуральность и
                          вдохновение. Мы вдохновляемся инновационными идеями,
                          позволяющими повысить урожайность кофе, поддерживать
                          качество продукции и открывать новые уникальные
                          кофейные вкусы.
                        </p>
                        <p
                          className="about-row__text pb-20"
                          style={{ fontStyle: "italic" }}
                        >
                          Выбирайте кофе, который по вкусу вам и вашим клиентам.
                        </p>
                      </div>

                      <Button
                        sx={coffeGrani.sx}
                        link={coffeGrani.urlButton}
                        text={coffeGrani.button}
                      />
                    </div>

                    <div className="about-row__column-right">
                      <img
                        className="about-row__img--big"
                        src={grani}
                        alt="coffe"
                      />
                    </div>
                  </div>

                  <div className="about-products__row d-flex mb-40">
                    <div className="about-row__column-inner mr-40">
                      <div className="about-row__column mb-40 about-row d-flex justify-between align-start">
                        <div className="about-row__headline">
                          <div className="about-row__inner d-flex mb-10">
                            <div className="about-row__title mr-20">
                              Производство молотого кофе
                            </div>

                            <div className="about-products__btn">
                              <Button
                                sx={coffeGround.sx}
                                link={coffeGround.urlButton}
                                text={coffeGround.button}
                              />
                            </div>
                          </div>

                          <p className="about-row__text">
                            <img
                              className="about-row__img"
                              src="/aboutProducts/1.jpg"
                              alt="coffe"
                            />
                            Многие люди не представляют утро без чашки бодрящего
                            кофе. Чтобы максимально сэкономить свое время, они
                            предпочитают растворимый продукт, который лишен
                            практически всех полезных свойств и не позволяет
                            насладиться всем богатством ароматов и вкусов.
                            Отличной альтернативой является молотый кофе – он
                            также отличается быстрым приготовлением, но при этом
                            сохраняет все ароматические и вкусовые оттенки.
                          </p>
                        </div>
                      </div>

                      <div className="about-row__column about-row d-flex justify-between align-start">
                        <div className="about-row__headline">
                          <div className="about-row__inner d-flex mb-10">
                            <div className="about-row__title m-auto mr-20">
                              Производство кофе в монодозах{" "}
                              <span style={{ fontSize: "16px" }}>
                                (38-42 мм диаметром)
                              </span>
                            </div>

                            <div className="about-products__btn">
                              <Button
                                sx={coffeGround.sx}
                                link={coffeGround.urlButton}
                                text={coffeGround.button}
                              />
                            </div>
                          </div>

                          <p className="about-row__text">
                            <img
                              className="about-row__img"
                              src="/aboutProducts/1.jpg"
                              alt="coffe"
                            />
                            Многие люди не представляют утро без чашки бодрящего
                            кофе. Чтобы максимально сэкономить свое время, они
                            предпочитают растворимый продукт, который лишен
                            практически всех полезных свойств и не позволяет
                            насладиться всем богатством ароматов и вкусов.
                            Отличной альтернативой является молотый кофе – он
                            также отличается быстрым приготовлением, но при этом
                            сохраняет все ароматические и вкусовые оттенки.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="about-row__column-inner">
                      <div className="about-row__column about-row h100p d-flex justify-between align-start">
                        <div className="about-row__headline d-flex flex-column justify-between h100p">
                          <div>
                            <div className="about-row__title">
                              Производство кофе в Nespresso капсулах
                            </div>

                            <p className="about-row__text mb-20">
                              <img
                                className="about-row__img"
                                src="/aboutProducts/1.jpg"
                                alt="coffe"
                              />
                              Многие люди не представляют утро без чашки
                              бодрящего кофе. Чтобы максимально сэкономить свое
                              время, они предпочитают растворимый продукт,
                              который лишен практически всех полезных свойств и
                              не позволяет насладиться всем богатством ароматов
                              и вкусов. Отличной альтернативой является молотый
                              кофе – он также отличается быстрым приготовлением,
                              но при этом сохраняет все ароматические и вкусовые
                              оттенки.
                            </p>
                          </div>

                          <Button
                            sx={coffeNespresso.sx}
                            link={coffeNespresso.urlButton}
                            text={coffeNespresso.button}
                          />
                        </div>

                        {/* <img
                          className="about-row__img"
                          src="/aboutProducts/1.jpg"
                          alt="coffe"
                        /> */}
                      </div>
                    </div>
                  </div>

                  <div className="about-products__row about-row p-20 d-flex align-start">
                    <div className="about-row__column-left mr-20">
                      <div className="about-row__title">
                        Производство зеленого кофе
                      </div>
                      <p className="about-row__text pb-20">
                        Если Ваша продукция порошкообразная, но Вы хотите
                        поставлять ее на рынок в капсулах, в этом нет никаких
                        проблем. При фасовке капсул, аналогично таблетированной
                        продукции, мы гарантируем точное количество продукта
                        который попадает в банку. Мы можем предложить Вам
                        капсулы всех существующих на рынке размеров, а так же в
                        комплексе услуги по капсулированию и фасовке готовых
                        капсул. Капсулирование у нас даст Вам удобство работы с
                        одним исполнителем, следовательно можно не переживать о
                        перевозке продукции в специально оборудованном
                        транспорте за большие деньги, можно убрать из затрат
                        риски связанные с задержками транспортировки продукта из
                        одного места в другое, и останется только наблюдать за
                        сроками на календаре и ждать даты окончания работ.
                      </p>

                      <Button
                        sx={coffeGreen.sx}
                        link={coffeGreen.urlButton}
                        text={coffeGreen.button}
                      />
                    </div>
                    {/* <div className="about-row__column-right">
                      <img className="about-row__img" src={grani} alt="coffe" />
                    </div> */}
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
