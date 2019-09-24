import React from "react";

interface SidebarProps {
  snapshots: any[];
  className?: string;
  grid: any;
}

const Sidebar: React.FunctionComponent<SidebarProps> = React.memo(props => {
  return (
    <ul style={{ position: "absolute", right: 90, top: 0 }}>
      {props.snapshots.map((snapshot: any, i: number) => (
        <li key={i}>{snapshot}</li>
      ))}
    </ul>
  );
});

export { Sidebar };
