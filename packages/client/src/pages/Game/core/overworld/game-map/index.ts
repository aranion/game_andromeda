import { styles } from '../../constants';
import { Player } from '../../entities/player';
import { Resource } from '../../entities/resource';
import { GameObject } from '../../entities/game-object';
import type { Collide, GameMapConstrConfig, UpdateParams } from './types';
import { createAsteroidConfig } from '../../entities/asteroid/stats';
import { Asteroid } from '../../entities/asteroid';

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
  private readonly player: Player;
  private resources: Resource[] = [];
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

  private isCollided(object: Collide): boolean {
    return (
      object && object.getDistance < object.getRadius + this.player.getRadius
    );
  }

  private isOutsideCanvas(object: GameObject): boolean {
    return (
      object.getPosition.y > this.canvas.height + object.getRadius * 2 ||
      object.getPosition.y < -object.getRadius * 2 ||
      object.getPosition.x < object.getRadius ||
      object.getPosition.x > this.canvas.width - object.getRadius
    );
  }

  private handleResources(frame: number) {
    if (frame % this.spawnInterval.resource === 0) {
      this.resources.push(
        new Resource({
          canvas: this.canvas,
          ctx: this.ctx,
        })
      );
    }

    for (let i = 0; i < this.resources.length; i++) {
      const resource = this.resources[i];
      resource.update(this.player);

      if (this.isOutsideCanvas(resource)) {
        this.resources.splice(i, 1);
        i--;
      }

      if (this.isCollided(resource) && !resource.isCounted) {
        this.score += resource.collect();
        this.resources.splice(i, 1);
        i--;
      }
    }
  }

  private handleAsteroids(frame: number) {
    if (frame % this.spawnInterval.asteroid === 0) {
      const asteroidConfig = createAsteroidConfig();
      this.asteroids.push(
        new Asteroid({
          canvas: this.canvas,
          ctx: this.ctx,
          ...asteroidConfig,
        })
      );
    }

    for (let i = 0; i < this.asteroids.length; i++) {
      const asteroid = this.asteroids[i];
      asteroid.update(this.player);

      if (this.isOutsideCanvas(asteroid)) {
        this.asteroids.splice(i, 1);
        i--;
      }

      if (this.isCollided(asteroid)) {
        this.player.updateLives(-1);
        this.asteroids.splice(i, 1);
        i--;
      }
    }
  }

  private drawUI() {
    this.ctx.fillStyle = styles.fontColor;
    this.ctx.fillText(`Score: ${this.score}`, 10, 50);
    this.ctx.fillText(`Lives: ${this.player.getLives}`, 10, 100);
  }

  private draw() {
    this.ctx.fillStyle = styles.canvasBackground;
    this.ctx.font = styles.font;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update({ frame }: UpdateParams) {
    this.draw();
    this.player.update();
    this.handleResources(frame);
    this.handleAsteroids(frame);
    this.drawUI();
  }
}
