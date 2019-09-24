export interface MenuProps {
  [key: string]: any;
  renderImage: number;
  setRenderImage: React.Dispatch<React.SetStateAction<number>>;
  grid: any[]
  speed: number;
  setSpeed:React.Dispatch<React.SetStateAction<number>>;
  setSnapshot: (_:any) => void
}