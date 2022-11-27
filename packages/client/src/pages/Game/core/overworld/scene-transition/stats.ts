import { getMutationCacheKey } from '@reduxjs/toolkit/dist/query/core/buildSlice';
import { Game } from '../../../core';
import endGameButtonSrc from '../../assets/finish-button/finish.png';
import { ButtonConfig } from './types';

export const endGameLabel = {
  text: 'Your ship was consumed by the cosmic void...',
  color: 'red',
  font: 'bold 30px Audiowide',
};

export function endGameButton(game: Game): Omit<ButtonConfig, 'position'> {
  return {
    width: 224,
    height: 102,
    backgroundImageSrc: endGameButtonSrc,
    handleClick: (game: Game) => {
      game.clear();
    },
  };
}
