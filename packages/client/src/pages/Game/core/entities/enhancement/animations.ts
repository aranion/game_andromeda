import { AnimationKey } from '../../constants';
import { mapXSequence } from '../../utils/map-x-sequence';
import type { EnhancementAnimation } from './types';

const mapAnimationShield = mapXSequence([0, 1, 2, 3, 4, 5, 6]);
const mapAnimationLives = mapXSequence([0, 1, 2, 3, 4]);
const mapAnimationSpeed = mapXSequence([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const mapAnimationBlaster = mapXSequence([0, 1, 2, 3, 4, 5, 6, 7]);
const mapAnimationMultiplier = mapXSequence([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
]);

export const enhancementAnimations: EnhancementAnimation = {
  [AnimationKey.Shield]: mapAnimationShield(0),
  [AnimationKey.Lives]: mapAnimationLives(0),
  [AnimationKey.Speed]: mapAnimationSpeed(0),
  [AnimationKey.Multiplier]: mapAnimationMultiplier(0),

  [AnimationKey.Blaster]: mapAnimationBlaster(0),
};
