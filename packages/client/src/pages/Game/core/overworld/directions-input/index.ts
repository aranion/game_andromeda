import type { DirectionsInputConfig, PressedKey } from './types';
import type { Coordinates } from '../../types';

/**
 * Класс для считывания пользовательского ввода: движения мыши, тача, нажатия клавиш клавиатуры.
 * Используется для управления объектом игрока.
 * */
export class DirectionsInput {
  private readonly canvas: HTMLCanvasElement;
  private readonly mousePosition: Coordinates;
  private readonly pressedKey: PressedKey;

  constructor(config: DirectionsInputConfig) {
    this.canvas = config.canvas;
    this.pressedKey = {};
    this.mousePosition = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };
  }

  get getDirections(): Coordinates {
    return this.mousePosition;
  }

  get getPressedKey(): PressedKey {
    return this.pressedKey;
  }

  private handleMouseMove = (evt: MouseEvent) => {
    this.mousePosition.x = evt.x;
    this.mousePosition.y = evt.y;
  };

  private handleKeydown = (evt: KeyboardEvent) => {
    this.pressedKey.keydown = evt.key;
  };

  private handleKeyup = (evt: KeyboardEvent) => {
    delete this.pressedKey.keydown;
  };

  mount() {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('keyup', this.handleKeyup);
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
  }

  unmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('keyup', this.handleKeyup);
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
  }
}
