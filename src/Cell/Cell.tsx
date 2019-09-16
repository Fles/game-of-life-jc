import React from "react";
import "./Cell.css";

export interface CellProps {
  className?: string;
  isAlive: boolean;
  key: any;
  posx: number;
  posy: number;
  onUpdate: () => void
}

const Cell = (props: CellProps) => (
  <div className={`Cell ${props.isAlive ? "alive" : ""}`} onClick={props.onUpdate}/>
);

export { Cell }