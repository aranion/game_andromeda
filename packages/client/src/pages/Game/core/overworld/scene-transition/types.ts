import { CanvasProperties, Coordinates } from '../../types';

export type SceneTransitionConfig = CanvasProperties;

export type Label = {
  text: string;
  color: string;
  font: string;
  position: Coordinates;
};
