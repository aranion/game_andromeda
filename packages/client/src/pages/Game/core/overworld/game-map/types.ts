import type { Player } from '../../entities/player';
import type { GameObject } from '../../entities/game-object';
import type { CanvasProperties, GameMapConfig } from '../../types';
import type { SceneTransition } from '../scene-transition';
import type { GameTheme } from '../game-theme';

export type GameMapConstrConfig = GameMapConfig & {
  player: Player;
  sceneTransition: SceneTransition;
  gameTheme: GameTheme;
} & CanvasProperties;

export type UpdateParams = {
  frame: number;
};

export type Collide = GameObject & { getDistance: number };
