import React from "react";

import cn from "classnames";
import MenuElement from "./components/MenuItem";

const Menu = ({
  sx = {},
  multiSelect = false,
  menuItems = [],
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
    <nav className={cn("menu")}>
      {menuItems?.map((item, index) => (
        <MenuElement
          key={`${item.id}-${index}`}
          item={item}
          index={index}
          {...item}
          sx={sx}
          handleOnClick={handleOnClick}
          clickItem={clickItem}
        />
      ))}
    </nav>
  );
};

export default Menu;
