import { Dispatch, SetStateAction } from "react";

export interface GridProps {
  shouldStartRender: boolean;
  speed: number;
  player: string;
  renderImage: number;
  setPlayer: Dispatch<SetStateAction<string>>
}
