import React from "react";
import Menu from "../../../elements/menu";
// import ContactsAddrsess from "../../../contactsAddress";

export default function HeaderMenuPopup({
  activePopup,
  menuItems,
  activeId,
  setActiveId,
}) {
  return (
    <div className="menu-mobile">
      <div className="menu-mobile__inner">
        <Menu
          activePopup={activePopup}
          menuItems={menuItems}
          activeId={activeId}
          setActiveId={setActiveId}
        />

        {/* <ContactsAddress /> */}
      </div>
    </div>
  );
}
