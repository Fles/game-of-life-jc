import { CellProps } from "./CellTypes";
import React from "react";
import "./Cell.css";

const Cell: React.FunctionComponent<CellProps> = props => (
  <div
    className={`Cell ${props.isAlive ? "alive" : ""}`}
    onClick={props.onUpdate}
  />
);

export { Cell };
