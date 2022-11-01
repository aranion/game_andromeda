import { GameObject } from '../game-object';
import type { PlayerConfig, UpdateParams } from './types';

/**
 * Класс игрока. Главная сущность игры в виде космического корабля.
 * */
export class Player extends GameObject {
  private lives: number;
  private maxLives: number;
  private shielded: boolean;

  constructor(config: PlayerConfig) {
    super(config);

    this.lives = config.lives;
    this.maxLives = config.maxLives;
    this.shielded = config.shielded ?? false;
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
      alert('Your ship was consumed by cosmic void...');
      return;
    }

    this.lives = newLives > this.maxLives ? this.maxLives : newLives;
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
    this.ctx.fillStyle = 'red';
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  update({ direction }: UpdateParams) {
    const distanceX = this.position.x - direction.x;
    const distanceY = this.position.y - direction.y;

    if (direction.x !== this.position.x) {
      this.position.x -= distanceX / this.speed;
    }

    if (direction.y !== this.position.y) {
      this.position.y -= distanceY / this.speed;
    }

    this.keepInsideCanvas();
    this.draw();
  }
}
