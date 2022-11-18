import { CanvasProperties, Coordinates } from '../../types';

export type SceneTransitionConfig = CanvasProperties & {
  clickPosition: Coordinates;
  expireClickPosition: () => void;
};

export type LabelConfig = Omit<Label, 'id'>;
export type ButtonConfig = Omit<Button, 'id'>;

export type Label = {
  id: string;
  text: string;
  color: string;
  font: string;
  position: Coordinates;
  deleteDelay?: number;
};

export type Button = {
  id: string;
  width: number;
  height: number;
  position: Coordinates;
  handleClick: () => void;
  deleteDelay?: number;
  text?: string;
  color?: string;
  font?: string;
  backgroundColor?: string;
  backgroundImageSrc?: string;
  backgroundImage?: HTMLImageElement;
  isLoaded?: boolean;
};
