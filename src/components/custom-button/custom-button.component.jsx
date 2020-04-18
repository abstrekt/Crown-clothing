import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, iverted, ...otherProps }) => (
  <button
    className= {`${iverted ? 'iverted' : '' } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
