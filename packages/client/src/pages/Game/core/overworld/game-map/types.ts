import { Player } from '../../entities/player';
import { GameObject } from '../../entities/game-object';
import type { CanvasProperties, GameMapConfig } from '../../types';

export type GameMapConstrConfig = GameMapConfig & {
  player: Player;
} & CanvasProperties;

export type UpdateParams = {
  frame: number;
};

export type Collide = GameObject & { getDistance: number };
