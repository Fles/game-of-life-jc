import React from "react";
import './Button.css'
import { ButtonProps } from "./ButtonTypes";

function Button(props: ButtonProps) {
  const { onClick, children } = props;

  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
