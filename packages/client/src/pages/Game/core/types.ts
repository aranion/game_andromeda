export type Coordinates = {
  x: number;
  y: number;
};

export type Axis = keyof Coordinates;

export interface GameEntityInterface {
  getPosition: Coordinates;
  getRadius: number;
}

export type GameMapConfig = {
  spawnInterval: {
    alien: number;
    asteroid: number;
    resource: number;
  };
  maxResource: number;
};

export type CanvasProperties = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
};
