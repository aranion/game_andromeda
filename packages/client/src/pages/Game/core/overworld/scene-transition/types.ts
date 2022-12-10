import type { Game } from '../../../core';
import type { CanvasProperties, Coordinates } from '../../types';

export type SceneTransitionConfig = CanvasProperties & {
  game: Game;
};

export type LabelConfig = Omit<Label, 'id'>;
export type ButtonConfig = Omit<Button, 'id'>;

export type Label = {
  id: string;
  text: string;
  cssClassName: string;
  deleteDelay?: number;
};

export type Button = {
  id: string;
  text: string;
  handleClick: (game: Game) => void;
  cssClassName: string;
  deleteDelay?: number;
};
