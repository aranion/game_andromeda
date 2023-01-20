import type { GameObjectConfig } from '../game-object/types';
import type { Coordinates } from '../../types';
import type { AnimationKey } from '../../constants';
import type { AnimationType } from '../../animations.config';
import type { SceneTransition } from '../../overworld/scene-transition';

export type PlayerAnimationKey = AnimationKey.SpaceshipFly;

export type PlayerAnimation = Pick<AnimationType, PlayerAnimationKey>;

export type PlayerSkin = {
  healthy: string;
  battered: string;
  damaged: string;
  wrecked: string;
};

type PlayersDestroyedSkin = { explosion: string };

export type PlayerSkins = {
  base: PlayerSkin;
  shield: PlayerSkin;
  destroyed: PlayersDestroyedSkin;
};

export type PlayerConfig = Omit<GameObjectConfig, 'imageSrc'> & {
  direction: Coordinates;
  radius: number;
  lives: number;
  maxLives: number;
  shielded?: boolean;
  skins: PlayerSkins;
  sceneTransition: SceneTransition;
};

export type IdTimeouts = {
  shield: NodeJS.Timeout | null;
  speed: NodeJS.Timeout | null;
};

export enum MoveToList {
  center = 'center',
  up = 'up',
}
