import React from "react";
import classNames from "classnames";

export default function Footer() {
  return (
    <footer className={classNames("footer")}>
      <div className="footer__top">
        <div className="container-big">
          <div className="footer__inner">
            <div className="footer__item">
              <div className="footer__headline">Услуги</div>
              <ul>
                <li>Лечение рака легкого</li>
                <li>Лечение рака молочной железы</li>
                <li>Лечение рака кожи</li>
                <li>Лечение гиобластома</li>
                <li>Лечение рака желчных протоков</li>
                <li>Лечение других опухолей</li>
              </ul>
            </div>

            <div className="footer__item">
              <div className="footer__headline">Пациентам</div>

              <ul>
                <li>Что такое клинические исследования</li>
                <li>Мифы о клинических исследованиях</li>
                <li>Вопрос & Ответ</li>
                <li>Технологии центра</li>
                <li>История центра</li>
                <li>О Центре</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container-big">
          <div className="footer__bottom-inner">
            <div className="footer__bottom-meta">
              <a className="footer__cicr" href="/">
                <img src="footer/logo-full.png" alt="company full logo" />
              </a>

              <ul className="footer__social">
                <li className="footer__social-list">
                  <a href="/">
                    <div className="icon-facebook"></div>
                    <span>facebook</span>
                  </a>
                </li>

                <li className="footer__social-list">
                  <a href="/">
                    <div className="icon-instagram"></div>
                    <span>instagram</span>
                  </a>
                </li>
              </ul>

              <a className="aimix" href="/">
                <img src="footer/aimix.png" alt="company full logo" />
              </a>
            </div>

            <div className="footer__copy">
              <p>©2021 Все права защищены</p>

              <div className="footer__copy-inner">
                <a href="/">Политика конфиденциальности</a>

                <a href="/">Пользовательское соглащение</a>
              </div>
            </div>

            <a className="aimix-mobile" href="/">
              <img
                className="aimix-mobile__img"
                src="footer/aimix.png"
                alt="company full logo"
              />
              <img
                className="aimix-mobile__img-mobi"
                src="footer/aimix-mobile.png"
                alt="company full logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
