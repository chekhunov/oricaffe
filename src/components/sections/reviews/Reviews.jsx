import React from "react";
import { useTranslation } from "react-i18next";

import avatar1 from "../../../assets/img/avatar1.jpg";
import avatar2 from "../../../assets/img/avatar2.jpg";
import avatar3 from "../../../assets/img/avatar3.jpg";
import avatar4 from "../../../assets/img/avatar4.jpg";

import "./reviews.scss";

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__desc">
          {t("reviews_section.reviews")}
          <a
            className="oriental-link ml-10"
            href="https://bhousecoffee.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Orientalcaffe
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
                  <img className="element__img" src={avatar2} alt="avatar" />
                  <div className="block">
                    <div className="element__fullname">ЛЮДМИЛА ПУШАК</div>

                    <div className="element__date">9.01.2023</div>
                  </div>
                </div>
                <div className="reviews__text">
                  Вже далеко не вперше замовляю каву в цьому магазині, і жодного
                  разу не було такого щоб я була чимось не задоволена, завжди
                  обслуговування на високому рівні, а головне кава та чаї
                  якісні.
                </div>
              </div>

              <div className="reviews__element element">
                <div className="element__headline d-flex align-start">
                  <img className="element__img" src={avatar3} alt="avatar" />
                  <div className="block">
                    <div className="element__fullname">
                      ТАТЬЯНА ШАПОВАЛ , г. ДНЕПР
                    </div>

                    <div className="element__date">1.02.2023</div>
                  </div>
                </div>
                <div className="reviews__text">
                  Регулярно заказываю и кофе, и чай, всем довольна. Рекомендую.
                </div>
              </div>
              <div className="reviews__element element">
                <div className="element__headline d-flex align-start">
                  <img className="element__img" src={avatar4} alt="avatar" />
                  <div className="block">
                    <div className="element__fullname">
                      НАТАЛІЯ ШИРОЧЕНКОВА , г. БЕРЕЗАНЬ
                    </div>

                    <div className="element__date">22.01.2023</div>
                  </div>
                </div>
                <div className="reviews__text">
                  Кава завжди свіжа, помол ідеальний на любий смак, менеджери
                  працюють швидко та уважно. Якщо полюбляєте свіжу ароматну каву
                  тоді ця фірма саме для вас, сама користуюсь не один рік та
                  рекомендую всім
                </div>
              </div>
            </div>

            <div className="reviews__element element">
              <div className="element__headline d-flex align-start">
                <img className="element__img" src={avatar1} alt="avatar" />
                <div className="block">
                  <div className="element__fullname">
                    ОЛЕНА ПЕР'ЯН , г. МИКОЛАЇВ
                  </div>

                  <div className="element__date">11.10.2022</div>
                </div>
              </div>
              <div className="reviews__text">
                Доброго дня. Років 5 мабуть тому Кавову компанію мені
                порекомендували друзі. З того часу, я завжди там замовляю чай і
                каву. Була кавоман, спробувала багато сортів, а тепер лиш чай.
                Якщо чорний, то Тадж Махал, а буває настрій зрідка на зелений,
                тоді мій вибір - Щедрість богів. Дякую, що ви є!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
