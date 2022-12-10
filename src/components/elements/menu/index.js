import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Menu = ({
  multiSelect = false,
  menuItems,
  activeId,
  setActiveId,
  activePopup,
}) => {
  const [selection, setSelection] = React.useState([]);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function clickItem(val) {
    setActiveId(val);
  }

  return (
    <nav className={classNames("menu", activePopup && "active")}>
      {menuItems &&
        menuItems.map((item, index) => (
          <Link key={item.id} to={`/${item.link}`}>
            <li
              className={classNames(
                "menu__item",
                item.id === activeId ? "active" : ""
              )}
              key={item.id}
            >
              <div
                type="link"
                className="dd-list-link"
                onClick={(e) => {
                  handleOnClick(item);
                  clickItem(index);
                }}
              >
                <span className={"menu__left"}>{item.value}</span>

                {item.category && (
                  <svg
                    className="menu__arrow ml-5"
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 6.5L5.22902 0.189021L1.28773e-07 6.49988L1.01948 6.50024L5.22902 3.77894L9.50006 6.49988L10.5 6.5Z"
                      fill="#8E0303"
                    />
                  </svg>
                )}
              </div>
            </li>
          </Link>
        ))}
    </nav>
  );
};

export default Menu;
