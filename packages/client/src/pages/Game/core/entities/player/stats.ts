import { INITIAL_SPEED } from '../../constants';
import type { PlayerConfig } from './types';

export const defaultPlayerStats: Omit<PlayerConfig, 'canvas' | 'ctx'> = {
  speed: INITIAL_SPEED,
  radius: 17,
  lives: 4,
  maxLives: 5,
};
