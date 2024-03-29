import type { AnimationKey } from '../../constants';
import type { Coordinates } from '../../types';

export type SpriteConfig = {
  ctx: CanvasRenderingContext2D;
  src: string;
  radius: number;
  width?: number;
  height?: number;
  position: Coordinates;
  isAnimated?: boolean;
  currentAnimation?: AnimationKey;
  sizeRatio?: number;
};
