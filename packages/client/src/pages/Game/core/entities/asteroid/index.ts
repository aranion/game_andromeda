import { GameObject } from '../game-object';
import { AsteroidConfig } from './types';

export class Asteroid extends GameObject {
  private rotateAngle: number;
  private readonly rotateVector: -1 | 1;
  private readonly rotateSpeed: number;
  private readonly moveAngle: number;
  private distance = 0;

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
}
