import React from "react";
import { updateUrlHash, URLGrid } from "./util";

interface SidebarProps {
  snapshots: any[];
  className?: string;
  grid: any;
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
}

const Sidebar: React.FunctionComponent<SidebarProps> = React.memo(props => {
  return (
    <ul style={{ position: "absolute", right: 60, top: 0 }}>
      {props.snapshots.map((snapshot: any, i: number) => (
        <li
          key={i}
          onClick={() => {
            updateUrlHash(snapshot);
            const urlgrid = URLGrid(50);
            props.setGrid(urlgrid);
          }}
        >
          snap_{i}
        </li>
      ))}
    </ul>
  );
});

export { Sidebar };
