import { CanvasProperties, Coordinates } from '../../types';

export type GameObjectConfig = {
  position?: Coordinates;
  speed?: number;
  radius?: number;
  imageSrc: string;
  isAnimated?: boolean;
} & CanvasProperties;
