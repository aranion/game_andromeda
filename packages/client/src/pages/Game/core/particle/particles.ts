import { Particle } from './particle';
import { ParticlesConfig } from './types';
import { FPS } from '../constants';

export class Particles {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particleGroup: Particle[] = [];
  private isDisappearing: boolean;
  private readonly disappearingSpeed: number;
  private readonly isEndless: boolean;
  private opacity = 1;
  public isDisappeared = false;

  constructor(config: ParticlesConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.isEndless = config.isEndless ?? false;
    this.disappearingSpeed = FPS / (config.disappearanceTime ?? 2000);

    if (!this.isEndless) {
      if (config.disappearanceDelay) {
        this.isDisappearing = false;
        setTimeout(() => {
          this.isDisappearing = true;
        }, config.disappearanceDelay);
      } else {
        this.isDisappearing = true;
      }
    } else {
      this.isDisappearing = false;
    }

    for (let i = 0; i < config.particleNumber; i++) {
      const random = Math.random();
      this.particleGroup.push(
        new Particle({
          ctx: this.ctx,
          type: config.type,
          radius:
            config.particleConfig.radius ??
            (config.particleConfig.maxRadius ?? 20) * random,
          color: config.particleConfig.color,
          speed: config.particleConfig.maxSpeed * random,
          sizeRatio: config.particleConfig.sizeRatio,
          position: config.spawnFunc
            ? config.spawnFunc(this.canvas)
            : config.position ?? { x: 0, y: 0 },
          moveAngle: config.moveAngle ?? 2 * Math.PI * random,
          imageSrc: config.particleConfig.imageSrc,
          isAnimated: config.isAnimated,
          currentAnimation: config.currentAnimation,
        })
      );
    }
  }

  protected draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    for (let i = 0; i < this.particleGroup.length; i++) {
      const particle = this.particleGroup[i];
      particle.update();
      if (this.isOutsideCanvas(particle)) {
        if (this.isEndless) {
          particle.normalizePosition({
            x: this.canvas.width,
            y: this.canvas.height,
          });
        } else {
          this.particleGroup.splice(i, 1);
          i--;
        }
      }
    }
    this.ctx.restore();
  }

  isOutsideCanvas(particle: Particle) {
    if (
      particle.getPosition.x > this.canvas.width + 2 * particle.getRadius ||
      particle.getPosition.x < -2 * particle.getRadius ||
      particle.getPosition.y > this.canvas.height + 2 * particle.getRadius ||
      particle.getPosition.y < -2 * particle.getRadius
    ) {
      return true;
    }
  }

  update() {
    if (this.isDisappearing && this.opacity - this.disappearingSpeed > 0) {
      this.opacity -= this.disappearingSpeed;
    } else if (
      this.isDisappearing &&
      this.opacity - this.disappearingSpeed < 0
    ) {
      this.isDisappeared = true;
    }
    this.draw();
  }
}
