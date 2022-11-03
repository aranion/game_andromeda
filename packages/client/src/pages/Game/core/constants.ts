export const styles = {
  canvasBackground: '#000',
  font: '30px sans-serif',
  fontColor: '#fff',
};

export const FPS = 60;

export const INITIAL_SPEED = 100;
export const INITIAL_RADIUS = 16;
export const ANIM_FRAME_LIMIT = 4;

export enum AnimationKey {
  SpaceshipFly = 'spaceship-fly',
  IronOreFly = 'iron-ore-fly',
  NickelOreFly = 'nickel-ore-fly',
  TitanOreFly = 'titan-ore-fly',
  PlatinumOreFly = 'platinum-ore-fly',
}
