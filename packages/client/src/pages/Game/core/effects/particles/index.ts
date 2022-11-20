import { Particle } from '../particle';
import { FPS } from '../../constants';
import { ParticlesConfig } from './types';
import { Coordinates } from '../../types';

const defaultDisappearanceTime = 2000;
const defaultMaxRadius = 20;

export class Particles {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private particleGroup: Particle[] = [];
  private readonly disappearingSpeed: number;
  private readonly isEndless: boolean;
  private opacity = 1;
  private isDisappeared = false;
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

  get isFaded() {
    return this.isDisappeared;
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
      const radius =
        config.particleConfig.radius ??
        (config.particleConfig.maxRadius ?? defaultMaxRadius) * random;
      const position = config.spawnFunc
        ? config.spawnFunc(this.canvas)
        : config.position ?? { x: 0, y: 0 };
      const moveAngle = config.moveAngle ?? 2 * Math.PI * random;
      const speed = config.particleConfig.maxSpeed * random;

      this.particleGroup.push(
        new Particle({
          ctx: this.ctx,
          type: config.type,
          radius,
          speed,
          position,
          moveAngle,
          color: config.particleConfig.color,
          imageSrc: config.particleConfig.imageSrc,
          sizeRatio: config.particleConfig.sizeRatio,
          isAnimated: config.isAnimated,
          currentAnimation: config.currentAnimation,
        })
      );
    }
  }

  private normalizePosition(particle: Particle): Coordinates {
    const pos = particle.getPosition;
    const radius = particle.getRadius;
    const newPos: Coordinates = { x: 0, y: 0 };
    const canvasSize = {
      x: this.canvas.width,
      y: this.canvas.height,
    };

    for (const anyAxis in newPos) {
      const axis = anyAxis as keyof typeof pos;

      if (pos[axis] > canvasSize[axis]) {
        newPos[axis] = -radius;
      } else if (pos[axis] < 0) {
        newPos[axis] = canvasSize[axis] + radius;
      }
    }

    return newPos;
  }

  private isOutsideCanvas(particle: Particle) {
    const pos = particle.getPosition;
    const axes = Object.keys(pos) as ['x', 'y'];
    const objectEdge = 2 * particle.getRadius;
    const canvasSize = {
      x: this.canvas.width,
      y: this.canvas.height,
    };
    let isOutside = false;

    for (const axis of axes) {
      isOutside =
        particle.getPosition[axis] > canvasSize[axis] + objectEdge ||
        particle.getPosition[axis] < -objectEdge;
    }

    return isOutside;
  }

  protected draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;

    for (let i = 0; i < this.particleGroup.length; i++) {
      const particle = this.particleGroup[i];
      particle.update();

      if (this.isOutsideCanvas(particle)) {
        if (this.isEndless) {
          particle.setPosition = this.normalizePosition(particle);
        } else {
          this.particleGroup.splice(i, 1);
          i--;
        }
      }
    }

    this.ctx.restore();
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
}
