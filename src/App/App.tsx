import React, { useState } from "react";
import { Menu } from "../Menu";
import { Grid } from "../Grid";
import "./App.css";

function App() {
  const [renderImage, setRenderImage] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [player, setPlayer] = useState("black");

  return (
    <div className="App">
      <Menu
        setPlayer={setPlayer}
        renderImage={renderImage}
        player={player}
        setRenderImage={setRenderImage}
        speed={speed}
        setSpeed={setSpeed}
      />
      <Grid
        renderImage={renderImage}
        player={player}
        setPlayer={setPlayer}
        shouldStartRender={renderImage > 0}
        speed={speed}
      />
    </div>
  );
}

export { App };
