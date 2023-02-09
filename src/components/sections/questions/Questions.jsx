import React from "react";

import "./questions.scss";

const Questions = () => {
  return (
    <section className="questions">
      <div className="container-big">
        <div className="questions__inner d-flex justify-between align-start">
          <div className="questions__column left">
            <div className="title questions__title">
              Часто задаваемые вопросы
            </div>

            <p className="questions__descriptions">
              Мы здесь, чтобы помочь вам с наиболее часто задаваемыми вопросами.
              Если вы не нашли ответ, вы можете перейти на страницу часто
              задаваемых вопросов для получения дополнительной информации или
              связаться с нами.
            </p>
          </div>

          <div className="questions__column right">
            <ul className="questions__menu">
              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    Как это работает?
                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="questions__item-desc">
                  Ежедневно с 9.00 до 18.00 вам необходимо связаться с нашим
                  специалистом, который поможет оформить заказ, произвести
                  оплату и отправить товар.
                </p>
              </li>

              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    Могу ли я отменить отменить свой заказ?
                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="questions__item-desc">text</p>
              </li>

              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    Что произойдет, если клиент отменит свой заказ?
                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="questions__item-desc">
                  Клиенты принимают положения и условия Orientalcaffe, включая
                  наш пункт об отмене. В зависимости от того, насколько близко к
                  событию они отменяют, клиенту может быть возвращен полный
                  возврат средств, он может потерять 50% депозита или весь
                  платеж. Для получения более подробной информации о нашей
                  политике отмены нажмите здесь.
                </p>
              </li>

              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    Могу ли я сделать пред заказ?
                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="questions__item-desc">
                  Да, вы можете сделать предзаказ в любое время и получить
                  скидку. Для этого вам необходимо связаться с нашим менеджером.
                </p>
              </li>

              <li className="questions__item">
                <div className="questions__headline">
                  <div className="questions__item-title d-flex align-center">
                    Когда я получу товар, если оформил предзаказ?
                    <svg
                      className={"questions__item-svg"}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                        stroke="#2B304F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="questions__item-desc">
                  Вы получите товар по предзаказу в оговоренный срок при этом
                  компания предоставит вам скидку на продукцию.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
