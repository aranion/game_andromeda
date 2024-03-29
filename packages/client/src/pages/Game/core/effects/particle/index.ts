import { Sprite } from '../../entities/sprite';
import type { ParticleConfig, ParticleTypes } from './types';
import type { Coordinates, GameEntityInterface } from '../../types';

export class Particle implements GameEntityInterface {
  private ctx: CanvasRenderingContext2D;
  private readonly moveAngle: number;
  private readonly type: ParticleTypes;
  private readonly images?: string;
  private readonly radius: number;
  private readonly color: string;
  private readonly speed: number;
  private readonly position: Coordinates;
  private readonly sizeRatio: number;
  private readonly sprite: Sprite | undefined;

  constructor(config: ParticleConfig) {
    this.ctx = config.ctx;
    this.position = { x: config.position.x, y: config.position.y };
    this.sizeRatio = config.sizeRatio ?? 1;
    this.radius = config.radius * this.sizeRatio;
    this.moveAngle = config.moveAngle;
    this.speed = config.speed;
    this.type = config.type;
    this.images = config.images;
    this.color = config.color ?? 'grey';

    if (this.type === 'sprite' && this.images) {
      this.sprite = new Sprite({
        ctx: config.ctx,
        src: this.images,
        position: this.position,
        radius: config.radius,
        isAnimated: config.isAnimated ?? false,
        sizeRatio: config.sizeRatio,
      });
    }
  }

  set setPosition(pos: Coordinates) {
    this.position.x = pos.x;
    this.position.y = pos.y;
  }

  get getPosition() {
    return {
      x: this.position.x,
      y: this.position.y,
    };
  }

  get getRadius() {
    return this.radius;
  }

  private drawCircle() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }

  protected draw() {
    if (this.sprite && this.type === 'sprite') {
      this.sprite.draw();
    } else {
      this.drawCircle();
    }
  }

  update() {
    this.position.x += this.speed * Math.cos(this.moveAngle);
    this.position.y += this.speed * Math.sin(this.moveAngle);
    this.draw();
  }
}
