import { GameObject } from '../game-object';
import { randomInteger } from '../../utils/random-integer';
import type { EnhancementType } from './enhancement.config';
import type { EnhancementConfig } from './types';

const RADIUS = 26;
const defaultConfig = {
  radius: RADIUS,
  width: 64,
  height: 64,
  speed: 0.4,
};

export class Enhancement extends GameObject {
  private distance = 0;
  private counted = false;
  private readonly points: number;
  private readonly enhancementType: EnhancementType;

  constructor(config: EnhancementConfig) {
    const { enhancementConfig, type, canvas, position: XY } = config;

    const enhancementKeys = Object.keys(enhancementConfig) as EnhancementType[];
    const enhancementType =
      type ?? enhancementKeys[randomInteger(0, enhancementKeys.length - 1)];
    const { imageSrc, currentAnimation, value } =
      enhancementConfig[enhancementType];
    const position = {
      x: XY?.x ?? randomInteger(RADIUS, canvas.width - RADIUS),
      y: XY?.y ?? randomInteger(RADIUS, canvas.height - RADIUS * 6),
    };
    super({
      ...defaultConfig,
      ...config,
      imageSrc,
      position,
      currentAnimation,
    });

    this.points = value;
    this.enhancementType = enhancementType;
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
