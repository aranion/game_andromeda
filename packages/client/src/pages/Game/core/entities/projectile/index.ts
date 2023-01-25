import { GameObject } from '../game-object';
import { projectileConfig } from './projectile.config';
import { Images } from '../../images';
import type { Coordinates } from './../../types';
import type { ProjectileConfig } from './types';

export class Projectile extends GameObject {
  private distance = 0;
  private counted = false;
  private readonly valueDamage: number;
  private readonly direction: Coordinates;

  constructor(config: ProjectileConfig) {
    const { type, direction, valueDamage } = config;
    const images = new Images().projectiles;
    const defaultConfig = projectileConfig(images);

    super({
      ...config,
      ...defaultConfig[type],
    });

    this.direction = direction;
    this.valueDamage = valueDamage;
  }

  get getDistance() {
    return this.distance;
  }

  get isCounted() {
    return this.counted;
  }

  public collect() {
    this.counted = true;
  }

  protected draw() {
    this.sprite.drawImageLookAt(this.direction);
  }

  public update() {
    const direction = Math.atan2(
      this.direction.y - this.position.y,
      this.direction.x - this.position.x
    );
    const dx = Math.cos(direction) * this.speed;
    const dy = Math.sin(direction) * this.speed;

    this.position.x += dx;
    this.position.y += dy;
    this.direction.y += dy;
    this.direction.x += dx;

    this.draw();
  }

  public calcDistance(target: GameObject) {
    const distanceX = this.position.x - target.getPosition.x;
    const distanceY = this.position.y - target.getPosition.y;
    this.distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  }
}
