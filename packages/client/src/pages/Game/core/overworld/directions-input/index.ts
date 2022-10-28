import { DirectionsInputConfig } from './types';
import { Coordinates } from '../../types';

/**
 * Класс для считывания пользовательского ввода: движения мыши, тача, нажатия клавиш клавиатуры.
 * Используется для управления объектом игрока.
 * */
export class DirectionsInput {
  /** HTML-элемент канваса */
  private canvas: HTMLCanvasElement;
  /** Координаты курсора мышки */
  private readonly mousePosition: Coordinates;

  constructor(config: DirectionsInputConfig) {
    this.canvas = config.canvas;
    this.mousePosition = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2
    };
  }

  /** Получить новые координаты движения игрока */
  get getDirections(): Coordinates {
    return this.mousePosition;
  }

  /** Функция-обработчик события mousemove, обновляет координаты курсора */
  private handleMouseMove = (evt: MouseEvent) => {
    this.mousePosition.x = evt.x;
    this.mousePosition.y = evt.y;
  };

  /** Установка обработчиков событий */
  mount() {
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
  }

  /** Удаление обработчиков событий */
  unmount() {
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
  }
}
