import React, { useState } from "react";
import { Menu } from "../Menu";
import { Grid } from "../Grid";
import "./App.css";

function App() {
  const [renderImage, setRenderImage] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [player, setPlayer] = useState('black');
  return (
    <div className="App">
      <div onClick={() => setPlayer('white')}>set white</div>
      <div onClick={() => setPlayer('black')}>set black</div>
      <Menu renderImage={renderImage} setRenderImage={setRenderImage} speed={speed} setSpeed={setSpeed}/>
      <Grid player={player} shouldStartRender={renderImage > 0} speed={speed}/>
    </div>
  );
}

export { App };
