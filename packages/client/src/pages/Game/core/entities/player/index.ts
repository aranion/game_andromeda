import { INITIAL_SPEED, TIME_ACTIONS_ENHANCEMENT } from './../../constants';
import { GameObject } from '../game-object';
import { store } from 'src/store';
import { gameActions } from 'src/store/game';
import type { IdTimeouts, PlayerConfig, PlayerSkins } from './types';
import type { Coordinates } from '../../types';
import type { SceneTransition } from '../../overworld/scene-transition';
import {
  endGameLabel,
  endGameButton,
} from '../../overworld/scene-transition/stats';
import { defaultMoveTime } from './stats';

/**
 * Класс игрока. Главная сущность игры в виде космического корабля.
 * */
export class Player extends GameObject {
  private status: 'mounted' | 'unmounted' = 'unmounted';
  private direction: Coordinates;
  private lives: number;
  private maxLives: number;
  private shielded: boolean;
  private skins: PlayerSkins;
  private sceneTransition: SceneTransition;
  private idTimeouts: IdTimeouts = {
    shield: null,
    speed: null,
  };
  private movePosition?: Coordinates;

  constructor(config: PlayerConfig) {
    const { skins, shielded, maxLives, lives, direction } = config;

    super({ ...config, imageSrc: skins.base.healthy });

    this.status = 'mounted';
    this.direction = direction;
    this.lives = lives;
    this.maxLives = maxLives;
    this.shielded = shielded ?? false;
    this.skins = skins;
    this.sceneTransition = config.sceneTransition;
    this.updateSkin();
  }

  get getLives(): number {
    return this.lives;
  }

  get getIsShield(): boolean {
    return this.shielded;
  }

  get getSpeed(): number {
    return this.speed;
  }

  destroyShield() {
    const { shield } = this.idTimeouts;
    this.shielded = false;
    this.updateSkin();

    if (shield) {
      clearInterval(shield);
    }
  }

  updateSpeed(value = 50) {
    const { speed } = this.idTimeouts;
    const newSpeed = this.speed - value;
    const maxSpeed = 50;

    this.speed = newSpeed <= maxSpeed ? maxSpeed : newSpeed;

    if (speed) {
      clearInterval(speed);
    }

    this.idTimeouts.speed = setTimeout(() => {
      this.speed = INITIAL_SPEED;
    }, TIME_ACTIONS_ENHANCEMENT.speed);
  }

  updateShield() {
    const { shield } = this.idTimeouts;
    this.shielded = true;
    this.updateSkin();

    if (shield) {
      clearInterval(shield);
    }

    this.idTimeouts.shield = setTimeout(() => {
      this.shielded = false;
      this.updateSkin();
    }, TIME_ACTIONS_ENHANCEMENT.shield);
  }

  updateLives(num = 1, score?: number) {
    const newLives = this.lives + num;
    const isSubtractLives = num < 0;

    if (isSubtractLives && this.shielded) {
      this.destroyShield();
      return;
    }

    if (newLives <= 0) {
      this.sceneTransition.createLabel(endGameLabel);
      this.sceneTransition.createButton(endGameButton());
      this.sceneTransition.darkScreen(2000);

      if (score) {
        this.dispatchScore(score);
      }
      return;
    }

    this.lives = newLives > this.maxLives ? this.maxLives : newLives;
    this.updateSkin();
  }

  private updateSkin() {
    const { shield, base } = this.skins;
    const skins = this.shielded ? shield : base;
    const { wrecked, damaged, battered, healthy } = skins;

    if (this.lives === 1) {
      this.sprite.imageSrc = wrecked;
    }
    if (this.lives === 2) {
      this.sprite.imageSrc = damaged;
    }
    if (this.lives === 3) {
      this.sprite.imageSrc = battered;
    }
    if (this.lives > 3) {
      this.sprite.imageSrc = healthy;
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

  moveToCenter(time?: number) {
    this.movePosition = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
    setTimeout(() => {
      this.movePosition = undefined;
    }, time ?? defaultMoveTime);
  }

  moveUp(time?: number) {
    this.movePosition = { x: this.canvas.width / 2, y: -10 };
    setTimeout(() => {
      this.movePosition = undefined;
    }, time ?? defaultMoveTime);
  }

  protected draw() {
    const direction = this.movePosition ?? this.direction;
    if (this.status === 'mounted') this.sprite.drawImageLookAt(direction);
  }

  update() {
    const posToMoveX = this.movePosition
      ? this.movePosition.x
      : this.direction.x;
    const posToMoveY = this.movePosition
      ? this.movePosition.y
      : this.direction.y;
    const distanceX = this.position.x - posToMoveX;
    const distanceY = this.position.y - posToMoveY;

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
