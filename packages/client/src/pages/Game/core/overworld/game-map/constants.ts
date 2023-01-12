import type { Game } from '../..';
import type { ButtonConfig, LabelConfig } from '../scene-transition/types';

export const newLevelLabel: LabelConfig = {
  text: 'Some galaxies stay behind, but you should be ready for new ones!',
  cssClassName: 'game__label-new-level',
};

export const newLevelBtn = (startNewLevel: () => void): ButtonConfig => {
  console.log(1);
  return {
    text: 'To New Universe!',
    cssClassName: 'game__button-new-level',
    handleClick: (game: Game) => {
      console.log('click!');
      game.clear();
      startNewLevel();
    },
  };
};

export const delaySceneNewLevel = 500;
