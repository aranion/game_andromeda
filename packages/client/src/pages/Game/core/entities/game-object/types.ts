import { CanvasProperties, Coordinates } from '../../types';
import { AnimationKey } from '../../constants';

export type GameObjectConfig = {
  position?: Coordinates;
  speed?: number;
  radius?: number;
  width?: number;
  height?: number;
  imageSrc: string;
  isAnimated?: boolean;
  currentAnimation?: AnimationKey;
} & CanvasProperties;
