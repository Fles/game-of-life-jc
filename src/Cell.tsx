import React from "react";

export interface CellProps {
  className?: string;
  isAlive: boolean;
  key: any;
  posx: number;
  posy: number;
}

export const Cell = (props: CellProps) => (
  <div
    onClick={() => console.log(props)}
    className={`${props.isAlive ? "alive" : ""}`}
  />
);
