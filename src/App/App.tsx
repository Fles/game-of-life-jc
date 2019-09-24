import React, { useState } from "react";
import { Menu } from "../Menu";
import { Grid } from "../Grid";
import "./App.css";
import { initGrid, readFromUrlHash } from "../util";
import { Sidebar } from "Sidebar";

let emptyGrid = initGrid(50);

const urlUpdates = readFromUrlHash();
urlUpdates.forEach((update: string) => {
  const row = +update.split(".")[0];
  const col = +update.split(".")[1];
  emptyGrid[row][col] = 1;
});

function App() {
  const [grid, setGrid] = useState(emptyGrid);

  const [renderImage, setRenderImage] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [snapshots, setSnapshots] = useState([[]]);

  const setSnapshot = (snapshot: any) => {
    setSnapshots((snapshots: any) => [...snapshots, snapshot]);
  };

  return (
    <div className="App">
      <Menu
        grid={grid}
        renderImage={renderImage}
        setRenderImage={setRenderImage}
        speed={speed}
        setSpeed={setSpeed}
        setSnapshot={setSnapshot}
      />
      <Grid
        grid={grid}
        setGrid={setGrid}
        renderImage={renderImage}
        shouldStartRender={renderImage > 0}
        speed={speed}
      />

      <Sidebar grid={grid} snapshots={snapshots}/>
    </div>
  );
}

export { App };
