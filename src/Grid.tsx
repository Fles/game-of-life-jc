import React, { useState } from "react";
import { Cell } from "./Cell";

function Grid() {
  const [matrix, setMatrix] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const cells = matrix.map((row: number[], rowIndex: number) =>
    row.map((col: number, colIndex: number) => (
      <Cell isAlive={!!col} key={`${rowIndex}${colIndex}`} />
    ))
  );

  const testCell = (x: number, y: number, currentVal: number) => {
    console.log("x:", x, "y:", y, "currentVal:", currentVal);
    // reset to zero
    return 0;
  };

  const renderGrid = () => {
    let matrixNext = matrix.map((row: number[], row_index: number) =>
      row.map((currentVal: number, cell_index: number) =>
        testCell(row_index, cell_index, currentVal)
      )
    );

    setMatrix(matrixNext);
  };

  return (
    <div className="Grid" onClick={renderGrid}>
      {cells}
    </div>
  );
}
export default Grid;
