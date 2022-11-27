import { Game } from '../../../core';
import { CanvasProperties, Coordinates } from '../../types';

export type SceneTransitionConfig = CanvasProperties & {
  clickPosition: Coordinates;
  game: Game;
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
  handleClick: (game: Game) => void;
  deleteDelay?: number;
  text?: string;
  color?: string;
  font?: string;
  backgroundColor?: string;
  backgroundImageSrc?: string;
  backgroundImage?: HTMLImageElement;
  isLoaded?: boolean;
};
