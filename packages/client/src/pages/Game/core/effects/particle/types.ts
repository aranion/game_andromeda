import type { Coordinates } from '../../types';
import type { AnimationKey } from '../../constants';

export type ParticleTypes = 'circle' | 'sprite';

export type ParticleConfig = {
  ctx: CanvasRenderingContext2D;
  position: Coordinates;
  speed: number;
  type: ParticleTypes;
  moveAngle: number;
  radius: number;
  images?: string;
  color?: string;
  sizeRatio?: number;
  isAnimated?: boolean;
  currentAnimation?: AnimationKey;
};
