import { randomInteger } from '../../utils/random-integer';
import { GameObject } from '../game-object';
import type { Coordinates } from '../../types';
import type { AlienConfig } from './types';
import type { Collide } from '../../overworld/game-map/types';

export class Alien extends GameObject {
  private distance = 0;
  private aggro = false;
  private direction: Coordinates = { x: 0, y: 0 };
  private aggroRadius: number;

  constructor(config: AlienConfig) {
    const { radius, canvas, aggroRadius } = config;
    super({
      isAnimated: true,
      position: {
        x: randomInteger(radius, canvas.width - radius),
        y: radius * -2,
      },
      ...config,
    });
    this.aggroRadius = aggroRadius;
  }

  get getDistance() {
    return this.distance;
  }

  isCollided(object: Collide): boolean {
    const objectDistance = Math.sqrt(
      (object.getPosition.x - this.position.x) ** 2 +
        (object.getPosition.y - this.position.y) ** 2
    );
    return object && objectDistance < object.getRadius + this.radius;
  }

  protected draw() {
    if (this.aggro) {
      this.sprite.drawImageLookAt(this.direction);
    } else {
      this.sprite.drawImageRotate(Math.PI);
    }
  }

  update(target: GameObject) {
    if (this.aggro) {
      const distanceX = this.position.x - this.direction.x;
      const distanceY = this.position.y - this.direction.y;

      if (
        this.direction.x > this.position.x + this.speed * 2 ||
        this.direction.x < this.position.x - this.speed * 2
      ) {
        this.position.x -= distanceX > 0 ? this.speed : -this.speed;
      }

      if (
        this.direction.y > this.position.y + this.speed * 2 ||
        this.direction.y < this.position.y - this.speed * 2
      ) {
        this.position.y -= distanceY > 0 ? this.speed : -this.speed;
      }
    } else {
      this.position.y += this.speed;
    }

    this.distance = Math.sqrt(
      (target.getPosition.x - this.position.x) ** 2 +
        (target.getPosition.y - this.position.y) ** 2
    );

    if (this.distance <= this.aggroRadius) {
      this.aggro = true;
      this.direction = target.getPosition;
    }
    this.draw();
  }
}
