import { GameObjectConfig } from '../game-object/types';
import { ResourceType } from './resource.config';
import { AnimationKey } from '../../constants';

export type ResourceConfig = Omit<GameObjectConfig, 'imageSrc' | 'position'> & {
  type?: ResourceType;
};

export type ResourceAnimationType =
  | AnimationKey.IronOreFly
  | AnimationKey.NickelOreFly
  | AnimationKey.TitanOreFly
  | AnimationKey.PlatinumOreFly;
