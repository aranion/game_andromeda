import { AnimationKey } from '../../constants';
import { AnimationType } from '../../animations.config';

type PlayerAnimationType = AnimationKey.SpaceshipFly;

export const playerAnimations: Pick<AnimationType, PlayerAnimationType> = {
  [AnimationKey.SpaceshipFly]: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
};
