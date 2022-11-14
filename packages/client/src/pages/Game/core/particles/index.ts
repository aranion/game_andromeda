import { Particle } from '../particle';
import { ParticlesConfig } from './types';
import { FPS } from '../constants';
import { Coordinates } from '../types';

const defaultDisappearanceTime = 2000;
const defaultMaxRadius = 20;

export class Particles {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particleGroup: Particle[] = [];
  private readonly disappearingSpeed: number;
  private readonly isEndless: boolean;
  private opacity = 1;
  public isDisappeared = false;
  private isDisappearing = false;

  constructor(config: ParticlesConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.isEndless = config.isEndless ?? false;
    this.disappearingSpeed =
      FPS / (config.disappearanceTime ?? defaultDisappearanceTime);

    this.setDisappearDelay();
    this.createParticles(config);
  }

  private setDisappearDelay(disappearanceDelay?: number) {
    if (!this.isEndless) {
      if (disappearanceDelay) {
        setTimeout(() => {
          this.isDisappearing = true;
        }, disappearanceDelay);
      } else {
        this.isDisappearing = true;
      }
    }
  }

  private createParticles(config: ParticlesConfig) {
    for (let i = 0; i < config.quantity; i++) {
      const random = Math.random();
      this.particleGroup.push(
        new Particle({
          ctx: this.ctx,
          type: config.type,
          radius:
            config.particleConfig.radius ??
            (config.particleConfig.maxRadius ?? defaultMaxRadius) * random,
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
          particle.setPosition = this.normalizePosition(particle, {
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
    return (
      particle.getPosition.x > this.canvas.width + 2 * particle.getRadius ||
      particle.getPosition.x < -2 * particle.getRadius ||
      particle.getPosition.y > this.canvas.height + 2 * particle.getRadius ||
      particle.getPosition.y < -2 * particle.getRadius
    );
  }

  update() {
    if (this.isDisappearing) {
      if (this.opacity - this.disappearingSpeed > 0) {
        this.opacity -= this.disappearingSpeed;
      } else {
        this.isDisappeared = true;
      }
    }
    this.draw();
  }

  normalizePosition(particle: Particle, canvasSize: Coordinates): Coordinates {
    const particlePos = particle.getPosition;
    const radius = particle.getRadius;
    const newPos: Coordinates = { x: 0, y: 0 };

    if (particlePos.x > canvasSize.x) {
      newPos.x = -radius;
    } else if (particlePos.x < 0) {
      newPos.x = canvasSize.x + radius;
    }
    if (particlePos.y > canvasSize.y) {
      newPos.y = -radius;
    } else if (particlePos.y < 0) {
      newPos.y = canvasSize.y + radius;
    }

    return newPos;
  }
}
