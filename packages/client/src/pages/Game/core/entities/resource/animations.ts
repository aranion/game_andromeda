import { AnimationType } from '../../animations.config';
import { AnimationKey } from '../../constants';

type ResourceAnimationType =
  | AnimationKey.IronOreFly
  | AnimationKey.NickelOreFly
  | AnimationKey.TitanOreFly
  | AnimationKey.PlatinumOreFly;

const animationSequence = [0, 1, 1, 2, 2, 1, 1, 0];

export const resourceAnimations: Pick<AnimationType, ResourceAnimationType> = {
  [AnimationKey.IronOreFly]: animationSequence.map(x => [x, 0]),
  [AnimationKey.NickelOreFly]: animationSequence.map(x => [x, 1]),
  [AnimationKey.TitanOreFly]: animationSequence.map(x => [x, 2]),
  [AnimationKey.PlatinumOreFly]: animationSequence.map(x => [x, 4]),
};
