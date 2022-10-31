import { styles } from '../../constants';
import { Player } from '../../entities/player';
import { DrawParams, GameMapConstrConfig, UpdateParams } from './types';

/**
 * Карта текущего уровня, настраивается через конфиг. Управляет текущим уровнем и его логикой.
 * */
export class GameMap {
  private spawnInterval: {
    // интервал - количество кадров
    alien: number;
    asteroid: number;
    resource: number;
  };
  private score = 0;
  private player: Player;

  constructor(config: GameMapConstrConfig) {
    this.spawnInterval = config.spawnInterval;
    this.player = config.player;
  }

  get getScore(): number {
    return this.score;
  }

  draw({ ctx, width, height }: DrawParams) {
    ctx.fillStyle = styles.canvasBackground;
    ctx.font = styles.font;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = styles.fontColor;
    ctx.fillText(`Score: ${this.score}`, 10, 50);
    ctx.fillText(`Lives: ${this.player.getLives}`, 10, 100);
  }

  update({ playerDirections, ctx, width, height }: UpdateParams) {
    this.draw({ ctx, width, height });
    this.player.update({ direction: playerDirections, ctx, width, height });
  }
}
