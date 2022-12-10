import React from "react";
import classNames from "classnames";
// import img from '../../assets/img/map.jpg'
import ContactsAddress from "../../contactsAddress";

export default function Contacts() {
  return (
    <section className={"contacts"}>
      <div className="container-big">
        <div className={classNames("contacts__inner", "inner")}>
          <div className="line">
            <span className="line__accent"></span>
          </div>

          <h2 className={classNames("contacts__desc", "desc")}>Контакты</h2>

          <div className={"contacts__content-block"}>
            {/* <img className={"contacts__img"} src={img} alt="map" /> */}

            <ContactsAddress />
          </div>
        </div>
      </div>
    </section>
  );
}
