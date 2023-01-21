import { playerSkins } from './skins';
import { INITIAL_SPEED } from '../../constants';
import type { PlayerConfig } from './types';

export const defaultPlayerStats: Omit<
  PlayerConfig,
  'canvas' | 'ctx' | 'direction' | 'sceneTransition' | 'pressedKey'
> = {
  speed: INITIAL_SPEED,
  radius: 34,
  lives: 4,
  maxLives: 5,
  imageSrc: playerSkins.base,
};
