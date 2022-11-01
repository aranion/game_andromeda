import type { DirectionsInputConfig } from './types';
import type { Coordinates } from '../../types';

/**
 * Класс для считывания пользовательского ввода: движения мыши, тача, нажатия клавиш клавиатуры.
 * Используется для управления объектом игрока.
 * */
export class DirectionsInput {
  private readonly canvas: HTMLCanvasElement;
  private readonly mousePosition: Coordinates;

  constructor(config: DirectionsInputConfig) {
    this.canvas = config.canvas;
    this.mousePosition = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };
  }

  get getDirections(): Coordinates {
    return this.mousePosition;
  }

  private handleMouseMove = (evt: MouseEvent) => {
    this.mousePosition.x = evt.x;
    this.mousePosition.y = evt.y;
  };

  mount() {
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
  }

  unmount() {
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
  }
}
