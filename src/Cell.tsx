import React from "react";

export interface CellProps {
  className?: string;
  isAlive: boolean;
  key: any;
  posx: number;
  posy: number;
  onUpdate: () => void
}

export const Cell = (props: CellProps) => (
  <div className={`${props.isAlive ? "alive" : ""}`} onClick={props.onUpdate}/>
);
