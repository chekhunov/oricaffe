import React from "react";
import cn from 'classnames'

export default function Container({children, classN=''}) {
  return (
    <div className={cn("container", `${classN}`)}>
      {children}
    </div>
  );
}
