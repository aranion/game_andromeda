import type { EnhancementType } from './enhancement.config';
import type { AnimationType } from '../../animations.config';
import type { AnimationKey } from '../../constants';
import type { GameObjectConfig } from '../game-object/types';

export type EnhancementConfig = Omit<GameObjectConfig, 'imageSrc'> & {
  type?: EnhancementType;
};

export type EnhancementAnimationKey =
  | AnimationKey.Shield
  | AnimationKey.Lives
  | AnimationKey.Speed
  | AnimationKey.Multiplier;

export type EnhancementAnimation = Pick<AnimationType, EnhancementAnimationKey>;