import type { GameObjectConfig } from '../game-object/types';

export type AsteroidConfig = {
  rotateSpeed: number;
  rotateVector: -1 | 1;
  moveAngle: number;
  radius: number;
} & Omit<GameObjectConfig, 'position'>;
