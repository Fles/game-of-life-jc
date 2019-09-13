import React, { useState } from "react";
import Grid from "./Grid";

import "./App.css";
import { resetUrlHash } from "./util";

function App() {
  const [renderImage, setRenderImage] = useState(0);
  return (
    <div className="App">
      {renderImage > 0 ? (
        <button onClick={() => setRenderImage(0)}>Stop</button>
      ) : (
        <button onClick={() => setRenderImage(renderImage + 1)}>Play</button>
      )}
      <button onClick={() => {
        resetUrlHash()
        setRenderImage(0)
      }}>Reset url</button>
      <Grid shouldStartRender={renderImage > 0} />
    </div>
  );
}

export default App;
