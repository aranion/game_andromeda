import { GameObject } from '../game-object';
import { randomInteger } from '../../utils/random-integer';
import { ResourceConfig } from './types';

const DEFAULT_RADIUS = 30;
const RANDOM_SPEED = Math.random() * 3 + 1;

export class Resource extends GameObject {
  private distance = 0;
  private counted = false;
  private readonly points: number;

  constructor(config: ResourceConfig) {
    super({ ...config, imageSrc: '' });

    this.speed = config.speed ?? RANDOM_SPEED;
    this.radius = config.radius ?? DEFAULT_RADIUS;
    this.position = {
      x: randomInteger(this.radius, this.canvas.width - this.radius),
      y: 0 - this.radius * 2,
    };
    this.points = Math.floor(Math.random() * 10 + 1);
  }

  get getDistance() {
    return this.distance;
  }

  get isCounted() {
    return this.counted;
  }

  collect(): number {
    this.counted = true;
    return this.points;
  }

  protected draw() {
    this.ctx.fillStyle = 'blue';
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  update(target: GameObject) {
    this.position.y += this.speed;
    const dx = this.position.x - target.getPosition.x;
    const dy = this.position.y - target.getPosition.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    this.draw();
  }
}
