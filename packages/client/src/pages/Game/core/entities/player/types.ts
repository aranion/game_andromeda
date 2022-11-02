import type { GameObjectConfig } from '../game-object/types';
import type { Coordinates } from '../../types';

export type PlayerSkin = {
  healthy: string;
  battered: string;
  damaged: string;
  wrecked: string;
};

export type PlayerConfig = Omit<GameObjectConfig, 'imageSrc'> & {
  direction: Coordinates;
  radius: number;
  lives: number;
  maxLives: number;
  shielded?: boolean;
  imageSrc: PlayerSkin;
};
