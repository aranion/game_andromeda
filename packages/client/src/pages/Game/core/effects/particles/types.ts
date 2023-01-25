import type { CanvasProperties, Coordinates } from '../../types';
import type { AnimationKey } from '../../constants';
import type { ParticleTypes } from '../particle/types';

export type ParticlesGroupType = Omit<
  ParticlesConfig,
  'position' | 'canvas' | 'ctx'
>;

export type ParticlesConfig = CanvasProperties & {
  type: ParticleTypes;
  quantity: number;
  position?: Coordinates;
  disappearanceDelay?: number;
  disappearanceTime?: number;
  isAnimated?: boolean;
  currentAnimation?: AnimationKey;
  canDisappear?: boolean;
  isEndless?: boolean;
  isRandomPosition?: boolean;
  moveAngle?: number;
  particleConfig: {
    maxSpeed: number;
    maxRadius?: number;
    radius?: number;
    color?: string;
    image?: string;
    sizeRatio?: number;
  };
};
