import React from "react";

export interface CellProps {
  className?: string;
  isAlive: boolean;
}

export const Cell = (props: CellProps) => (
  <div className={`${props.isAlive ? "alive" : ""}`} />
);
