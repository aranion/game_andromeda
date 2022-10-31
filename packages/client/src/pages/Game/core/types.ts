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
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
};
