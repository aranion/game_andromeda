import { AnimationKey } from '../../constants';
import { AnimationType } from '../../animations.config';

export const playerAnimations: Pick<AnimationType, AnimationKey.SpaceshipFly> =
  {
    [AnimationKey.SpaceshipFly]: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
  };
