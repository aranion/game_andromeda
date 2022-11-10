import resourceSprite from '../../assets/resource/resource.png';
import { GameObject } from '../game-object';
import { randomInteger } from '../../utils/random-integer';
import { resourceConfig, ResourceType } from './resource.config';
import { ResourceConfig } from './types';

const RADIUS = 23;
const RANDOM_SPEED = Math.random() * 2 + 1;
const resourceKeys = Object.keys(resourceConfig) as ResourceType[];

export class Resource extends GameObject {
  private distance = 0;
  private counted = false;
  private readonly points: number;

  constructor(config: ResourceConfig) {
    const randomType = resourceKeys[randomInteger(0, resourceKeys.length - 1)];

    super({
      ...config,
      imageSrc: resourceSprite,
      radius: RADIUS,
      width: 64,
      height: 64,
      position: {
        x: randomInteger(RADIUS, config.canvas.width - RADIUS),
        y: 0 - RADIUS * 2,
      },
      speed: config.speed ?? RANDOM_SPEED,
      currentAnimation: resourceConfig[config.type ?? randomType].animation,
    });

    this.points = resourceConfig[config.type ?? randomType].value;
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
    this.sprite.draw();
  }

  update(target: GameObject) {
    this.position.y += this.speed;
    const dx = this.position.x - target.getPosition.x;
    const dy = this.position.y - target.getPosition.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    this.draw();
  }
}