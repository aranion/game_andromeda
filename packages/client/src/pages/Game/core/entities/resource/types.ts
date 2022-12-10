import type { ResourceType } from './resource.config';
import type { AnimationType } from '../../animations.config';
import type { AnimationKey } from '../../constants';
import type { GameObjectConfig } from '../game-object/types';

export type ResourceConfig = Omit<GameObjectConfig, 'imageSrc' | 'position'> & {
  type?: ResourceType;
};

export type ResourceAnimationKey =
  | AnimationKey.IronOreFly
  | AnimationKey.NickelOreFly
  | AnimationKey.TitanOreFly
  | AnimationKey.GoldOreFly
  | AnimationKey.PlatinumOreFly;

export type ResourceAnimation = Pick<AnimationType, ResourceAnimationKey>;
