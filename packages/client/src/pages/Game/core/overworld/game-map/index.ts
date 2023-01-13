import { styles, TIME_ACTIONS_ENHANCEMENT, toMenuBtn } from '../../constants';
import { Resource } from '../../entities/resource';
import { Enhancement } from '../../entities/enhancement';
import { Asteroid } from '../../entities/asteroid';
import { asteroidExplode } from '../../entities/asteroid/particles';
import { resourceExplode } from '../../entities/resource/particles';
import { enhancementUse } from '../../entities/enhancement/particles';
import { createAsteroidConfig } from '../../entities/asteroid/stats';
import { Particles } from '../../effects/particles';
import { getStarsConfig } from './particles';
import { isOutsideCanvas } from '../../utils/is-outside-canvas';
import { ResourceHints } from '../../effects/resource-hints';
import { EnhancementType } from '../../entities/enhancement/enhancement.config';
import type { GameTheme } from '../game-theme';
import type { SceneTransition } from '../scene-transition';
import type { Collide, GameMapConstrConfig, UpdateParams } from './types';
import type { Player } from '../../entities/player';
import type { Multiplier } from '../../entities/resource/types';
import type { GameMapConfig } from '../../types';
import { delaySceneNewLevel, newLevelBtn, newLevelLabel } from './constants';
import { GameStatusList } from 'src/store/game/type';

/**
 * Карта текущего уровня, настраивается через конфиг. Управляет текущим уровнем и его логикой.
 * */
export class GameMap {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private mapConfig: GameMapConfig;
  private readonly resourceHints: ResourceHints;
  private sceneTransition: SceneTransition;
  private score = 0;
  private readonly player: Player;
  private readonly gameTheme: GameTheme;
  private resources: Resource[] = [];
  private enhancements: Enhancement[] = [];
  private asteroids: Asteroid[] = [];
  private particlesGroups: Particles[] = [];
  private multiplier: Multiplier = 1;
  private idTimeoutMultiplier: NodeJS.Timer | null = null;

  constructor(config: GameMapConstrConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.mapConfig = config.mapConfig;
    this.player = config.player;
    this.sceneTransition = config.sceneTransition;
    this.resourceHints = new ResourceHints(this.ctx);
    this.gameTheme = config.gameTheme;

    this.createStarsBackground();
  }

  get getScore(): number {
    return this.score;
  }

  set setScore(score: number) {
    this.score += score * this.multiplier;
  }

  private isCollided(object: Collide): boolean {
    return (
      object && object.getDistance < object.getRadius + this.player.getRadius
    );
  }

  private createStarsBackground() {
    this.particlesGroups.push(
      new Particles({
        canvas: this.canvas,
        ctx: this.ctx,
        ...getStarsConfig(),
      })
    );
  }

  private handleResources(frame: number) {
    const isAddResources = frame % this.mapConfig.spawnInterval.resource === 0;

    if (isAddResources) {
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

      if (isOutsideCanvas({ object: resource, canvas: this.canvas })) {
        this.resources.splice(i, 1);
        i--;
      }

      if (this.isCollided(resource) && !resource.isCounted) {
        this.setScore = resource.collect();
        this.resources.splice(i, 1);
        this.particlesGroups.push(
          new Particles({
            canvas: this.canvas,
            ctx: this.ctx,
            position: {
              x: resource.getPosition.x,
              y: resource.getPosition.y,
            },
            ...resourceExplode,
          })
        );
        this.resourceHints.addHint({
          resourceType: resource.type,
          position: {
            x: resource.getPosition.x,
            y: resource.getPosition.y,
          },
        });
        i--;
      }
    }
  }

  private handleEnhancement(frame: number) {
    // пока бафы появляются случайно, нужно сделать чтобы они появлялись после уничтожения вражеского корабля
    // указать координаты(position) и тип бафа(type)
    const spawnInterval = 60;
    const isAddEnhancement = frame % spawnInterval === 0;

    if (isAddEnhancement) {
      this.enhancements.push(
        new Enhancement({
          canvas: this.canvas,
          ctx: this.ctx,
        })
      );
    }

    for (let i = 0; i < this.enhancements.length; i++) {
      const enhancement = this.enhancements[i];
      enhancement.update(this.player);

      if (isOutsideCanvas({ object: enhancement, canvas: this.canvas })) {
        this.enhancements.splice(i, 1);
        i--;
      }

      if (this.isCollided(enhancement) && !enhancement.getIsCounted) {
        const enhancementType = enhancement.getEnhancementType;

        switch (enhancementType) {
          case EnhancementType.Lives:
            this.player.updateLives();
            break;
          case EnhancementType.Shield:
            this.player.updateShield();
            break;
          case EnhancementType.Speed:
            this.player.updateSpeed();
            break;
          case EnhancementType.Multiplier:
            this.updateMultiplier();
            break;
          default:
            break;
        }

        this.setScore = enhancement.collect();
        this.enhancements.splice(i, 1);
        this.particlesGroups.push(
          new Particles({
            canvas: this.canvas,
            ctx: this.ctx,
            position: {
              x: enhancement.getPosition.x,
              y: enhancement.getPosition.y,
            },
            ...enhancementUse,
          })
        );
        i--;
      }
    }
  }

  private handleAsteroids(frame: number) {
    const isAddAsteroids = frame % this.mapConfig.spawnInterval.asteroid === 0;

    if (isAddAsteroids) {
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

      if (isOutsideCanvas({ object: asteroid, canvas: this.canvas })) {
        this.asteroids.splice(i, 1);
        i--;
      }

      if (this.isCollided(asteroid)) {
        this.player.updateLives(-1, this.score);
        this.asteroids.splice(i, 1);
        this.particlesGroups.push(
          new Particles({
            canvas: this.canvas,
            ctx: this.ctx,
            position: {
              x: asteroid.getPosition.x,
              y: asteroid.getPosition.y,
            },
            ...asteroidExplode(),
          })
        );
        i--;
      }
    }
  }

  private handleParticles() {
    for (let i = 0; i < this.particlesGroups.length; i++) {
      const particles = this.particlesGroups[i];
      particles.update();

      if (particles.isFaded) {
        this.particlesGroups.splice(i, 1);
        i--;
      }
    }
  }

  clear() {
    this.asteroids = [];
    this.particlesGroups.splice(1, this.particlesGroups.length - 1); // вырезать всё, кроме звёзд
    this.resources = [];
    this.enhancements = [];
    this.player.clear();
    this.score = 0;
  }

  private drawUI() {
    this.ctx.fillStyle = styles.fontColor;
    this.ctx.font = '30px audiowide';

    this.ctx.fillText(`Score: ${this.score}`, 10, 50);
    this.ctx.fillText(`Lives: ${'♥'.repeat(this.player.getLives)}`, 10, 100);
    this.ctx.fillText(`Level: ${this.mapConfig.levelNum}`, 10, 150);

    const bafShield = this.player.getIsShield ? '🛡' : '';
    const bafSpeed = this.player.getSpeed < 100 ? '🗲' : '';
    const bafMultiplier = this.multiplier > 1 ? 'X2' : '';

    this.ctx.fillText(`${bafShield}${bafSpeed}${bafMultiplier}`, 10, 200);
  }

  private draw() {
    this.gameTheme.drawBackground();
    this.ctx.font = styles.font;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  updateMultiplier(multiplier: Multiplier = 2) {
    this.multiplier = multiplier;

    if (this.idTimeoutMultiplier) {
      clearInterval(this.idTimeoutMultiplier);
    }

    this.idTimeoutMultiplier = setTimeout(() => {
      this.multiplier = 1;
    }, TIME_ACTIONS_ENHANCEMENT.multiplier);
  }

  checkForEndLevel() {
    if (
      this.score >= this.mapConfig.maxResource &&
      !this.sceneTransition.isActiveBackground
    ) {
      this.sceneTransition.getGame.nextLevel();
    }
  }

  update({ frame }: UpdateParams) {
    this.draw();
    this.handleParticles();
    this.player.update();
    this.handleResources(frame);
    this.handleAsteroids(frame);
    this.handleEnhancement(frame);
    this.drawUI();
    this.sceneTransition.update();
    this.resourceHints.update();
    this.checkForEndLevel();
  }
}
