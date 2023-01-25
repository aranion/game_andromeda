import type {
  EnhancementType,
  getEnhancementConfig,
} from './enhancement.config';
import type { AnimationType } from '../../animations.config';
import type { AnimationKey } from '../../constants';
import type { GameObjectConfig } from '../game-object/types';

export type EnhancementConfig = Omit<GameObjectConfig, 'image'> & {
  type?: EnhancementType;
  enhancementConfig: ReturnType<typeof getEnhancementConfig>;
};

export type EnhancementAnimationKey =
  | AnimationKey.Shield
  | AnimationKey.Lives
  | AnimationKey.Speed
  | AnimationKey.Multiplier
  | AnimationKey.Blaster;

export type EnhancementAnimation = Pick<AnimationType, EnhancementAnimationKey>;
