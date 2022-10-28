import { PlayerConfig } from './types';

export const defaultPlayerStats: Omit<PlayerConfig, 'canvas' | 'ctx'> = {
  speed: 100,
  radius: 17,
  lives: 4,
  maxLives: 5
};
