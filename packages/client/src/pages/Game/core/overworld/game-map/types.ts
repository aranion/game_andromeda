import { Player } from '../../entities/player';
import { CanvasProperties, GameMapConfig } from '../../types';
import { Resource } from '../../entities/resource';

export type GameMapConstrConfig = GameMapConfig & {
  player: Player;
} & CanvasProperties;

export type UpdateParams = {
  frame: number;
};

export type Collide = Resource;
