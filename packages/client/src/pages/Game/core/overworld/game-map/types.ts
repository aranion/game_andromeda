import { Player } from '../../entities/player';
import { GameMapConfig } from '../../types';

export type GameMapConstrConfig = GameMapConfig & {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
};

export type UpdateObjectsParams = {
  player: Player;
};
