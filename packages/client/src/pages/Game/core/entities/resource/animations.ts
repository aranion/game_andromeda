import { AnimationKey } from '../../constants';
import { mapXSequence } from '../../utils/map-x-sequence';
import type { ResourceAnimation } from './types';

const mapAnimation = mapXSequence([0, 1, 1, 2, 2, 1, 1, 0]);

export const resourceAnimations: ResourceAnimation = {
  [AnimationKey.IronOreFly]: mapAnimation(0),
  [AnimationKey.NickelOreFly]: mapAnimation(1),
  [AnimationKey.TitanOreFly]: mapAnimation(2),
  [AnimationKey.GoldOreFly]: mapAnimation(3),
  [AnimationKey.PlatinumOreFly]: mapAnimation(4),
};
