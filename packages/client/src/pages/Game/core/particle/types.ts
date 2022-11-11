import { CanvasProperties, Coordinates } from '../types';
import { GameObjectConfig } from '../entities/game-object/types';
import { AnimationKey } from '../constants';

export type ParticleTypes = 'circle' | 'sprite';

export type ParticlesGroupType = Omit<
  ParticlesConfig,
  'position' | 'canvas' | 'ctx'
>;

export type ParticlesConfig = CanvasProperties & {
  position: Coordinates;
  type: ParticleTypes;
  particleNumber: number;
  disappearanceDelay?: number;
  disappearanceTime?: number;
  isAnimated?: boolean;
  currentAnimation?: AnimationKey;
  canDisappear?: boolean;
  particleConfig: {
    maxSpeed: number;
    maxRadius?: number;
    radius?: number;
    color?: string;
    imageSrc?: string;
    sizeRatio?: number;
  };
};

export type ParticleConfig = Partial<GameObjectConfig> & {
  ctx: CanvasRenderingContext2D;
  position: Coordinates;
  speed: number;
  type: ParticleTypes;
  moveAngle: number;
  radius: number;
  imageSrc?: string;
  color?: string;
  sizeRatio?: number;
};
