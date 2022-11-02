import { GameObjectConfig } from '../game-object/types';

export type AsteroidConfig = {
  rotateSpeed: number;
  rotateVector: -1 | 1;
  moveAngle: number;
  radius: number;
} & GameObjectConfig;
