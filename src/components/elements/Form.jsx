import React from "react";

export const Form = ({children, ...props}) => {

  return (<form className="form-order__form" {...props} noValidate>
    {children}
  </form>);
};
