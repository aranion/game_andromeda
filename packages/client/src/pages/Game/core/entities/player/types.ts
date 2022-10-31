import { GameObjectConfig } from '../game-object/types';
import { Coordinates } from '../../types';

export type PlayerSkins = {
  healthy: string;
  battered: string;
  damaged: string;
  wrecked: string;
};

export type PlayerConfig = Omit<GameObjectConfig, 'imageSrc'> & {
  direction: Coordinates,
  radius: number;
  lives: number;
  maxLives: number;
  shielded?: boolean;
  imageSrc: PlayerSkins;
};
