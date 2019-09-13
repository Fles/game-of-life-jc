import React, { useState, useEffect } from "react";
import { Cell } from "./Cell";
import { initGrid, updateUrlHash } from "./util";
import { GridProps } from "./types";

let emptyGrid = initGrid(50);

export const Grid = (props: GridProps) => {
  const [grid, setGrid] = useState(emptyGrid);

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
    let gridNext = grid.map((row: number[], row_index: number) =>
      row.map((currentVal: number, cell_index: number) =>
        testCell(row_index, cell_index, currentVal)
      )
    );
    setGrid(gridNext);
  };

  const cells = grid.map((row: number[], rowIndex: number) =>
    row.map((col: number, colIndex: number) => (
      <Cell
        isAlive={!!col}
        key={`${rowIndex}${colIndex}`}
        posx={rowIndex}
        posy={colIndex}
        onUpdate={() => {
          const nextGrid = [...grid.map((row: number[]) => [...row])];
          nextGrid[rowIndex][colIndex] = col === 1 ? 0 : 1;
          updateUrlHash(rowIndex, colIndex, !!col);
          setGrid(nextGrid);
        }}
      />
    ))
  );

  useEffect(() => {
    if (props.shouldStartRender) {
      renderGrid();
    } else {
    }
  });

  return <div className="Grid">{cells}</div>;
};
export default Grid;
