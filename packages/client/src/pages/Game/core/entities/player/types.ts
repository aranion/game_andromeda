import { GameObjectConfig } from '../game-object/types';
import { CanvasProperties, Coordinates } from '../../types';

export type PlayerConfig = GameObjectConfig & {
  radius: number;
  lives: number;
  maxLives: number;
  shielded?: boolean;
};

export type UpdateParams = {
  direction: Coordinates;
} & CanvasProperties;
