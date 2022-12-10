import React from "react";
import classNames from "classnames";
import { Context } from "../../context";

export default function ListPlusPopup({
  activeId,
  setActiveId,
  index,
  id,
  title,
  text,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setContext } = React.useContext(Context);

  function addedOverflowForBody() {
    document.body.classList.add("overflowe");
  }
  return (
    <>
      <li key={id} className={classNames("list-popup__item", "list-popup")}>
        <span
          className={"list-popup__inner-title"}
          onClick={(e) => {
            setContext({ title, text, isOpen: true, setIsOpen });
            addedOverflowForBody();
          }}
        >
          <span className={"list-popup__text-title"}>{title}</span>
          <span className={"list-popup__inner-lnk"}>
            <span className="list-popup__desc-lnk">Подробнее</span>
            <span className="icon-ardown"></span>
          </span>
        </span>
      </li>
    </>
  );
}
