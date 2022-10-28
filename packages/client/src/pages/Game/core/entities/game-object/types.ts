import { Coordinates } from '../../types';

export type GameObjectConfig = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  position?: Coordinates;
  speed?: number;
  radius?: number;
};
