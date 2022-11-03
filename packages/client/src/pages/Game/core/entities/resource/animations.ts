import { AnimationType } from '../../animations.config';
import { AnimationKey } from '../../constants';
import { mapXSequence } from '../../utils/map-x-sequence';

type ResourceAnimationType =
  | AnimationKey.IronOreFly
  | AnimationKey.NickelOreFly
  | AnimationKey.TitanOreFly
  | AnimationKey.PlatinumOreFly;

const mapAnimation = mapXSequence([0, 1, 1, 2, 2, 1, 1, 0]);

export const resourceAnimations: Pick<AnimationType, ResourceAnimationType> = {
  [AnimationKey.IronOreFly]: mapAnimation(0),
  [AnimationKey.NickelOreFly]: mapAnimation(1),
  [AnimationKey.TitanOreFly]: mapAnimation(2),
  [AnimationKey.PlatinumOreFly]: mapAnimation(3),
};
