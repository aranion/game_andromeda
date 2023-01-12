import type { Player } from '../../entities/player';
import type { GameObject } from '../../entities/game-object';
import type { CanvasProperties, GameMapConfig } from '../../types';
import type { SceneTransition } from '../scene-transition';

export type GameMapConstrConfig = {
  player: Player;
  sceneTransition: SceneTransition;
  mapConfig: GameMapConfig;
} & CanvasProperties;

export type UpdateParams = {
  frame: number;
};

export type Collide = GameObject & { getDistance: number };
