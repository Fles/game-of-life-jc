import React, { useState, useEffect } from "react";
import { Cell } from "./Cell";

export interface GridProps {
  shouldStartRender: boolean;
}

export const Grid = (props: GridProps) => {
  const initGrid = (size: number) =>
    Array(size)
      .fill(null)
      .map(() =>
        Array(size)
          .fill(null)
          .map(() => 0)
      );

  let fakeGrid = initGrid(50);
  fakeGrid[2][2] = 1;
  fakeGrid[2][3] = 1;
  fakeGrid[2][4] = 1;

  const [grid, setGrid] = useState(fakeGrid);

  const countLiveCells = (x: number, y: number): number => {
    const tL = grid[x - 1] ? (grid[y - 1] ? grid[x - 1][y - 1] : 0) : 0;
    const tM = grid[x - 1] ? grid[x - 1][y] : 0;
    const tR = grid[x - 1] ? (grid[x - 1][y + 1] ? grid[x - 1][y + 1] : 0) : 0;
    const mL = grid[x][y - 1] ? grid[x][y - 1] : 0;
    const mR = grid[x][y + 1] ? grid[x][y + 1] : 0;
    const bL = grid[x + 1] ? (grid[x + 1][y - 1] ? grid[x + 1][y - 1] : 0) : 0;
    const bM = grid[x + 1] ? grid[x + 1][y] : 0;
    const bR = grid[x + 1] ? (grid[x + 1][y + 1] ? grid[x + 1][y + 1] : 0) : 0;

    return tL + tM + tR + mL + mR + bL + bM + bR;
  };

  const cells = grid.map((row: number[], rowIndex: number) =>
    row.map((col: number, colIndex: number) => (
      <Cell
        isAlive={!!col}
        key={`${rowIndex}${colIndex}`}
        posx={rowIndex}
        posy={colIndex}
      />
    ))
  );

  const testCell = (x: number, y: number, currentVal: number) => {
    let liveNeibhors = countLiveCells(x, y);
    if (currentVal === 1) {
      if (liveNeibhors < 2 || liveNeibhors > 3) {
        return 0;
      }
      return 1;
    } else if (currentVal === 0) {
      if (liveNeibhors === 3) {
        return 1;
      }
      return 0;
    }
    return 0;
  };

  const renderGrid = () => {
    let matrixNext = grid.map((row: number[], row_index: number) =>
      row.map((currentVal: number, cell_index: number) =>
        testCell(row_index, cell_index, currentVal)
      )
    );
    setGrid(() => [...matrixNext]);
  };

  useEffect(() => {
    if (props.shouldStartRender) {
      renderGrid();
    }
  });

  return <div className="Grid">{cells}</div>;
};
export default Grid;
