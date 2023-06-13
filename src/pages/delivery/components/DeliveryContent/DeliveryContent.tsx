import "./DeliveryContent.scss";

const DeliveryContent = () => {
  return (
    <div className="delivery-content">
      <div className="delivery__title">Доставка і оплата</div>
      <div className="delivery__warning">
        Увага, оплата карткою на сайті тимчасово недоступна. Вибачте за
        тимчасові незручності.
      </div>
      <div className="delivery__subtitle">Оплата</div>
      <div>Оплату можна здійснити наступними способами:</div>

      <ul>
        <li>- Готівкою при отриманні товару у відділенні «Нова пошта»</li>
        <li>- За допомогою банківської картки VISA / Mastercard</li>
      </ul>

      <div className="delivery__subtitle">Доставка</div>

      <div className="delivery__headtext">Нова пошта</div>

      <div className="delivery__text">
        За наявності товару на складі та при оформленні замовлення до 12:00 -
        відправка здійснюється в день замовлення.
      </div>
      <div className="delivery__text">
        Вартість доставки по Україні – за{" "}
        <b>тарифами Нової пошти Безкоштовна</b> при замовленні на суму від 500
        грн.
      </div>
      <div className="delivery__text">
        Адресна доставка по Україні — за <b>тарифами Нової Пошти Безкоштовна</b>{" "}
        при замовленні на суму від 1500 грн.
      </div>
      <div className="pt-20 pb-20">Увага!</div>
      <div className="delivery__text">
        Замовлення зберігається на складі транспортної компанії не більше 5-ти
        робочих днів, після вичерпання цього терміну - відправляється назад.
      </div>
      <div className="delivery__text">
        Отримати замовлення може тільки та людина, яка зазначена в транспортній
        декларації як одержувач.
      </div>
      <div className="delivery__text">
        При собі необхідно мати документ, що посвідчує особу.
      </div>
      <div className="delivery__text">
        Замовлення з доставкою через «Нову пошту» приймаються згідно графіка роботи перевізника. Графік роботи компанії «Нова пошта» Ви зможете знайти на її офіційному сайті.
      </div>
    </div>
  );
};

export default DeliveryContent;
