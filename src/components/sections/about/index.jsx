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
              Oriental caffe
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
                  <span className="about__text-accent">Oriental caffe</span>
                  Компания Oriental caffe (Oriental caffè) работает в Тоскане
                  (область в Италии) с 1955 года.
                </span>
                <p className="about__text-desc">
                  Компания
                  <span className="about__text-accent">
                    Oriental caffe (Oriental caffè)
                  </span>
                  – это небольшая ремесленная компания, представляющая
                  изысканность искусства итальянского обжаривания кофейных
                  зерен. Мы производим жареный кофе и стараемся делать это
                  хорошо, мы любим кофе и стараемся распространять культуру кофе
                  в мире. Ценности и страсть – наследие нашей компании,
                  связанное с драгоценным багажом знаний, которые с особой
                  заботой и вниманием ежедневно внедряются в практику, начиная с
                  сортировки и отбора сырья для завершения процесса на стадии
                  обжаривания и смешивания зерен. Из-за обжаривания кофейных
                  зерен и сборки смеси{" "}
                  <span style={{ color: "red" }}>Samuele</span>, мастер жарки,
                  руководствуясь своими чувствами, выражает всю душу нашей
                  работы: поиск приятнейшей экстракции ароматов в их гармоничном
                  и сбалансированном сочетании. Цель проста и ясна: каждая чашка
                  нашего кофе должна выражать уникальную эмоцию ароматов. Наша
                  философия состоит в том, чтобы хорошо делать качественный
                  кофе, для этого вся цепочка, сопровождающая жизнь кофейного
                  зерна от семян до чашки напитка должна преследовать эту цель
                  совершенства с той же страстью и преданностью. Это означает
                  исследовать такую философию у крестьян, которые вырастили
                  зеленый кофе, проявляющийся в каждом ежедневном жесте,
                  направленном на оценку сенсорного потенциала их кофе по
                  сравнению с территорией и био-разнообразием. Это значит -
                  делиться с нашими клиентами культурой кофе и уверенностью в
                  том, что из-за его экстракции выражается вся любовь к аромату,
                  сопровождавшая каждый предыдущий выбор.
                </p>
                <p className="about__text-desc">
                  Эта общность намерений является основой нашего искусства и
                  предпосылкой для дегустации кофе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
