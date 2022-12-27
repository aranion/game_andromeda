import { FPS } from '../../constants';
import {
  hintColors,
  hintSpeed,
  hintValues,
  letterSize,
  opcityTime,
} from './constants';
import { ResourseHint, ResourseHintConfig } from './types';

class ResourceHints {
  private ctx: CanvasRenderingContext2D;
  private hints: ResourseHint[];

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
      console.log(hint.resourceType);
      this.ctx.fillText(
        hintValues[hint.resourceType].toString(),
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
        hint.opacity - FPS / opcityTime < 0
      ) {
        this.hints.splice(i, 1);
      } else {
        hint.position.y -= hintSpeed;
        hint.opacity -= FPS / opcityTime;
      }
    });

    this.draw();
  }

  addHint(hintConfig: ResourseHintConfig) {
    console.log('method add hint', hintConfig.resourceType);
    this.hints.push({
      opacity: 1,
      color: hintColors[hintConfig.resourceType],
      ...hintConfig,
    });

    console.log(this.hints[0]);
  }

  clear() {
    this.hints = [];
  }
}

export { ResourceHints };
