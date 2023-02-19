import React from "react";
import Menu from "../../../elements/menu";
// import ContactsAddrsess from "../../../contactsAddress";

export default function HeaderMenuPopup({
  activePopup,
  menuItems,
  activeId,
  setActiveId,
  setActivePopup,
}) {
  return (
    <div className="menu-mobile">
      <div className="menu-mobile__inner">
        <Menu
          setActivePopup={setActivePopup}
          activePopup={activePopup}
          menuItems={menuItems}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
    </div>
  );
}
