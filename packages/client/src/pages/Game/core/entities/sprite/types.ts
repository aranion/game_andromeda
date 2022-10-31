import { Coordinates } from '../../types';
import { AnimationKey } from '../../constants';

export type SpriteConfig = {
  ctx: CanvasRenderingContext2D;
  src: string;
  radius: number;
  width?: number;
  height?: number;
  position: Coordinates;
  isAnimated?: boolean;
  currentAnimation?: AnimationKey;
};
