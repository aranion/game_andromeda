import { AnimationKey } from '../../constants';
import { CanvasProperties, Coordinates } from '../../types';

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
