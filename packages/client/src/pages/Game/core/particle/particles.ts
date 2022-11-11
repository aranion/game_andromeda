import { Particle } from './particle';
import { ParticlesConfig } from './types';

export class Particles {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particleGroup: Particle[] = [];
  private isDisappearing: boolean;
  private readonly disappearingSpeed: number;
  public opacity = 1;

  constructor(config: ParticlesConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.disappearingSpeed = 60 / (config.disappearanceTime ?? 2000);
    if (config.canDisappear) {
      this.isDisappearing = false;
    } else {
      if (config.disappearanceDelay) {
        this.isDisappearing = false;
        setTimeout(() => {
          this.isDisappearing = true;
        }, config.disappearanceDelay);
      } else {
        this.isDisappearing = true;
      }
    }

    for (let i = 0; i < config.particleNumber; i++) {
      const random = Math.random();
      this.particleGroup.push(
        new Particle({
          ctx: this.ctx,
          type: config.type,
          radius:
            config.particleConfig.radius ??
            (config.particleConfig.maxRadius ?? 20) * Math.random(),
          speed: config.particleConfig.maxSpeed * random,
          sizeRatio: config.particleConfig.sizeRatio,
          position: config.position,
          moveAngle: 2 * Math.PI * random,
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
      if (
        particle.getPosition.x > this.canvas.width + particle.getRadius ||
        particle.getPosition.x < -particle.getRadius ||
        particle.getPosition.y > this.canvas.height + particle.getRadius ||
        particle.getPosition.y < -particle.getRadius
      ) {
        this.particleGroup.splice(i, 1);
        i--;
      }
    }
    this.ctx.restore();
  }

  update() {
    if (this.isDisappearing && this.opacity - this.disappearingSpeed > 0) {
      this.opacity -= this.disappearingSpeed;
    }
    this.draw();
  }
}
