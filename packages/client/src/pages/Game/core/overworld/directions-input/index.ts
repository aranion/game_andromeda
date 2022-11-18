import type { DirectionsInputConfig } from './types';
import type { Coordinates } from '../../types';

/**
 * Класс для считывания пользовательского ввода: движения мыши, тача, нажатия клавиш клавиатуры.
 * Используется для управления объектом игрока.
 * */
export class DirectionsInput {
  private readonly canvas: HTMLCanvasElement;
  private readonly mousePosition: Coordinates;
  private readonly clickPosition: Coordinates;

  constructor(config: DirectionsInputConfig) {
    this.canvas = config.canvas;
    this.clickPosition = {
      x: -1,
      y: -1,
    };
    this.mousePosition = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };
  }

  get getDirections(): Coordinates {
    return this.mousePosition;
  }

  get getClickPosition(): Coordinates {
    if (this.clickPosition.x > 0) {
      const pos = {
        x: this.clickPosition.x,
        y: this.clickPosition.y,
      };
      this.clickPosition.x = -1;
      this.clickPosition.y = -1;
      return pos;
    }
    return this.clickPosition;
  }

  expireClickPosition() {
    this.clickPosition.x = -1;
    this.clickPosition.y = -1;
  }

  private handleMouseMove = (evt: MouseEvent) => {
    this.mousePosition.x = evt.x;
    this.mousePosition.y = evt.y;
  };

  private handleClick = (evt: MouseEvent) => {
    this.clickPosition.x = evt.x;
    this.clickPosition.y = evt.y;
  };

  mount() {
    this.canvas.addEventListener('click', this.handleClick);
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
  }

  unmount() {
    this.canvas.removeEventListener('click', this.handleClick);
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
  }
}
