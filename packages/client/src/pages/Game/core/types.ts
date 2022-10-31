export type Coordinates = {
  x: number;
  y: number;
};

export type GameMapConfig = {
  spawnInterval: {
    alien: number;
    asteroid: number;
    resource: number;
  };
};

export type CanvasProperties = {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
}
