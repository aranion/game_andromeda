import { CanvasProperties, Coordinates } from '../../types';

export type GameObjectConfig = {
  position?: Coordinates;
  speed?: number;
  radius?: number;
} & CanvasProperties;
