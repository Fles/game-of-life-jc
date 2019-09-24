import React, { useState } from "react";
import { Menu } from "../Menu";
import { Grid } from "../Grid";
import "./App.css";
import { URLGrid } from "../util";
import { Sidebar } from "Sidebar";

const urlGrid = URLGrid(50);

function App() {
  const [grid, setGrid] = useState(urlGrid);
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
      <Sidebar setGrid={setGrid} grid={grid} snapshots={snapshots} />
    </div>
  );
}

export { App };
