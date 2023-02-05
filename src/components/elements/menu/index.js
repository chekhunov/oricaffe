import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const Menu = ({
  sx = {},
  multiSelect = false,
  menuItems = [],
  activeId,
  setActiveId,
  activePopup,
}) => {
  const { t } = useTranslation();
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
      {menuItems?.map((item, index) => (
        <>
          {!item?.category ? (
            <Link
              key={`without-category_${item.id}-${item.name}`}
              to={`/${item.link}`}
            >
              <li
                style={sx}
                className={classNames(
                  "menu__item",
                  item.id === activeId ? "active" : ""
                )}
                key={item.id}
              >
                <div
                  type="link"
                  className="dd-list-link"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    handleOnClick(item);
                    clickItem(index);
                  }}
                >
                  <span className={"menu__left"}>{t(`${item.value}`)}</span>
                </div>
              </li>
            </Link>
          ) : (
            <li
              className={classNames(
                "menu__item",
                item.id === activeId ? "active" : ""
              )}
              key={`category_${item.id}-${item.name}`}
            >
              <div
                type="link"
                className="dd-list-link"
                onClick={(e) => {
                  handleOnClick(item);
                  clickItem(index);
                }}
              >
                <span className={"menu__left"}>{t(`${item.value}`)}</span>

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
              </div>

              <ul className="submenu">
                {item?.category.map((elem) => (
                  <Link key={`category-item_${elem.id}`} to={`${elem.link}`}>
                    <li className="submenu__elem">{t(`${elem.value}`)}</li>
                  </Link>
                ))}
              </ul>
            </li>
          )}
        </>
      ))}
    </nav>
  );
};

export default Menu;
