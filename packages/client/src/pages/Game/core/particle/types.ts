import { CanvasProperties, Coordinates } from '../types';
import { AnimationKey } from '../constants';

export type ParticleTypes = 'circle' | 'sprite';

export type ParticlesGroupType = Omit<
  ParticlesConfig,
  'position' | 'canvas' | 'ctx'
>;

export type ParticlesConfig = CanvasProperties & {
  type: ParticleTypes;
  particleNumber: number;
  position?: Coordinates;
  disappearanceDelay?: number;
  disappearanceTime?: number;
  isAnimated?: boolean;
  currentAnimation?: AnimationKey;
  canDisappear?: boolean;
  isEndless?: boolean;
  moveAngle?: number;
  spawnFunc?: (canvas: HTMLCanvasElement) => Coordinates;
  particleConfig: {
    maxSpeed: number;
    maxRadius?: number;
    radius?: number;
    color?: string;
    imageSrc?: string;
    sizeRatio?: number;
  };
};

export type ParticleConfig = {
  ctx: CanvasRenderingContext2D;
  position: Coordinates;
  speed: number;
  type: ParticleTypes;
  moveAngle: number;
  radius: number;
  imageSrc?: string;
  color?: string;
  sizeRatio?: number;
  isAnimated?: boolean;
  currentAnimation?: AnimationKey;
};
