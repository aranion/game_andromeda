import type { OptionsButton } from './overworld/scene-transition/types';
import type { GameState } from './types';

export const styles = {
  font: '30px sans-serif',
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

export const defaultState: GameState = {
  player: null,
  score: null,
};

export const configEndGameBtn: OptionsButton = {
  text: 'New game',
  cssClassName: 'game__button-new-game',
  label: {
    text: "You've reached Andromeda",
    cssClassName: 'game__label-endgame',
  },
};

export const configNewLevelBtn: OptionsButton = {
  text: 'To New Universe!',
  cssClassName: 'game__button-new-level',
  label: {
    text: 'Some galaxies stay behind, but you should be ready for the new ones!',
    cssClassName: 'game__label-new-level',
  },
};

export const configGoHomeBtn: OptionsButton = {
  text: 'Back To the Menu',
  cssClassName: 'game__button-to-menu',
};
