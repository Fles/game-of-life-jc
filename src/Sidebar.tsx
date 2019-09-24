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
    <ul
      style={{
        position: "absolute",
        right: 150,
        top: 0,
        listStyleType: "none",
        fontFamily: '"Courier New", Courier, monospace'
      }}
    >
      {props.snapshots.map((snapshot: any, i: number) => (
        <li
          style={{ margin: 5, cursor: "pointer", border: "1px solid #777", padding: 5, borderRadius: 5, borderLeft: "2px solid #555" }}
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
