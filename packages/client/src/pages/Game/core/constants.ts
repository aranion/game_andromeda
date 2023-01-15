import type { Game } from '.';
import type {
  ButtonConfig,
  LabelConfig,
} from './overworld/scene-transition/types';

export const styles = {
  font: '20px audiowide',
  fontColor: '#fff',
};

export const FPS = 60;

export const INITIAL_SPEED = 100;
export const INITIAL_RADIUS = 16;
export const ANIM_FRAME_LIMIT = 4;
export const TIME_ACTIONS_ENHANCEMENT = {
  shield: 10000,
  speed: 4000,
  multiplier: 7000,
};

export enum AnimationKey {
  SpaceshipFly = 'spaceship-fly',
  IronOreFly = 'iron-ore-fly',
  NickelOreFly = 'nickel-ore-fly',
  TitanOreFly = 'titan-ore-fly',
  GoldOreFly = 'gold-ore-fly',
  PlatinumOreFly = 'platinum-ore-fly',
  Shield = 'effect-shield',
  Lives = 'add-lives',
  Speed = 'add-speed',
  Multiplier = 'multiplier',
}

export const endGameLabel: LabelConfig = {
  text: "You've reached Andromeda",
  cssClassName: 'game__label-endgame',
};

export const newGameBtn = (restartGame: () => void): ButtonConfig => {
  return {
    text: 'New game',
    cssClassName: 'game__button-new-game',
    handleClick: (game: Game) => {
      game.clear();
      restartGame();
    },
  };
};

export const toMenuBtn = (navigateToMenu: () => void): ButtonConfig => {
  return {
    text: 'Back To the Menu',
    cssClassName: 'game__button-to-menu',
    handleClick: (game: Game) => {
      game.clear();
      navigateToMenu();
    },
  };
};
