import React from "react";

import ContainerPage from "../../components/modules/containerPage";
import ContactsAddress from "../../components/contactsAddress";

import "./ContactsPage.scss";

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
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
      <ContactsAddress />
    </ContainerPage>
  );
};

export default ContactPage;
