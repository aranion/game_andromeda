import { INITIAL_SPEED } from '../../constants';
import type { OptionsButton } from '../../overworld/scene-transition/types';
import type { PlayerConfig } from './types';

export const getDefaultPlayerStats = (
  images: string[]
): Omit<
  PlayerConfig,
  'canvas' | 'ctx' | 'direction' | 'sceneTransition' | 'pressedKey'
> => {
  const [
    baseSpaceshipHealthy,
    baseSpaceshipBattered,
    baseSpaceshipDamaged,
    baseSpaceshipWrecked,
    baseSpaceshipHealthyShield,
    baseSpaceshipBatteredShield,
    baseSpaceshipDamagedShield,
    baseSpaceshipWreckedShield,
    explosion,
  ] = images;

  return {
    speed: INITIAL_SPEED,
    radius: 34,
    lives: 4,
    maxLives: 6,
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
      destroyed: {
        explosion,
      },
    },
  };
};

export const defaultMoveTime = 3000;

export const configRestartBtn: OptionsButton = {
  text: 'New Game',
  cssClassName: 'game__button-game-over',
  label: {
    text: 'Your ship was consumed by the cosmic void...',
    cssClassName: 'game__label-game-over',
  },
};
