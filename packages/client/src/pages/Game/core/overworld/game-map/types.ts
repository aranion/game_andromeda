import { Player } from '../../entities/player';
import { GameObject } from '../../entities/game-object';
import type { CanvasProperties, GameMapConfig } from '../../types';
import { SceneTransition } from '../scene-transition';

export type GameMapConstrConfig = GameMapConfig & {
  player: Player;
  sceneTransition: SceneTransition;
} & CanvasProperties;

export type UpdateParams = {
  frame: number;
};

export type Collide = GameObject & { getDistance: number };
