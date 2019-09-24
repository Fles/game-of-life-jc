import { MenuProps } from "./MenuTypes";
import Button from "../Button/Button";
import React from "react";
import "./Menu.css";
import { convertGridToString } from "../util";

const onStop = (props: MenuProps) => props.setRenderImage(0);
const onPlay = (props: MenuProps) =>
  props.setRenderImage(props.renderImage + 1);
const onSaveSnapshot = (props: MenuProps) => props.setSnapshot(convertGridToString(props.grid))

const Menu: React.FunctionComponent<MenuProps> = props => {
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
        <Button onClick={() => onSaveSnapshot(props)}>Snapshot</Button>
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
};

export { Menu };
