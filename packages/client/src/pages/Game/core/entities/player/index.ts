import { INITIAL_SPEED, TIME_ACTIONS_ENHANCEMENT } from './../../constants';
import { GameObject } from '../game-object';
import { store } from 'src/store';
import { gameActions } from 'src/store/game';
import { configRestartBtn, defaultMoveTime } from './stats';
import type {
  IdTimeouts,
  MoveToList,
  PlayerConfig,
  PlayerSkins,
} from './types';
import type { Coordinates } from '../../types';
import type { SceneTransition } from '../../overworld/scene-transition';

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
  private isImmortal = false;

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

  get getIsFullLives(): boolean {
    return this.lives === this.maxLives;
  }

  private destroyShield() {
    const { shield } = this.idTimeouts;
    this.shielded = false;
    this.updateSkin();

    if (shield) {
      clearInterval(shield);
    }
  }

  public updateSpeed(value = 50) {
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

  public updateShield() {
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

  public updateLives(num = 1, score?: number) {
    const newLives = this.lives + num;
    const isSubtractLives = num < 0;

    if (this.isImmortal) {
      return;
    }

    if (isSubtractLives && this.shielded) {
      this.destroyShield();
      return;
    }

    if (newLives <= 0) {
      this.lives = 0;
      this.direction = this.position;

      this.updateSkin();

      const button = this.sceneTransition.addButton({
        ...configRestartBtn,
        cbFn: this.sceneTransition.getGame.startGame,
      });
      this.sceneTransition.createButton(button);
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
    const { shield, base, destroyed } = this.skins;
    const skins = this.shielded ? shield : base;
    const { wrecked, damaged, battered, healthy } = skins;

    if (this.lives === 0) {
      this.sprite.imageSrc = destroyed.explosion;
    }
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

  public moveTo(direction: MoveToList, time?: number) {
    const movePosition: Record<keyof typeof MoveToList, Coordinates> = {
      center: { x: this.canvas.width / 2, y: this.canvas.height / 2 },
      up: { x: this.canvas.width / 2, y: -10 },
    };

    this.isImmortal = true;
    this.movePosition = movePosition[direction];

    setTimeout(() => {
      this.movePosition = undefined;
      this.isImmortal = false;
    }, time ?? defaultMoveTime);
  }

  protected draw() {
    const direction = this.movePosition ?? this.direction;
    if (this.status === 'mounted') this.sprite.drawImageLookAt(direction);
  }

  public update() {
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

  public clear() {
    this.updateLives(this.maxLives - this.lives - 1, 0);
    this.position.x = this.canvas.width / 2;
    this.position.y = this.canvas.height;
  }

  private dispatchScore(score: number) {
    store.dispatch(gameActions.setHightScore(score));
  }
}
