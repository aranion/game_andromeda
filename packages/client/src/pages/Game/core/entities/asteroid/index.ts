import { GameObject } from '../game-object';
import { AsteroidConfig } from './types';

export class Asteroid extends GameObject {
  private rotateAngle: number;
  private rotateVector: -1 | 1;
  private rotateSpeed: number;
  public distance = 0;
  private readonly moveAngle: number;

  constructor(config: AsteroidConfig) {
    super(config);
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

  draw() {
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
