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
  setActivePopup,
}) => {
  const [selection, setSelection] = React.useState([]);

  const handleOnClick = (item) => {
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
  };

  const handleClickItem = (val) => {
    setActiveId(val);
  };

  return (
    <nav className={cn("menu")}>
      {menuItems?.map((item, index) => (
        <MenuElement
          key={`${item.id}-${index}`}
          item={item}
          index={index}
          sx={sx}
          handleOnClick={handleOnClick}
          clickItem={handleClickItem}
          setActivePopup={setActivePopup}
          {...item}
        />
      ))}
    </nav>
  );
};

export default Menu;
