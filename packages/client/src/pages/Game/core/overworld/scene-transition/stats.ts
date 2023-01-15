import type { Game } from '../../../core';
import type { ButtonConfig, LabelConfig } from './types';

export const endGameLabel: LabelConfig = {
  text: 'Your ship was consumed by the cosmic void...',
  cssClassName: 'game__label-game-over',
};

export function endGameButton(): Omit<ButtonConfig, 'position'> {
  return {
    text: 'New Game',
    cssClassName: 'game__button-game-over',
    handleClick: (game: Game) => {
      game.clear();
    },
  };
}
