import type { GameStatusList } from 'src/store/game/type';

export type GameConfig = {
  canvas: HTMLCanvasElement;
  goHome: () => void;
};

export type GameStatus = keyof typeof GameStatusList;

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
  spawnInterval: SpawnInterval;
  maxResource: number;
  levelNum: number;
};

export type SpawnInterval = {
  alien: number;
  asteroid: number;
  resource: number;
};

export type CanvasProperties = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
};
