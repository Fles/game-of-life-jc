import { ButtonProps } from "./ButtonTypes";
import React from "react";
import "./Button.css";

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { onClick, children } = props;
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
