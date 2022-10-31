import { Player } from '../../entities/player';
import { CanvasProperties, Coordinates, GameMapConfig } from '../../types';

export type GameMapConstrConfig = GameMapConfig & {
  player: Player;
} & CanvasProperties;

export type UpdateParams = {
  frame?: number;
  playerDirections: Coordinates;
};
