import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

const MenuElement = ({
  item,
  index,
  id,
  value,
  category,
  link,
  name,
  sx,
  handleOnClick,
  clickItem,
  setActivePopup,
}) => {
  const { t } = useTranslation();

  console.log(link, "link");

  return (
    <>
      {!category ? (
        <Link
          key={`without-category_${id}-${name}`}
          to={link}
          onClick={setActivePopup}
        >
          <li style={sx} className={cn("menu__item")} key={id}>
            <div
              type="link"
              className="dd-list-link"
              onClick={() => {
                window.scrollTo(0, 0);
                handleOnClick(item);
                clickItem(index);
              }}
            >
              <span className={"menu__left"}>{t(`${value}`)}</span>
            </div>
          </li>
        </Link>
      ) : (
        <li className={cn("menu__item")} key={`category_${id}-${name}`}>
          <div
            type="link"
            className="dd-list-link"
            onClick={(e) => {
              handleOnClick(item);
              clickItem(index);
            }}
          >
            <span className={"menu__left"}>{t(`${value}`)}</span>

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
            {category?.map((elem) => (
              <Link
                key={`category-item_${elem.id}`}
                to={elem.link + `/${elem.category}`}
                onClick={setActivePopup}
              >
                <li className="submenu__elem">{t(`${elem.value}`)}</li>
              </Link>
            ))}
          </ul>
        </li>
      )}
    </>
  );
};

export default MenuElement;
