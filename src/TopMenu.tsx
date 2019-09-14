import React from "react";
import { resetUrlHash } from "./util";
import Button from "./Button";
import { TopMenuProps } from "./types";

const onStop = (props: TopMenuProps) => props.setRenderImage(0);
const onPlay = (props: TopMenuProps) =>
  props.setRenderImage(props.renderImage + 1);
const onReload = () => window.location.reload();
const onReset = (props: TopMenuProps) => {
  resetUrlHash();
  window.location.reload();
  props.setRenderImage(0);
};

function TopMenu(props: TopMenuProps) {
  const shouldStartRender = props.renderImage > 0;
  const { speed, setSpeed } = props;
  return (
    <div className="TopMenu">
      <div>
        {shouldStartRender ? (
          <Button onClick={() => onStop(props)}>Stop ⃞</Button>
        ) : (
          <Button onClick={() => onPlay(props)}>Play ▷</Button>
        )}

        <Button onClick={() => onReload()}>Reload ↻</Button>

        <Button onClick={() => onReset(props)}>Reset ⓧ</Button>
      </div>
      <div>
        <Button
          onClick={() => {
            setSpeed(speed === 1 ? 2 : 1);
          }}
        >
          Speed x{speed == 1 ? 2 : 1}
        </Button>
      </div>
    </div>
  );
}

export { TopMenu };
