import { CanvasProperties, Coordinates } from '../../types';
import { AnimationKey } from '../../constants';
import { ParticleTypes } from '../particle/types';

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
    imageSrc?: string;
    sizeRatio?: number;
  };
};
