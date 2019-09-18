import { CellProps } from "./CellTypes";
import React from "react";
import "./Cell.css";

const areEqual = (prevProps: CellProps, nextProps: CellProps) => {
  const prevColor = prevProps.className.slice(-5);
  const isPrevAlive = prevProps.className.includes("alive");

  const nextColor = nextProps.className.slice(-5);
  const isNextAlive = nextProps.className.includes("alive");

  let shouldRenderThisCell = true;

  if (isPrevAlive === isNextAlive && prevColor !== nextColor) {
    shouldRenderThisCell = false;
  }

  return !shouldRenderThisCell;
};

const Cell: React.FunctionComponent<CellProps> = React.memo(props => {
  return <div className={`Cell${props.className}`} onClick={props.onUpdate} />;
}, areEqual);

export { Cell };
