import React, { useState } from "react";
import { Menu } from "../Menu";
import { Grid } from "../Grid";
import "./App.css";

function App() {
  const [renderImage, setRenderImage] = useState(0);
  const [speed, setSpeed] = useState(1);

  return (
    <div className="App">
      <Menu
        renderImage={renderImage}
        setRenderImage={setRenderImage}
        speed={speed}
        setSpeed={setSpeed}
      />
      <Grid
        renderImage={renderImage}
        shouldStartRender={renderImage > 0}
        speed={speed}
      />
    </div>
  );
}

export { App };
