import { GameObject } from '../game-object';
import type { PlayerConfig, PlayerSkin } from './types';
import type { Coordinates } from '../../types';
import { SceneTransition } from '../../overworld/scene-transition';
import {
  endGameLabel,
  endGameButton,
} from '../../overworld/scene-transition/stats';
import { defaultPlayerStats } from './stats';

/**
 * Класс игрока. Главная сущность игры в виде космического корабля.
 * */
export class Player extends GameObject {
  private status: 'mounted' | 'unmounted' = 'unmounted';
  private direction: Coordinates;
  private lives: number;
  private maxLives: number;
  private shielded: boolean;
  private skin: PlayerSkin;
  private sceneTransition: SceneTransition;

  constructor(config: PlayerConfig) {
    super({ ...config, imageSrc: config.imageSrc.healthy });

    this.status = 'mounted';
    this.direction = config.direction;
    this.lives = config.lives;
    this.maxLives = config.maxLives;
    this.shielded = config.shielded ?? false;
    this.skin = config.imageSrc;
    this.sceneTransition = config.sceneTransition;
    this.updateSkin();
  }

  get getLives(): number {
    return this.lives;
  }

  get isShielded(): boolean {
    return this.shielded;
  }

  updateLives(num: number) {
    const newLives = this.lives + num;

    if (newLives <= 0) {
      this.sceneTransition.createLabel({
        position: {
          x: this.canvas.width / 2,
          y: this.canvas.height / 2,
        },
        ...endGameLabel,
      });

      this.sceneTransition.createButton({
        position: {
          x: this.canvas.width / 2,
          y: (2 * this.canvas.height) / 3,
        },
        ...endGameButton(this.sceneTransition.getGame),
      });

      this.sceneTransition.darkScreen(2000, 5000);
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
    this.updateLives(this.maxLives - this.lives - 1);
    this.position.x = this.canvas.width / 2;
    this.position.y = this.canvas.height;
  }
}
