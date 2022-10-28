import { Coordinates } from '../../types';
import { GameObjectConfig } from './types';

/**
 * Абстракция над игровыми объектами.
 * */
export abstract class GameObject {
  /** HTML-элемент канваса */
  protected canvas: HTMLCanvasElement;
  /** Контекст канваса */
  protected ctx: CanvasRenderingContext2D;
  /** Позиционирование объекта на канвасе */
  protected position: Coordinates;
  /** Скорость перемещения объекта. Чем выше значение, тем медленнее. */
  protected speed: number;
  /** Радиус объекта */
  protected radius: number;

  protected constructor(config: GameObjectConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.position = config.position ?? { x: 0, y: 0 };
    this.speed = config.speed ?? 100;
    this.radius = config.radius ?? 15;
  }

  /** Возвращает координаты объекта */
  get getPosition(): Coordinates {
    return this.position;
  }

  /** Метод для рисования объекта на канвасе */
  protected draw(...args: unknown[]) {
    throw new Error('The draw method was not implemented');
  }

  /** Метод для обновления модели объекта */
  update(...args: unknown[]) {
    throw new Error('The update method was not implemented');
  }
}
