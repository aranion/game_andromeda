import { styles, TIME_ACTIONS_ENHANCEMENT } from '../../constants';
import { Resource } from '../../entities/resource';
import { Asteroid } from '../../entities/asteroid';
import { asteroidExplode } from '../../entities/asteroid/particles';
import { resourceExplode } from '../../entities/resource/particles';
import { projectileExplode } from '../../entities/projectile/particles';
import { enhancementUse } from '../../entities/enhancement/particles';
import { createAsteroidConfig } from '../../entities/asteroid/stats';
import { Particles } from '../../effects/particles';
import { getStarsConfig } from './particles';
import { isOutsideCanvas } from '../../utils/is-outside-canvas';
import { Enhancement } from '../../entities/enhancement';
import {
  OtherHintType,
  ResourceHintConfig,
} from '../../effects/resource-hints/types';
import type { Projectile } from '../../entities/projectile';
import type { GameObject } from '../../entities/game-object';
import type { ResourceConfig } from '../../entities/resource/types';
import type { ParticlesConfig } from '../../effects/particles/types';
import type { AsteroidConfig } from '../../entities/asteroid/types';
import { ResourceHints } from '../../effects/resource-hints';
import {
  EnhancementType,
  getEnhancementConfig,
} from '../../entities/enhancement/enhancement.config';
import type { EnhancementConfig } from './../../entities/enhancement/types';
import type { GameTheme } from '../game-theme';
import type { SceneTransition } from '../scene-transition';
import type { Collide, GameMapConstrConfig, UpdateParams } from './types';
import type { Player } from '../../entities/player';
import type { SpawnInterval } from '../../types';
import type { ImagesGame } from '../../images/types';

/**
 * Карта текущего уровня, настраивается через конфиг. Управляет текущим уровнем и его логикой.
 * */
export class GameMap {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly spawnInterval: SpawnInterval;
  private readonly imagesGame: ImagesGame;
  private readonly level: number;
  private readonly maxResource: number;
  private readonly resourceHints: ResourceHints;
  private readonly player: Player;
  private readonly gameTheme: GameTheme;
  private readonly sceneTransition: SceneTransition;
  private score: number;
  private resources: Resource[] = [];
  private enhancements: Enhancement[] = [];
  private asteroids: Asteroid[] = [];
  private particlesGroups: Particles[] = [];
  private projectiles: Projectile[] = [];
  private multiplier = 1;
  private idTimeoutMultiplier: NodeJS.Timer | null = null;

  constructor(config: GameMapConstrConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.imagesGame = config.imagesGame;
    this.spawnInterval = config.spawnInterval;
    this.level = config.levelNum;
    this.maxResource = config.maxResource;
    this.player = config.player;
    this.sceneTransition = config.sceneTransition;
    this.resourceHints = new ResourceHints(this.ctx);
    this.gameTheme = config.gameTheme;
    this.score = config.score;

    this.createStarsBackground();
  }

  get getScore(): number {
    return this.score;
  }

  set setScore(value: number) {
    const multiplier = value > 0 ? this.multiplier : 1;
    const newScore = this.score + value * multiplier;

    this.score = newScore > 0 ? newScore : 0;
  }

  private isCollided(object: Collide, gameObject?: GameObject): boolean {
    const obj = gameObject ? gameObject : this.player;
    const radius = object.getRadius + obj.getRadius;
    return object && object.getDistance < radius;
  }

  private createStarsBackground() {
    this.addParticle(getStarsConfig());
  }

  private addResource(configResource?: Partial<ResourceConfig>) {
    this.resources.push(
      new Resource({
        canvas: this.canvas,
        ctx: this.ctx,
        image: this.imagesGame.resources[0],
        ...configResource,
      })
    );
  }

  private addParticle(configParticles?: Partial<ParticlesConfig>) {
    this.particlesGroups.push(
      new Particles({
        canvas: this.canvas,
        ctx: this.ctx,
        ...projectileExplode,
        ...configParticles,
      })
    );
  }

  private addAsteroid(configParticles?: Partial<AsteroidConfig>) {
    const asteroidConfig = createAsteroidConfig(this.imagesGame.asteroids);

    this.asteroids.push(
      new Asteroid({
        canvas: this.canvas,
        ctx: this.ctx,
        ...asteroidConfig,
        ...configParticles,
      })
    );
  }

  private addHint(configHint: ResourceHintConfig) {
    this.resourceHints.addHint({
      multiplier: this.multiplier,
      ...configHint,
    });
  }

  private addEnhancement(configEnhancements?: Partial<EnhancementConfig>) {
    const enhancementConfig = getEnhancementConfig(
      this.imagesGame.enhancements
    );

    this.enhancements.push(
      new Enhancement({
        canvas: this.canvas,
        ctx: this.ctx,
        enhancementConfig,
        ...configEnhancements,
      })
    );
  }

  private handleProjectiles() {
    const newProjectile = this.player.checkShot(this);

    if (newProjectile) {
      this.projectiles.push(newProjectile);
      this.addHint({
        position: {
          x: this.player.getPosition.x - 50,
          y: this.player.getPosition.y - 35,
        },
        resourceType: OtherHintType.Shot,
        multiplier: this.player.getWeaponParams.costProjectiles,
      });
    }

    for (let i = 0; i < this.projectiles.length; i++) {
      const projectile = this.projectiles[i];

      projectile?.update();

      if (isOutsideCanvas({ object: projectile, canvas: this.canvas })) {
        this.projectiles.splice(i, 1);
        i--;
      }

      for (let j = 0; j < this.asteroids.length; j++) {
        const asteroid = this.asteroids[j];

        projectile.calcDistance(asteroid);

        if (this.isCollided(projectile, asteroid) && !projectile.isCounted) {
          asteroid.updateLives(this.player.getWeaponParams.damage);

          if (asteroid.checkDestroy()) {
            this.addResource({
              position: { ...asteroid.getPosition },
            });

            this.asteroids.splice(j, 1);
          }

          this.addParticle({
            position: { ...projectile.getPosition },
          });

          this.projectiles.splice(i, 1);
          i--;
        }
      }
    }
  }

  private handleResources(frame: number) {
    const isAddResources = frame % this.spawnInterval.resource === 0;

    if (isAddResources) {
      this.addResource();
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

        this.addParticle({
          position: { ...resource.getPosition },
          ...resourceExplode,
        });

        this.addHint({
          position: { ...resource.getPosition },
          resourceType: resource.type,
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
      this.addEnhancement();
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
            this.addHint({
              position: { ...enhancement.getPosition },
              resourceType: OtherHintType.ExtraLife,
              isFullLives: this.player.getIsFullLives,
              multiplier: 1,
            });
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
          case EnhancementType.Blaster:
            this.player.updateWeapon();
            break;
          default:
            break;
        }

        this.setScore = enhancement.collect();
        this.enhancements.splice(i, 1);

        this.addParticle({
          position: { ...enhancement.getPosition },
          ...enhancementUse,
        });
        i--;
      }
    }
  }

  private handleAsteroids(frame: number) {
    const isAddAsteroids = frame % this.spawnInterval.asteroid === 0;

    if (isAddAsteroids) {
      this.addAsteroid();
    }

    for (let i = 0; i < this.asteroids.length; i++) {
      const asteroid = this.asteroids[i];
      const asteroidDamage = -asteroid.getLives;

      asteroid.update(this.player);

      if (isOutsideCanvas({ object: asteroid, canvas: this.canvas })) {
        this.asteroids.splice(i, 1);
        i--;
      }

      if (this.isCollided(asteroid)) {
        const position = { ...asteroid.getPosition };

        this.asteroids.splice(i, 1);

        this.addParticle({
          position,
          ...asteroidExplode(this.imagesGame.asteroids),
        });
        this.addHint({
          position,
          resourceType: OtherHintType.Damage,
          isShield: this.player.getIsShield,
          multiplier: -asteroidDamage,
        });

        this.player.updateLives({ num: asteroidDamage, score: this.score });
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

  public clear() {
    this.asteroids = [];
    this.particlesGroups.splice(1, this.particlesGroups.length - 1); // вырезать всё, кроме звёзд
    this.resources = [];
    this.projectiles = [];
    this.enhancements = [];
    this.player.clear();
    this.score = 0;
  }

  private drawUI() {
    const { isRecharge } = this.player.getWeaponParams;

    this.ctx.fillStyle = styles.fontColor;

    const uis = [];
    const bafShield = this.player.getIsShield ? '🛡' : '';
    const bafSpeed = this.player.getSpeed < 100 ? '🗲' : '';
    const bafMultiplier = this.multiplier > 1 ? 'X2' : '';

    uis.push(
      `Level: ${this.level}`,
      `Resource: ${this.score}/${this.maxResource}`,
      `Lives: ${'♥'.repeat(this.player.getLives)}`,
      `${bafShield}${bafSpeed}${bafMultiplier}`,
      `${isRecharge ? 'Recharge...' : ''}`
    );

    uis.forEach((ui, i) => {
      const positionY = (i + 1) * 35;
      this.ctx.fillText(ui, 20, positionY);
    });
  }

  private draw() {
    this.gameTheme.drawBackground();
    this.ctx.font = styles.font;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private updateMultiplier(multiplier?: number) {
    this.multiplier = multiplier || 2;

    if (this.idTimeoutMultiplier) {
      clearInterval(this.idTimeoutMultiplier);
    }

    this.idTimeoutMultiplier = setTimeout(() => {
      this.multiplier = 1;
    }, TIME_ACTIONS_ENHANCEMENT.multiplier);
  }

  private checkForEndLevel() {
    const isMaxResource = this.score >= this.maxResource;
    const { isActiveBackground } = this.sceneTransition;

    if (isMaxResource && !isActiveBackground) {
      this.sceneTransition.getGame.nextLevel();
    }
  }

  public update({ frame }: UpdateParams) {
    this.draw();
    this.handleParticles();
    this.player.update();
    this.handleResources(frame);
    this.handleProjectiles();
    this.handleAsteroids(frame);
    this.handleEnhancement(frame);
    this.drawUI();
    this.sceneTransition.update();
    this.resourceHints.update();
    this.checkForEndLevel();
  }
}
