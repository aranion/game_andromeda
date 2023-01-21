import { GameObject } from '../game-object';
import { store } from 'src/store';
import { gameActions } from 'src/store/game';
import {
  endGameLabel,
  endGameButton,
} from '../../overworld/scene-transition/stats';
import { GameMap } from '../../overworld/game-map';
import { WeaponsList } from '../weapon/weapons.config';
import { Weapon } from '../weapon';
import type { PlayerConfig, PlayerSkin } from './types';
import type { Coordinates } from '../../types';
import type { SceneTransition } from '../../overworld/scene-transition';
import type { PressedKey } from '../../overworld/directions-input/types';
import type { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

/**
 * Класс игрока. Главная сущность игры в виде космического корабля.
 * */
export class Player extends GameObject {
  private status: 'mounted' | 'unmounted' = 'mounted';
  private lives: number;
  private shielded: boolean;
  private readonly direction: Coordinates;
  private readonly maxLives: number;
  private readonly skin: PlayerSkin;
  private readonly sceneTransition: SceneTransition;
  private readonly pressedKey: PressedKey;
  private readonly weapon: Weapon;
  private idTimeout: TimeoutId | null = null;

  constructor(config: PlayerConfig) {
    const { canvas, ctx, lives, maxLives, shielded, imageSrc } = config;

    super({ ...config, imageSrc: imageSrc.healthy });

    this.lives = lives;
    this.shielded = shielded ?? false;
    this.maxLives = maxLives;
    this.skin = imageSrc;
    this.direction = config.direction;
    this.sceneTransition = config.sceneTransition;
    this.pressedKey = config.pressedKey;
    this.weapon = new Weapon({ canvas, ctx, shooter: this });

    this.updateSkin();
  }

  get getLives(): number {
    return this.lives;
  }

  get isShielded(): boolean {
    return this.shielded;
  }

  get getDirection(): Coordinates {
    return this.direction;
  }

  get getWeaponParams() {
    return {
      ...this.weapon.getWeaponOptions,
      ...this.weapon.getRechargeOptions,
    };
  }

  public updateWeapon() {
    this.weapon.setWeaponType = WeaponsList.Blaster;

    if (this.idTimeout) {
      clearTimeout(this.idTimeout);
    }

    this.idTimeout = setTimeout(() => {
      this.weapon.setWeaponType = WeaponsList.Rocket;
    }, 10000);
  }

  public checkShot(gameMap: GameMap) {
    const { keydown } = this.pressedKey;
    const { costProjectiles } = this.weapon.getWeaponOptions;
    const { isRecharge } = this.weapon.getRechargeOptions;

    if (keydown === ' ') {
      if (gameMap.getScore + costProjectiles >= 0) {
        if (!isRecharge) {
          gameMap.setScore = costProjectiles;
        }
        return this.weapon.shot();
      } else {
        return null;
      }
    }
  }

  updateLives(num: number, score: number) {
    const newLives = this.lives + num;

    if (newLives <= 0) {
      this.sceneTransition.createLabel(endGameLabel);
      this.sceneTransition.createButton(
        endGameButton(this.sceneTransition.getGame)
      );
      this.sceneTransition.darkScreen(2000);
      this.dispatchScore(score);
      return;
    }

    this.lives = newLives > this.maxLives ? this.maxLives : newLives;
    this.updateSkin();
  }

  private updateSkin() {
    if (this.lives === 1) {
      this.sprite.imageSrc = this.skin.wrecked;
    }
    if (this.lives === 2) {
      this.sprite.imageSrc = this.skin.damaged;
    }
    if (this.lives === 3) {
      this.sprite.imageSrc = this.skin.battered;
    }
    if (this.lives > 3) {
      this.sprite.imageSrc = this.skin.healthy;
    }
  }

  private keepInsideCanvas() {
    if (this.position.x <= this.radius) {
      this.position.x = this.radius;
    }
    if (this.position.x >= this.canvas.width - this.radius) {
      this.position.x = this.canvas.width - this.radius;
    }
    if (this.position.y <= this.radius) {
      this.position.y = this.radius;
    }
    if (this.position.y >= this.canvas.height - this.radius) {
      this.position.y = this.canvas.height - this.radius;
    }
  }

  protected draw() {
    if (this.status === 'mounted') this.sprite.drawImageLookAt(this.direction);
  }

  update() {
    const distanceX = this.position.x - this.direction.x;
    const distanceY = this.position.y - this.direction.y;

    if (this.direction.x !== this.position.x) {
      this.position.x -= distanceX / this.speed;
    }

    if (this.direction.y !== this.position.y) {
      this.position.y -= distanceY / this.speed;
    }

    this.keepInsideCanvas();
    this.draw();
  }

  clear() {
    this.updateLives(this.maxLives - this.lives - 1, 0);
    this.position.x = this.canvas.width / 2;
    this.position.y = this.canvas.height;
  }

  private dispatchScore(score: number) {
    store.dispatch(gameActions.setHightScore(score));
  }
}
