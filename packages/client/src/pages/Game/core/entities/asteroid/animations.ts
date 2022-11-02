import { AnimationKey } from '../../constants';
import { AnimationType } from '../../animations.config';

// @ts-ignore
export const asteroidAnimations: Pick<AnimationType, 'asteroid'> = {
  [AnimationKey.Asteroid]: [[0, 0]],
};
