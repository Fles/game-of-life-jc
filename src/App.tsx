import React, { useState } from "react";
import Grid from "./Grid";

import "./App.css";
import { resetUrlHash } from "./util";
import Button from "./Button";

function App() {
  const [renderImage, setRenderImage] = useState(0);
  return (
    <div className="App">
      <div className="Tools">
        {renderImage > 0 ? (
          <Button onClick={() => setRenderImage(0)}>Stop ⃞</Button>
        ) : (
          <Button onClick={() => setRenderImage(renderImage + 1)}>
            Play ▷
          </Button>
        )}

        <Button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload ↻
        </Button>

        <Button
          onClick={() => {
            resetUrlHash();
            window.location.reload();
            setRenderImage(0);
          }}
        >
          Reset ⓧ
        </Button>
      </div>

      <Grid shouldStartRender={renderImage > 0} />
    </div>
  );
}

export default App;
