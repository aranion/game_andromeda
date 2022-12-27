import { GameObject } from '../game-object';
import { randomInteger } from '../../utils/random-integer';
import { enhancementConfig, EnhancementType } from './enhancement.config';
import type { EnhancementConfig } from './types';

const RADIUS = 26;
const enhancementKeys = Object.keys(enhancementConfig) as EnhancementType[];

export class Enhancement extends GameObject {
  private distance = 0;
  private counted = false;
  private readonly points: number;
  private readonly enhancementType: EnhancementType;

  constructor(config: EnhancementConfig) {
    const randomType =
      enhancementKeys[randomInteger(0, enhancementKeys.length - 1)];
    const configType = enhancementConfig[config.type ?? randomType];
    const imageSrc = configType.imgSrc;
    const positionX =
      config.position?.x ?? randomInteger(RADIUS, config.canvas.width - RADIUS);
    const positionY =
      config.position?.y ??
      randomInteger(RADIUS, config.canvas.height - RADIUS * 6);

    super({
      ...config,
      imageSrc,
      radius: RADIUS,
      width: 64,
      height: 64,
      position: {
        x: positionX,
        y: positionY,
      },
      speed: 0.4,
      currentAnimation: configType.animation,
    });

    this.points = configType.value;
    this.enhancementType = config.type ?? randomType;
  }

  get getDistance() {
    return this.distance;
  }

  get getIsCounted() {
    return this.counted;
  }

  get getEnhancementType() {
    return this.enhancementType;
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
