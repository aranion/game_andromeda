import { styles } from '../../constants';
import { GameMapConstrConfig, UpdateObjectsParams } from './types';

/**
 * Карта текущего уровня, настраивается через конфиг. Управляет текущим уровнем и его логикой.
 * */
export class GameMap {
  /** HTML-элемент канваса */
  private canvas: HTMLCanvasElement;
  /** Контекст канваса */
  private ctx: CanvasRenderingContext2D;
  /** Интервал спавна объектов, кол-во кадров */
  private spawnInterval: {
    alien: number;
    asteroid: number;
    resource: number;
  };
  /** Заработанные очки уровня */
  private score = 0;

  constructor(config: GameMapConstrConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.spawnInterval = config.spawnInterval;
  }

  /** Получить заработанные очки уровня */
  get getScore(): number {
    return this.score;
  }

  /** Метод обновляет модели всех сущностей и UI на карте */
  updateObjects({ player }: UpdateObjectsParams) {
    this.ctx.fillStyle = styles.fontColor;
    this.ctx.fillText(`Score: ${this.score}`, 10, 50);
    this.ctx.fillText(`Lives: ${player.getLives}`, 10, 100);
  }
}
