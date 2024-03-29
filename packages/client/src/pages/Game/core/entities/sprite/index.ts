import { animationsConfig, AnimationType } from '../../animations.config';
import { ANIM_FRAME_LIMIT, AnimationKey } from '../../constants';
import type { Coordinates } from '../../types';
import type { SpriteConfig } from './types';

/**
 * Класс для отрисовки спрайтов с анимациями или без.
 * */
export class Sprite {
  private readonly ctx: CanvasRenderingContext2D;
  private readonly imageElement: HTMLImageElement;
  private isLoaded = false;
  private position: Coordinates;
  private readonly radius: number;
  private readonly width: number;
  private readonly height: number;
  private readonly animations: AnimationType = animationsConfig;
  private currentAnimation: AnimationKey | null = null;
  private currentAnimationFrame = 0;
  private animationFrameLimit = ANIM_FRAME_LIMIT;
  private animationFrameProgress = ANIM_FRAME_LIMIT;
  private readonly isAnimated: boolean;
  private readonly sizeRatio: number;

  constructor(config: SpriteConfig) {
    this.ctx = config.ctx;
    this.imageElement = new Image();
    this.image = config.src;
    this.sizeRatio = config.sizeRatio ?? 1;
    this.position = config.position;
    this.radius = config.radius * this.sizeRatio;
    this.width = config.width ? config.width * this.sizeRatio : this.radius * 2;
    this.height = config.height
      ? config.height * this.sizeRatio
      : this.radius * 2;
    this.isAnimated = config.isAnimated ?? true;

    if (this.isAnimated) {
      this.setAnimation(config.currentAnimation ?? AnimationKey.SpaceshipFly);
    }
  }

  get frame(): [number, number] {
    if (this.currentAnimation) {
      return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }
    return [0, 0];
  }

  set image(src: string) {
    this.isLoaded = false;
    this.imageElement.src = src;
    this.imageElement.onload = () => {
      this.isLoaded = true;
    };
  }

  private updateAnimationProgress() {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress--;
      return;
    }

    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame++;

    if (this.currentAnimationFrame >= this.animationFrameLimit) {
      this.currentAnimationFrame = 0;
    }
  }

  setAnimation(key: AnimationKey) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameLimit = this.animations[this.currentAnimation].length;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  private drawImage({ x, y }: Coordinates) {
    const [frameX, frameY] = this.frame;

    this.ctx.drawImage(
      this.imageElement,
      frameX * (this.width / this.sizeRatio),
      frameY * (this.height / this.sizeRatio),
      this.width / this.sizeRatio,
      this.height / this.sizeRatio,
      x,
      y,
      this.width,
      this.height
    );

    if (this.isAnimated) {
      this.updateAnimationProgress();
    }
  }

  draw() {
    if (this.imageElement && this.isLoaded) {
      this.drawImage({
        x: this.position.x - this.width / 2,
        y: this.position.y - this.height / 2,
      });
    }
  }

  drawImageLookAt(target: Coordinates) {
    if (this.imageElement && this.isLoaded) {
      this.ctx.setTransform(1, 0, 0, 1, this.position.x, this.position.y);
      // + 90deg по часовой стрелке, чтобы выровнять изображение
      this.ctx.rotate(
        Math.atan2(target.y - this.position.y, target.x - this.position.x) +
          Math.PI / 2
      );
      this.drawImage({
        x: -this.width / 2,
        y: -this.height / 2,
      });
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  }

  drawImageRotate(rotateAngle: number) {
    if (this.imageElement && this.isLoaded) {
      this.ctx.setTransform(1, 0, 0, 1, this.position.x, this.position.y);
      this.ctx.rotate(Math.atan2(Math.sin(rotateAngle), Math.cos(rotateAngle)));

      this.drawImage({
        x: -this.radius,
        y: -this.radius,
      });

      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  }
}
