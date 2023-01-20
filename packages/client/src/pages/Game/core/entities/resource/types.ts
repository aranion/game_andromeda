import type { ResourceType } from './resource.config';
import type { AnimationType } from '../../animations.config';
import type { AnimationKey } from '../../constants';
import type { GameObjectConfig } from '../game-object/types';

export type ResourceConfig = GameObjectConfig & {
  type?: ResourceType;
  multiplier?: Multiplier;
};

export type ResourceAnimationKey =
  | AnimationKey.IronOreFly
  | AnimationKey.NickelOreFly
  | AnimationKey.TitanOreFly
  | AnimationKey.GoldOreFly
  | AnimationKey.PlatinumOreFly;

export type ResourceAnimation = Pick<AnimationType, ResourceAnimationKey>;

export type Multiplier = 1 | 2;
