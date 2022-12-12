import { Coordinates } from '../../types';
import { AnimationKey } from '../../constants';

export type ParticleTypes = 'circle' | 'sprite';

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
