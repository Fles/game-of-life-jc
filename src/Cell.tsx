import React, {useState} from 'react';
const toggleCellLife = (props : any) => {
  if (props.target.getAttribute("class") === "Cell") {
    props.target.className = "Cell alive"
  } else {
    props.target.className = "Cell"
  }
}
interface CellProps {
  className?: string
  pos : string
}
export const Cell = (props : CellProps) => {
  const [alive,
    setAlive] = useState('false')

  const {className, pos} = props

  return <div
    onClick={toggleCellLife}
    className={`Cell${className
    ? className
    : ""}`}
    key={className}
    ref={pos}
    attr-pos={pos}/>
}
export default Cell;
