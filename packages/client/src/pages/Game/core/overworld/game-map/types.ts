import type { Player } from '../../entities/player';
import type { GameObject } from '../../entities/game-object';
import type { CanvasProperties, GameMapConfig } from '../../types';
import type { SceneTransition } from '../scene-transition';
import type { GameTheme } from '../game-theme';

export type GameMapConstrConfig = {
  player: Player;
  sceneTransition: SceneTransition;
  mapConfig: GameMapConfig;
  gameTheme: GameTheme;
} & CanvasProperties;

export type UpdateParams = {
  frame: number;
};

export type Collide = GameObject & { getDistance: number };
