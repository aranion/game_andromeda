import { Player } from '../../entities/player';
import { Resource } from '../../entities/resource';
import { CanvasProperties, GameMapConfig } from '../../types';

export type GameMapConstrConfig = GameMapConfig & {
  player: Player;
} & CanvasProperties;

export type UpdateParams = {
  frame: number;
};

export type Collide = Resource;
