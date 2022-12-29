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

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.hints = [];
  }

  private draw() {
    this.ctx.save();
    this.hints.forEach(hint => {
      this.ctx.globalAlpha = hint.opacity;
      this.ctx.fillStyle = hint.color;
      this.ctx.font = '23px audiowide';
      console.log(hint.resourceType);
      this.ctx.fillText(
        (hint.isShield && hint.resourceType === 'damage'
          ? ''
          : hintValues[hint.resourceType] * (hint.multiplier ?? 1) +
            (hint.resourceType === 'damage' && !hint.isShield ? ' ♥' : '')
        ).toString(),
        hint.position.x,
        hint.position.y
      );
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
      multiplier: hintConfig.multiplier ?? 1,
    });

    console.log(this.hints[0]);
  }

  clear() {
    this.hints = [];
  }
}

export { ResourceHints };
