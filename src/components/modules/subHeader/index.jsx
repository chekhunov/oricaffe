import React from "react";

import { Menu } from "../..";
import "./subHeader.scss";

export default function SubHeader({ appState }) {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="sub-header__inner">
          <Menu sx={{ fontSize: "12px", color: '#ffffff' }} menuItems={appState?.menu_subheader} />
        </div>
      </div>
    </div>
  );
}
