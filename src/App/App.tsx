import React, { useState } from "react";
import { Menu } from "../Menu";
import { Grid } from "../Grid";
import "./App.css";
//import "./music";

function App() {
  const [renderImage, setRenderImage] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [player, setPlayer] = useState("black");

  return (
    <div className="App">
      <Grid
        renderImage={renderImage}
        player={player}
        shouldStartRender={renderImage > 0}
        speed={speed}
      />
      <Menu
        setPlayer={setPlayer}
        renderImage={renderImage}
        player={player}
        setRenderImage={setRenderImage}
        speed={speed}
        setSpeed={setSpeed}
      />
    </div>
  );
}

export { App };
