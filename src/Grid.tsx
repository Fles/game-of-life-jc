import React from 'react';

function generateCells(amount : number) {
  let cells : any[] = [];
  for (var i = 0; i < amount; i++) {
    cells.push(
      <div className={i.toString()}></div>
    )
  }
  return cells
}

function Grid() {
  const cells = generateCells(100)
  return (
    <div className="Grid">
      {cells}
    </div>
  );
}

export default Grid;
