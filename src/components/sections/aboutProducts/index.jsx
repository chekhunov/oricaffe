import React from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";

import Button from "../../elements/button";

import grani from "../../../assets/img/aboutProducts/grani.jpg";
import green from "../../../assets/img/aboutProducts/green.jpg";
import moka from "../../../assets/img/aboutProducts/moka.jpg";
import chald from "../../../assets/img/aboutProducts/chald.jpg";
import capsule from "../../../assets/img/aboutProducts/capsule.jpg";

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
                  <div className="about-products__row about-row mb-40 p-20 d-flex">
                    <div className="about-row__column-left d-flex flex-column mr-20">
                      <div className="h100p">
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

                    <img
                      className="about-row__img--big"
                      src={grani}
                      alt="coffe"
                    />
                  </div>

                  <div className="about-products__row d-flex mb-40">
                    <div className="about-row__column-inner mr-40">
                      <div className="about-row__column mb-40 about-row d-flex justify-between align-start">
                        <div className="about-row__headline">
                          <div className="about-row__inner d-flex mb-10">
                            <div className="about-row__title mr-20 mb-0">
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
                              src={moka}
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
                            <div className="about-row__title m-auto mr-20 mb-0">
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
                              src={chald}
                              alt="coffe"
                            />
                            Слово "чалда" (итал. "cialda" - "вафля") пришло к
                            нам из Италии, где местные производители кофе
                            продумали уникальный способ быстрого приготовления
                            порционного эспрессо и чая. Кофе в чалдах – это
                            обжаренные молотые зерна, запрессованные в
                            одноразовые фильтр-пакеты. Для сохранения вкусовых
                            качеств их упаковывают в фольгу с добавлением азота,
                            что лучше сохраняет аромат и продлевает жизнь
                            молотого кофе. Правильно упакованные чалды могут
                            храниться до 2 лет без утраты своих основных
                            характеристик. Кофе в чалде – идеальное решение для
                            офиса: быстро, удобно и неизменно вкусно, но для его
                            приготовления понадобится специальная чалдовая
                            кофеварка. Как правило, цены на кофеварки ниже, чем
                            на профессиональные или простые зерновые, что делает
                            переход на капсульное эспрессо еще приятнее.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="about-row__column-inner">
                      <div className="about-row__column about-row column-right d-flex justify-between align-start">
                        <div className="about-row__headline d-flex flex-column justify-between h100p">
                          <div>
                            <div className="about-row__title">
                              Производство кофе в Nespresso капсулах
                            </div>

                            <img
                              className="column-right__img mb-10"
                              src={capsule}
                              alt="coffe"
                            />

                            <p className="about-row__text mb-20">
                              Капсула Nespresso – это целая система
                              приготовления кофейного напитка. Она состоит из
                              кофемашины и капсул формата Nespresso. Кофеварки
                              Nespresso – это автоматические кофеварки, которые
                              способны приготовить уникальный и вкусный кофе,
                              получая максимальный вкус и аромат из капсулы.
                              Самым большим плюсом данных машин является
                              быстрота и простота приготовления кофе, а так же
                              не сложный уход. Капсулы Nespresso представляют
                              собой расфасованный в фабричных условиях молотый
                              жареный кофе, спрессованный в порционные
                              одноразовые герметичные пластиковые или
                              металлические капсулы, представляющие собой
                              маленькие стаканчики с крышкой. Приготовление
                              напитка осуществляется в специальной машине,
                              обеспечивающей одновременную перфорацию дна
                              капсулы и её крышки, при этом в капсулу через дно
                              впрыскивается под высоким давлением вода, а через
                              крышку готовый напиток отводится из места
                              приготовления в чашку. Для наполнения капсул
                              производители часто используют кофейные смеси,
                              состоящие из нескольких сортов молотого кофейного
                              зерна. Так же капсула не пропускает воздух, влагу
                              и солнечный свет. Кофе остается всегда свежим.
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

                  <div className="about-products__row about-row p-20 d-flex align-start justify-between">
                    <div className="about-row__column-left mr-20">
                      <div className="about-row__title">
                        Производство зеленого кофе
                      </div>
                      <p className="about-row__text pb-20">
                        В июне 2017 года мы приняли участие в WOC (World of
                        Coffee) в Будапеште, и с этого важного события мы
                        представили наш проект «Farmers & Roasters Project».
                        Благодаря проекту «Farmers & Roasters» мы наконец-то
                        действительно можем контролировать весь процесс
                        производства нашего кофе от зерна до чашки,
                        сосредотачиваясь на улучшении условий труда людей на
                        плантации, справедливой оплате их заработной платы,
                        применении сельскохозяйственных практик, что бережно
                        относится к окружающей среде, получая чашку самой
                        высокой. качества. Этот проект является прозрачной цепью
                        поставок – больше, чем честная торговля В наших
                        социальных проектах мы сотрудничаем с кооперативом
                        Cocafcal(Гондурас). Наша цель состоит в том, чтобы
                        помочь местным общинам в странах-производителях бороться
                        с голодом и бедностью, улучшить их образование и
                        экономику и внедрить экологические стандарты.
                      </p>

                      <Button
                        sx={coffeGreen.sx}
                        link={coffeGreen.urlButton}
                        text={coffeGreen.button}
                      />
                    </div>

                    <img
                      className="about-row__img--big"
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
