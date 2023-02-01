import React from "react";
import {useTranslation} from "react-i18next";

import avatar1 from '../../../assets/img/avatar1.jpg'
import avatar2 from '../../../assets/img/avatar2.jpg'
import avatar3 from '../../../assets/img/avatar3.jpg'
import avatar4 from '../../../assets/img/avatar4.jpg'

import "./reviews.scss";

export default function Reviews() {
  const {t} = useTranslation();

  return (<section className="reviews">
    <div className="container">
      <h2 className="reviews__desc">
        {t("reviews_section.reviews")}
        <a
          className="oriental-link ml-10"
          href="https://bhousecoffee.com/"
          target={"_blank"}
          rel="noreferrer"
        >
          Oriental caffe
        </a>
      </h2>

      <div className="reviews__content">
        <div className="reviews__subtitle mb-25">
          {t("reviews_section.latest_customer")}
        </div>

        <div className="reviews__inner">
          <div className="reviews__row d-flex">
            <div className="reviews__element element">
              <div className="element__headline d-flex align-start">
                <img className="element__img" src={avatar2} alt="avatar"/>
                <div className="block">
                  <div className="element__fullname">Наталия Ерошкина</div>

                  <div className="element__date">1.02.2023</div>
                </div>
              </div>
              <div className="reviews__text">Заказывали кофемашину для дома, были сомнения в выборе модели.
                Специалисты помогли определиться, несколько раз консультировали по телефону,ответили на все вопросы,
                профессиональный подход, спасибо! Машинка радует каждый день, работает исправно, кофе к ней теперь
                заказываю там же, большой выбор, проб...
              </div>
            </div>

            <div className="reviews__element element">
              <div className="element__headline d-flex align-start">
                <img className="element__img" src={avatar3} alt="avatar"/>
                <div className="block">
                  <div className="element__fullname">Маша Неваша</div>

                  <div className="element__date">1.02.2023</div>
                </div>
              </div>
              <div className="reviews__text">Очень понравился интернет магазин, ответственные консультанты помогли
                выбрать кофемашину. Я присмотрела более дорогую модель, мне рассказали обо всех функциях, оказалось
                можно взять дешевле и не хуже. Очень довольна покупкой, кофе для нее берем только в этом магазине,
                всегда свежий и качественный.
              </div>
            </div>
            <div className="reviews__element element">
              <div className="element__headline d-flex align-start">
                <img className="element__img" src={avatar4} alt="avatar"/>
                <div className="block">
                  <div className="element__fullname">Ольга Гулевич</div>

                  <div className="element__date">1.02.2023</div>
                </div>
              </div>
              <div className="reviews__text">Всегда заказываю кофе в зернах, качество отменное, цены приятные, доставка
                быстрая, постоянным клиентам делают скидки и подарки.
              </div>
            </div>
          </div>

          <div className="reviews__element element">
            <div className="element__headline d-flex align-start">
              <img className="element__img" src={avatar1} alt="avatar"/>
              <div className="block">
                <div className="element__fullname">Любовь Николаевна</div>

                <div className="element__date">1.02.2023</div>
              </div>
            </div>
            <div className="reviews__text">Отличный сайт, часто беру здесь разнообразные чаи. Из последнего очень
              понравилась смесь черного и зеленого чаев 1001 ночь. Ароматизированных чаев тоже в достатке. Могу
              порекомендовать Althaus и Damman. Отношение к клиентам - тоже супер! Однажды случилась небольшая
              задержка с доставкой, так магазин ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
}
