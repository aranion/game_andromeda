import { Player } from '../../entities/player';
import { CanvasProperties, Coordinates, GameMapConfig } from '../../types';

export type GameMapConstrConfig = GameMapConfig & {
  player: Player;
};

export type UpdateParams = {
  frame?: number;
  playerDirections: Coordinates;
} & CanvasProperties;

export type DrawParams = CanvasProperties;
