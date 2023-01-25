import type { AnimationKey } from '../../constants';
import type { CanvasProperties, Coordinates } from '../../types';

export type GameObjectConfig = {
  position?: Coordinates;
  speed?: number;
  radius?: number;
  width?: number;
  height?: number;
  image: string;
  isAnimated?: boolean;
  currentAnimation?: AnimationKey;
  sizeRatio?: number;
  lives?: number;
} & CanvasProperties;
