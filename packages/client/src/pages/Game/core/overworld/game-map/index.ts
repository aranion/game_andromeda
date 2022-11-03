import { AnimationKey, styles } from '../../constants';
import { Player } from '../../entities/player';
import type { GameMapConstrConfig, UpdateParams } from './types';
import { Asteroid } from '../../entities/asteroid';
import { createAsteroid } from '../../entities/asteroid/stats';

/**
 * Карта текущего уровня, настраивается через конфиг. Управляет текущим уровнем и его логикой.
 * */
export class GameMap {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private spawnInterval: {
    // интервал - количество кадров
    alien: number;
    asteroid: number;
    resource: number;
  };
  private score = 0;
  private player: Player;
  private asteroids: Asteroid[] = [];


  constructor(config: GameMapConstrConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.spawnInterval = config.spawnInterval;
    this.player = config.player;
  }

  get getScore(): number {
    return this.score;
  }

  public handleAsteroids({ frame = 0 }: UpdateParams) {
    if (frame && frame % this.spawnInterval.asteroid === 0) {
      const asteroidConfig = createAsteroid();
      this.asteroids.push(
        new Asteroid({
          canvas: this.canvas,
          ctx: this.ctx,
          currentAnimation: AnimationKey.Asteroid,
          position: {
            x:
              Math.cos(asteroidConfig.moveAngle) > 0
                ? -20
                : this.canvas.width + asteroidConfig.radius,
            y:
              Math.sin(asteroidConfig.moveAngle) > 0
                ? -20
                : this.canvas.height + asteroidConfig.radius,
          },
          ...asteroidConfig,
        })
      );
    }

    this.asteroids.forEach((asteroid, i) => {
      asteroid.update(this.player);
      if (
        (asteroid.getPosition.x > this.canvas.width + asteroid.getRadius &&
          asteroid.speedDirection.x > 0) ||
        (asteroid.getPosition.x < -asteroid.getRadius &&
          asteroid.speedDirection.x < 0)
      ) {
        this.asteroids.splice(i, 1);
        i--;
      }

      if (
        asteroid &&
        asteroid.distance < asteroid.getRadius + this.player.getRadius
      ) {
        this.player.updateLives(-1);
        this.asteroids.splice(i, 1);
        i--;
      }
    });
  }

  draw() {
    this.ctx.fillStyle = styles.canvasBackground;
    this.ctx.font = styles.font;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = styles.fontColor;
    this.ctx.fillText(`Score: ${this.score}`, 10, 50);
    this.ctx.fillText(`Lives: ${this.player.getLives}`, 10, 100);
  }

  update({ frame }: UpdateParams) {
    this.draw();
    this.player.update();
    this.handleAsteroids({ frame });
  }
}
