import React, { useContext } from "react";

import ViewContext from '../../../utils/ViewPoppupContext'

export default function ToCart() {
  const { data } = useContext(ViewContext);
  return (
    <div>
      {data.id}
      {data.name}
    </div>
  );
}
