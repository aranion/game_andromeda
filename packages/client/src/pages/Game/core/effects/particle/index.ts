import { Sprite } from '../../entities/sprite';
import { ParticleConfig, ParticleTypes } from './types';
import { Coordinates } from '../../types';

export class Particle {
  private ctx: CanvasRenderingContext2D;
  private readonly moveAngle: number;
  private readonly type: ParticleTypes;
  private readonly imageSrc?: string;
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
    this.imageSrc = config.imageSrc;
    this.color = config.color ?? 'grey';
    if (this.type === 'sprite' && this.imageSrc) {
      this.sprite = new Sprite({
        ctx: config.ctx,
        src: this.imageSrc,
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

  protected draw() {
    if (this.sprite) {
      this.sprite.draw();
    } else {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(
        this.position.x,
        this.position.y,
        this.radius,
        0,
        Math.PI * 2
      );
      this.ctx.closePath();
      this.ctx.fill();
    }
  }

  update() {
    this.position.x += this.speed * Math.cos(this.moveAngle);
    this.position.y += this.speed * Math.sin(this.moveAngle);
    this.draw();
  }
}
