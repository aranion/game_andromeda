import type { GameObjectConfig } from '../game-object/types';
import type { Coordinates } from '../../types';
import type { AnimationKey } from '../../constants';
import type { AnimationType } from '../../animations.config';
import type { SceneTransition } from '../../overworld/scene-transition';
import type { PressedKey } from '../../overworld/directions-input/types';

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
  sceneTransition: SceneTransition;
  pressedKey: PressedKey;
};
