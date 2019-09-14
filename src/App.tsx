import React, { useState } from "react";
import { TopMenu } from "./TopMenu";
import Grid from "./Grid";
import "./App.css";

function App() {
  const [renderImage, setRenderImage] = useState(0);
  const [speed, setSpeed] = useState(1);
  return (
    <div className="App">
      <TopMenu renderImage={renderImage} setRenderImage={setRenderImage} speed={speed} setSpeed={setSpeed}/>
      <Grid shouldStartRender={renderImage > 0} speed={speed}/>
    </div>
  );
}

export default App;
