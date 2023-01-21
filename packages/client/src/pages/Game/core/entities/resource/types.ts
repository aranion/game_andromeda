import { ResourceType } from './resource.config';
import { AnimationType } from '../../animations.config';
import { AnimationKey } from '../../constants';
import { GameObjectConfig } from '../game-object/types';

export type ResourceConfig = Omit<GameObjectConfig, 'imageSrc'> & {
  type?: ResourceType;
};

export type ResourceAnimationKey =
  | AnimationKey.IronOreFly
  | AnimationKey.NickelOreFly
  | AnimationKey.TitanOreFly
  | AnimationKey.GoldOreFly
  | AnimationKey.PlatinumOreFly;

export type ResourceAnimation = Pick<AnimationType, ResourceAnimationKey>;
