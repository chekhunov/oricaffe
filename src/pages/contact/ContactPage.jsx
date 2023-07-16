import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import ContactsAddress from "../../components/contactsAddress";
import map from "../../assets/img/contacts/mapBeregovo.webp";

import "./ContactPage.scss";
import { MAIN_ROUTE } from "../../types/const";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
  },
  {
    id: 1,
    title: "contacts",
    link: "",
  },
];

const ContactPage = () => {
  return (
    <ContainerPage name="contacts" breadcrumbs={breadcrumbs}>
      <div className="contacts-page__content">
        <ContactsAddress />

        <img className="contacts-page__image" src={map} alt="map beregovo" />
      </div>
    </ContainerPage>
  );
};

export default ContactPage;
