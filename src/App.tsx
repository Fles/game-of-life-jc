import React, { useState, useEffect } from "react";
import Grid from "./Grid";

import "./App.css";

function App() {
  const [renderImage, setRenderImage] = useState(0);

  useEffect(() => {
    
  })
  return (
    <div className="App">
      {renderImage > 0 ? (
        <button onClick={() => setRenderImage(0)}>Stop</button>
      ) : (
        <button onClick={() => setRenderImage(renderImage + 1)}>Play</button>
      )}
      <Grid shouldStartRender={renderImage > 0} />
    </div>
  );
}

export default App;
