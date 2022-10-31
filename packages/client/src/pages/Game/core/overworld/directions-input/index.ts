import { DirectionsInputConfig } from './types';
import { Coordinates } from '../../types';

/**
 * Класс для считывания пользовательского ввода: движения мыши, тача, нажатия клавиш клавиатуры.
 * Используется для управления объектом игрока.
 * */
export class DirectionsInput {
  private readonly mousePosition: Coordinates;

  constructor(config: DirectionsInputConfig) {
    this.mousePosition = {
      x: config.width / 2,
      y: config.height / 2
    };
  }

  get getDirections(): Coordinates {
    return this.mousePosition;
  }

  private handleMouseMove = (evt: MouseEvent) => {
    this.mousePosition.x = evt.x;
    this.mousePosition.y = evt.y;
  };

  mount(canvas: HTMLCanvasElement) {
    canvas.addEventListener('mousemove', this.handleMouseMove);
  }

  unmount(canvas: HTMLCanvasElement) {
    canvas.removeEventListener('mousemove', this.handleMouseMove);
  }
}
