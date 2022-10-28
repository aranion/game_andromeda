import { GameObjectConfig } from '../game-object/types';

export type PlayerConfig = GameObjectConfig & {
  radius: number;
  lives: number;
  maxLives: number;
  shielded?: boolean;
};
