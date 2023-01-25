import { AnimationKey } from '../../constants';
import { mapXSequence } from '../../utils/map-x-sequence';
import type { ProjectileAnimation } from './types';

const mapAnimationBlaster = mapXSequence([0, 1, 2, 3, 2, 1, 0]);
const mapAnimationRocket = mapXSequence([0, 1, 2, 1, 0]);

export const projectileAnimations: ProjectileAnimation = {
  [AnimationKey.ProjectileBlaster]: mapAnimationBlaster(0),
  [AnimationKey.ProjectileRocket]: mapAnimationRocket(0),
};
