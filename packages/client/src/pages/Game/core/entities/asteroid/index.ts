import { GameObject } from '../game-object';
import type { AsteroidConfig } from './types';

export class Asteroid extends GameObject {
  private rotateAngle: number;
  private readonly rotateVector: -1 | 1;
  private readonly rotateSpeed: number;
  private readonly moveAngle: number;
  private distance = 0;
  private lives;

  constructor(config: AsteroidConfig) {
    super({
      isAnimated: false,
      position: {
        x:
          Math.cos(config.moveAngle) > 0
            ? -config.radius
            : config.canvas.width + config.radius,
        y:
          Math.sin(config.moveAngle) > 0
            ? -config.radius
            : config.canvas.height + config.radius,
      },
      ...config,
    });
    this.rotateAngle = 0;
    this.lives = config.lives ?? 1;
    this.moveAngle = config.moveAngle; // от 0 до 2PI
    this.rotateVector = config.rotateVector; // направление вращения астероида
    this.rotateSpeed = config.rotateSpeed;
  }

  get speedDirection() {
    return {
      x: this.speed * Math.cos(this.moveAngle),
      y: this.speed * Math.sin(this.moveAngle),
    };
  }

  get getDistance() {
    return this.distance;
  }

  get getLives() {
    return this.lives;
  }

  protected draw() {
    this.sprite.drawImageRotate(this.rotateAngle);
  }

  update(target: GameObject) {
    this.rotateAngle += this.rotateSpeed * this.rotateVector;
    this.position.x += this.speedDirection.x;
    this.position.y += this.speedDirection.y;

    this.distance = Math.sqrt(
      (target.getPosition.x - this.position.x) ** 2 +
        (target.getPosition.y - this.position.y) ** 2
    );
    this.draw();
  }

  public updateLives(damageValue: number) {
    const newLives = this.lives + damageValue;
    this.lives = newLives >= 1 ? newLives : 0;
  }

  public checkDestroy() {
    return this.lives === 0;
  }
}
