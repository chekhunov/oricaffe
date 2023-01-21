import { Menu } from "../..";

import "./subHeader.scss";

export default function SubHeader({ menuSubheader }) {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="sub-header__inner">
          <Menu
            sx={{ fontSize: "12px", color: "#ffffff" }}
            menuItems={menuSubheader}
          />
        </div>
      </div>
    </div>
  );
}
