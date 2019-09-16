import React from "react";
import { resetUrlHash } from "../util";
import Button from "../Button/Button";
import './Menu.css'
import { MenuProps } from "./MenuTypes";

const onStop = (props: MenuProps) => props.setRenderImage(0);
const onPlay = (props: MenuProps) =>
  props.setRenderImage(props.renderImage + 1);
const onReload = () => window.location.reload();
const onReset = (props: MenuProps) => {
  resetUrlHash();
  window.location.reload();
  props.setRenderImage(0);
};


function Menu(props: MenuProps) {
  const shouldStartRender = props.renderImage > 0;
  const { speed, setSpeed } = props;
  return (
    <div className="Menu">
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
          Speed x{speed === 1 ? 2 : 1}
        </Button>
      </div>
    </div>
  );
}

export { Menu };
