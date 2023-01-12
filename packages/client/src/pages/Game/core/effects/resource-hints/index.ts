import { FPS } from '../../constants';
import { hintColors, hintValues, hintConfig } from './constants';
import { OtherHintType, ResourceHint, ResourceHintConfig } from './types';

class ResourceHints {
  private ctx: CanvasRenderingContext2D;
  private hints: ResourceHint[];
  private multiplier = 1;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.hints = [];
  }

  private draw() {
    this.ctx.save();
    this.hints.forEach(hint => {
      const { opacity, color, position } = hint;

      this.ctx.globalAlpha = opacity;
      this.ctx.fillStyle = color;
      this.ctx.font = '23px audiowide';
      this.ctx.fillText(this.selectHints(hint), position.x, position.y);
    });

    this.ctx.restore();
  }

  private selectHints(hint: ResourceHint): string {
    const {
      isShield,
      resourceType,
      multiplier = 1,
      isFullLives = false,
    } = hint;
    const value = hintValues[resourceType] * multiplier;

    switch (resourceType) {
      case OtherHintType.Damage:
      case OtherHintType.ExtraLife:
        if (isFullLives || isShield) {
          return '';
        } else {
          return `${value} ♥`;
        }
      default:
        return `${value}`;
    }
  }

  update() {
    this.hints.forEach((hint, i) => {
      const { hintSpeed, letterSize, opacityTime } = hintConfig;

      if (
        hint.position.y - hintSpeed < letterSize ||
        hint.opacity - FPS / opacityTime < 0
      ) {
        this.hints.splice(i, 1);
      } else {
        hint.position.y -= hintSpeed;
        hint.opacity -= FPS / opacityTime;
      }
    });

    this.draw();
  }

  addHint(hintConfig: ResourceHintConfig) {
    this.hints.push({
      opacity: 1,
      color: hintColors[hintConfig.resourceType],
      ...hintConfig,
    });
  }

  clear() {
    this.hints = [];
  }

  get getMultiplier(): number {
    return this.multiplier;
  }

  set setMultiplier(k: number) {
    this.multiplier = k;
  }
}

export { ResourceHints };
