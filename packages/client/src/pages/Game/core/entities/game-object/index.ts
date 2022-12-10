import { INITIAL_RADIUS, INITIAL_SPEED } from '../../constants';
import { Sprite } from '../sprite';
import type { Coordinates } from '../../types';
import type { GameEntityInterface } from '../../types';
import type { GameObjectConfig } from './types';

/**
 * Абстракция над игровыми объектами.
 * */
export abstract class GameObject implements GameEntityInterface {
  protected readonly canvas: HTMLCanvasElement;
  protected readonly ctx: CanvasRenderingContext2D;
  protected position: Coordinates;
  protected speed: number;
  protected radius: number;
  protected sprite: Sprite;
  protected sizeRatio: number;

  protected constructor(config: GameObjectConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.position = config.position ?? { x: 0, y: 0 };
    this.speed = config.speed ?? INITIAL_SPEED;
    this.sizeRatio = config.sizeRatio ?? 1;
    this.radius = (config.radius ?? INITIAL_RADIUS) * this.sizeRatio;

    this.sprite = new Sprite({
      ctx: this.ctx,
      src: config.imageSrc,
      position: this.position,
      radius: this.radius,
      width: config.width,
      height: config.height,
      isAnimated: config.isAnimated,
      currentAnimation: config.currentAnimation,
      sizeRatio: config.sizeRatio,
    });
  }

  get getPosition(): Coordinates {
    return this.position;
  }

  get getRadius(): number {
    return this.radius;
  }

  protected draw(...args: unknown[]) {
    throw new Error('The draw method was not implemented');
  }

  update(...args: unknown[]) {
    throw new Error('The update method was not implemented');
  }
}
