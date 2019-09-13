import React from "react";
import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const { onClick, children } = props;

  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
