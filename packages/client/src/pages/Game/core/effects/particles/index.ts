import { Particle } from '../particle';
import { FPS } from '../../constants';
import { isOutsideCanvas } from '../../utils/is-outside-canvas';
import { ParticlesConfig } from './types';
import { Axis, Coordinates } from '../../types';

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

  get canvasSize(): Coordinates {
    return {
      x: this.canvas.width,
      y: this.canvas.height,
    };
  }

  private randomizePosition(): Coordinates {
    return {
      x: this.canvas.width * Math.random(),
      y: this.canvas.height * Math.random(),
    };
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
      const position = config.isRandomPosition
        ? this.randomizePosition()
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

  private getOppositeAxis(axis: Axis): Axis {
    return axis === 'x' ? 'y' : 'x';
  }

  private normalizePosition(particle: Particle) {
    const pos = particle.getPosition;
    const radius = particle.getRadius;
    const canvasSize = this.canvasSize;
    const newPos: Coordinates = { x: 0, y: 0 };

    for (const anyAxis in newPos) {
      const axis = anyAxis as Axis;
      const oppositeAxis = this.getOppositeAxis(axis);

      if (pos[axis] - radius >= canvasSize[axis]) {
        newPos[axis] = -radius;
        newPos[oppositeAxis] = Math.random() * canvasSize[oppositeAxis];
      } else if (pos[axis] + radius < 0) {
        newPos[oppositeAxis] = -radius;
        newPos[axis] = Math.random() * canvasSize[axis];
      }
    }

    particle.setPosition = newPos;
  }

  protected draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;

    for (let i = 0; i < this.particleGroup.length; i++) {
      const particle = this.particleGroup[i];
      particle.update();

      if (isOutsideCanvas({ object: particle, canvas: this.canvas })) {
        if (this.isEndless) {
          this.normalizePosition(particle);
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
