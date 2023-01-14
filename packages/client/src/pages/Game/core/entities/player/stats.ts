import { INITIAL_SPEED } from '../../constants';
import type { OptionsButton } from '../../overworld/scene-transition/types';
import type { PlayerConfig } from './types';

export const getDefaultPlayerStats = (
  images: string[]
): Omit<PlayerConfig, 'canvas' | 'ctx' | 'direction' | 'sceneTransition'> => {
  const [
    baseSpaceshipHealthy,
    baseSpaceshipBattered,
    baseSpaceshipDamaged,
    baseSpaceshipWrecked,
    baseSpaceshipHealthyShield,
    baseSpaceshipBatteredShield,
    baseSpaceshipDamagedShield,
    baseSpaceshipWreckedShield,
  ] = images;

  return {
    speed: INITIAL_SPEED,
    radius: 34,
    lives: 4,
    maxLives: 5,
    skins: {
      base: {
        healthy: baseSpaceshipHealthy,
        battered: baseSpaceshipBattered,
        damaged: baseSpaceshipDamaged,
        wrecked: baseSpaceshipWrecked,
      },
      shield: {
        healthy: baseSpaceshipHealthyShield,
        battered: baseSpaceshipBatteredShield,
        damaged: baseSpaceshipDamagedShield,
        wrecked: baseSpaceshipWreckedShield,
      },
    },
  };
};

export const defaultMoveTime = 3000;

export const configRestartBtn: OptionsButton = {
  text: 'New Game',
  cssClassName: 'game-over',
  label: {
    text: 'Your ship was consumed by the cosmic void...',
    cssClassName: 'game__label-game-over',
  },
};
