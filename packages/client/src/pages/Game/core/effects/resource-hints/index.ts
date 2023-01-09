import { FPS } from '../../constants';
import {
  hintColors,
  hintSpeed,
  hintValues,
  letterSize,
  opacityTime,
} from './constants';
import type { ResourceHint, ResourceHintConfig } from './types';

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
      this.ctx.globalAlpha = hint.opacity;
      this.ctx.fillStyle = hint.color;
      this.ctx.font = '20px audiowide';

      const points = `${hintValues[hint.resourceType] * hint.multiplier}`;

      this.ctx.fillText(points, hint.position.x, hint.position.y);
    });

    this.ctx.restore();
  }

  update() {
    this.hints.forEach((hint, i) => {
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
    console.log('method add hint', hintConfig.resourceType);
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
