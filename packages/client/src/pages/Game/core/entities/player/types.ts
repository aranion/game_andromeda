import { GameObjectConfig } from '../game-object/types';
import { Coordinates } from '../../types';
import { AnimationKey } from '../../constants';
import { AnimationType } from '../../animations.config';

export type PlayerAnimationKey = AnimationKey.SpaceshipFly;

export type PlayerAnimation = Pick<AnimationType, PlayerAnimationKey>;

export type PlayerSkin = {
  healthy: string;
  battered: string;
  damaged: string;
  wrecked: string;
};

export type PlayerConfig = Omit<GameObjectConfig, 'imageSrc'> & {
  direction: Coordinates;
  radius: number;
  lives: number;
  maxLives: number;
  shielded?: boolean;
  imageSrc: PlayerSkin;
};
