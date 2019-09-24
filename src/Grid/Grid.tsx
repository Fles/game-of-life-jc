import React, { useEffect } from "react";
import { Cell } from "../Cell/Cell";
import { updateUrlHash, convertGridToString } from "../util";
import "./Grid.css";
import { GridProps } from "./GridTypes";

const Grid: React.FunctionComponent<GridProps> = props => {
  const { grid, setGrid } = props;
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
      return liveNeibhors < 2 || liveNeibhors > 3 ? 0 : 1;
    } else if (currentVal === 0) {
      return liveNeibhors === 3 ? 1 : 0;
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
        className={`${!!col ? " alive" : ""}`}
        key={`${rowIndex}${colIndex}`}
        posx={rowIndex}
        posy={colIndex}
        onUpdate={() => {
          const nextGrid = [...grid.map((row: number[]) => [...row])];
          nextGrid[rowIndex][colIndex] = col === 1 ? 0 : 1;
          setGrid(nextGrid);
        }}
      />
    ))
  );

  useEffect(() => {
    const { speed } = props;
    if (props.shouldStartRender) {
      const timer = setTimeout(
        () => {
          renderGrid();
        },
        speed === 1 ? 42 : 0
      );
      return () => clearTimeout(timer);
    } else {
      updateUrlHash(convertGridToString(grid));
    }
  });

  return <div className="Grid">{cells}</div>;
};
export { Grid };
