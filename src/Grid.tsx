import React, { useState, useEffect } from "react";
import { Cell } from "./Cell";

function Grid() {
  const initMatrix = (size: number) =>
    Array(size)
      .fill(null)
      .map(() =>
        Array(size)
          .fill(null)
          .map(() => 0)
      );

  let fakeMatrix = initMatrix(50);
  fakeMatrix[2][4] = 1;
  fakeMatrix[3][5] = 1;
  fakeMatrix[4][3] = 1;
  fakeMatrix[4][4] = 1;
  fakeMatrix[4][5] = 1;
  fakeMatrix[14][25] = 1;
  fakeMatrix[14][26] = 1;
  fakeMatrix[14][27] = 1;
  fakeMatrix[13][22] = 1;
  fakeMatrix[13][23] = 1;
  fakeMatrix[13][24] = 1;
  fakeMatrix[13][25] = 1;
  fakeMatrix[14][26] = 1;
  fakeMatrix[14][27] = 1;
  fakeMatrix[14][28] = 1;
  fakeMatrix[14][29] = 1;
  fakeMatrix[14][22] = 1;
  fakeMatrix[15][23] = 1;
  fakeMatrix[15][26] = 1;
  // I know :)

  const [matrix, setMatrix] = useState(fakeMatrix);

  const countLiveCells = (x: number, y: number): number => {
    const tL = matrix[x - 1] ? (matrix[y - 1] ? matrix[x - 1][y - 1] : 0) : 0;
    const tM = matrix[x - 1] ? matrix[x - 1][y] : 0;
    const tR = matrix[x - 1]
      ? matrix[x - 1][y + 1]
        ? matrix[x - 1][y + 1]
        : 0
      : 0;
    const mL = matrix[x][y - 1] ? matrix[x][y - 1] : 0;
    const mR = matrix[x][y + 1] ? matrix[x][y + 1] : 0;
    const bL = matrix[x + 1]
      ? matrix[x + 1][y - 1]
        ? matrix[x + 1][y - 1]
        : 0
      : 0;
    const bM = matrix[x + 1] ? matrix[x + 1][y] : 0;
    const bR = matrix[x + 1]
      ? matrix[x + 1][y + 1]
        ? matrix[x + 1][y + 1]
        : 0
      : 0;

    return tL + tM + tR + mL + mR + bL + bM + bR;
  };

  const cells = matrix.map((row: number[], rowIndex: number) =>
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
    let matrixNext = matrix.map((row: number[], row_index: number) =>
      row.map((currentVal: number, cell_index: number) =>
        testCell(row_index, cell_index, currentVal)
      )
    );
    setMatrix(() => [...matrixNext]);
  };

  useEffect(() => {
    renderGrid();
  });

  return <div className="Grid">{cells}</div>;
}
export default Grid;
