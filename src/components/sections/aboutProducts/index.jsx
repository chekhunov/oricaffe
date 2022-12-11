import React from "react";
import classNames from "classnames";

import Button from "../../elements/button";

import grani from "../../../assets/img/aboutProducts/Percentuali_grani.jpg";

import "./aboutProducts.scss";

const coffeGrani = {
  button: "Сделать заказ",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeGround = {
  button: "Сделать заказ",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeMono = {
  button: "Сделать заказ",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeNespresso = {
  button: "Сделать заказ",
  urlButton: "/contacts",
  sx: {
    width: "200px",
  },
};

const coffeGreen = {
  button: "Сделать заказ",
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
              Orientalcaffe
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
                    <div className="about-row__column-left mr-20">
                      <div className="about-row__title">
                        Производство зернового кофе
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
                        sx={coffeGrani.sx}
                        link={coffeGrani.urlButton}
                        text={coffeGrani.button}
                      />
                    </div>

                    <div className="about-row__column-right">
                      <img className="about-row__img" src={grani} alt="coffe" />
                    </div>
                  </div>

                  <div className="about-products__row d-flex mb-40">
                    <div className="about-row__column-inner mr-40">
                      <div className="about-row__column mb-40 about-row d-flex justify-between align-start">
                        <div className="about-row__headline">
                          <div className="about-row__title">
                            Производство молотого кофе
                          </div>

                          <p className="about-row__text pb-20">
                            Текс о молотом кофе
                          </p>

                          <Button
                            sx={coffeGround.sx}
                            link={coffeGround.urlButton}
                            text={coffeGround.button}
                          />
                        </div>

                        <img
                          className="about-row__img"
                          src="/aboutProducts/1.jpg"
                          alt="coffe"
                        />
                      </div>

                      <div className="about-row__column about-row d-flex justify-between align-start">
                        <div className="about-row__headline">
                          <div className="about-row__title">
                            Производство кофе в монодозах (38-42 мм диаметром)
                          </div>

                          <p className="about-row__text pb-20">
                            Текс о монодозах
                          </p>

                          <Button
                            sx={coffeMono.sx}
                            link={coffeMono.urlButton}
                            text={coffeMono.button}
                          />
                        </div>

                        <img
                          className="about-row__img"
                          src="/aboutProducts/1.jpg"
                          alt="coffe"
                        />
                      </div>
                    </div>

                    <div className="about-row__column-inner">
                      <div className="about-row__column about-row h100p d-flex justify-between align-start">
                        <div className="about-row__headline">
                          <div className="about-row__title">
                            Производство кофе в Nespresso капсулах
                          </div>

                          <p className="about-row__text pb-20">
                            Текс о Nespresso капсулах
                          </p>

                          <Button
                            sx={coffeNespresso.sx}
                            link={coffeNespresso.urlButton}
                            text={coffeNespresso.button}
                          />
                        </div>

                        <img
                          className="about-row__img"
                          src="/aboutProducts/1.jpg"
                          alt="coffe"
                        />
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
                    <div className="about-row__column-right">
                      <img className="about-row__img" src={grani} alt="coffe" />
                    </div>
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
