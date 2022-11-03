import { Player } from '../../entities/player';
import type { CanvasProperties, GameMapConfig } from '../../types';

export type GameMapConstrConfig = GameMapConfig & {
  player: Player;
} & CanvasProperties;

export type UpdateParams = {
  frame?: number;
};

export type handleResourcesParams = UpdateParams & {
  player: Player;
};

