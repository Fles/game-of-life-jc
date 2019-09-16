export interface CellProps {
  isAlive: boolean;
  posx: number;
  posy: number;
  onUpdate: () => void
}