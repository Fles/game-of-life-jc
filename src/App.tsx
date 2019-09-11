import React, { useState } from "react";
import Grid from "./Grid";

import "./App.css";

function App() {
  const [renderImage, setRenderImage] = useState(0);

  return (
    <div className="App">
      <Grid />
    </div>
  );
}

export default App;
