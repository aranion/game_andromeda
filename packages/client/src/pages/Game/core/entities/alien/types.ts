import type { GameObjectConfig } from '../game-object/types';
import type { AnimationKey } from '../../constants';
import type { AnimationType } from '../../animations.config';

export type AlienConfig = {
  radius: number;
  speed: number;
  aggroRadius: number;
} & Omit<GameObjectConfig, 'position'>;

export type AlienAnimationKey = AnimationKey.AlienFly;

export type AlienAnimation = Pick<AnimationType, AlienAnimationKey>;
