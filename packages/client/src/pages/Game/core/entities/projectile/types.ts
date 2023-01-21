import { AnimationType } from '../../animations.config';
import { AnimationKey } from '../../constants';
import { WeaponsList } from '../weapon/weapons.config';
import type { Coordinates } from './../../types';
import type { GameObjectConfig } from '../game-object/types';

export type ProjectileConfig = Omit<GameObjectConfig, 'imageSrc' | 'speed'> & {
  type: WeaponsList;
  direction: Coordinates;
  valueDamage: number;
};

export type ProjectileAnimationKey =
  | AnimationKey.ProjectileBlaster
  | AnimationKey.ProjectileRocket;

export type ProjectileAnimation = Pick<AnimationType, ProjectileAnimationKey>;
