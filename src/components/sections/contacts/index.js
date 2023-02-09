import React from "react";
import classNames from "classnames";
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
            <ContactsAddress />
          </div>
        </div>
      </div>
    </section>
  );
}
