import { playerSkins } from './skins';
import { INITIAL_SPEED } from '../../constants';
import { PlayerConfig } from './types';

export const defaultPlayerStats: Omit<PlayerConfig, 'canvas' | 'ctx' | 'direction'> = {
  speed: INITIAL_SPEED,
  radius: 17,
  lives: 4,
  maxLives: 5,
  imageSrc: playerSkins.base
};
