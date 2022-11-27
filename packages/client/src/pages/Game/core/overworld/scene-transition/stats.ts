import { getMutationCacheKey } from '@reduxjs/toolkit/dist/query/core/buildSlice';
import { Game } from '../../../core';
import endGameButtonSrc from '../../assets/finish-button/finish.png';
import { ButtonConfig, LabelConfig } from './types';

export const endGameLabel: LabelConfig = {
  text: 'Your ship was consumed by the cosmic void...',
  cssClassName: 'game__label-game-over',
};

export function endGameButton(game: Game): Omit<ButtonConfig, 'position'> {
  return {
    text: 'new-game',
    cssClassName: 'game__button-game-over',
    handleClick: (game: Game) => {
      game.clear();
    },
  };
}
