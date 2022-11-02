import { AnimationKey } from '../../constants';
import { AnimationType } from '../../animations.config';

// @ts-ignore
export const playerAnimations: Pick<AnimationType, 'spaceship-fly'> = {
  [AnimationKey.SpaceshipFly]: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
};
