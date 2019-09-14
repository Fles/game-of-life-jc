import React, { useState } from "react";
import { TopMenu } from "./TopMenu";
import Grid from "./Grid";
import "./App.css";

function App() {
  const [renderImage, setRenderImage] = useState(0);
  return (
    <div className="App">
      <TopMenu renderImage={renderImage} setRenderImage={setRenderImage} />
      <Grid shouldStartRender={renderImage > 0} />
    </div>
  );
}

export default App;
