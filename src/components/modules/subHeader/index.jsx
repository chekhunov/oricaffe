import { useState } from "react";
import { Menu } from "../..";

import "./subHeader.scss";

export default function SubHeader({ menuSubheader }) {
  const [activeId, setActiveId] = useState(null);
  return (
    <div className="sub-header">
      <div className="container">
        <div className="sub-header__inner">
          <Menu
            sx={{ fontSize: "12px", color: "#ffffff" }}
            menuItems={menuSubheader}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </div>
      </div>
    </div>
  );
}
