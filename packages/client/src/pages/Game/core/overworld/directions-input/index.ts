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
  private buttonShot: HTMLDivElement | null = null;

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

  private handleMouseMoveTouch = (evt: TouchEvent) => {
    this.mousePosition.x = evt.changedTouches[0].clientX;
    this.mousePosition.y = evt.changedTouches[0].clientY;
  };

  private handleKeydown = (evt: KeyboardEvent) => {
    this.pressedKey.keydown = evt.key;
  };

  private handleKeyup = (evt: KeyboardEvent) => {
    delete this.pressedKey.keydown;
  };

  private handleDown = () => {
    this.pressedKey.keydown = ' ';
  };

  private handleUp = () => {
    delete this.pressedKey.keydown;
  };

  private createShotMobilElement = () => {
    this.buttonShot = document.createElement('div');
    this.buttonShot.style.width = '100px';
    this.buttonShot.style.height = '100px';
    this.buttonShot.style.border = '5px solid #d4c8c866';
    this.buttonShot.style.borderRadius = '50%';
    this.buttonShot.style.position = 'absolute';
    this.buttonShot.style.bottom = '25px';
    this.buttonShot.style.left = '25px';
    this.buttonShot.style.background = '#9b919166';
    this.buttonShot.style.zIndex = '99';
    document.body.appendChild(this.buttonShot);
  };

  mount() {
    const isTouch = 'ontouchstart' in window;

    if (isTouch) {
      this.canvas.addEventListener('touchmove', this.handleMouseMoveTouch);
      this.createShotMobilElement();

      if (this.buttonShot) {
        this.buttonShot.addEventListener('touchstart', this.handleDown);
        this.buttonShot.addEventListener('touchend', this.handleUp);
      }
    } else {
      document.addEventListener('keydown', this.handleKeydown);
      document.addEventListener('keyup', this.handleKeyup);

      this.canvas.addEventListener('mousemove', this.handleMouseMove);
      this.canvas.addEventListener('mousedown', this.handleDown);
      this.canvas.addEventListener('mouseup', this.handleUp);
    }
  }

  unmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('keyup', this.handleKeyup);
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.canvas.removeEventListener('touchmove', this.handleMouseMoveTouch);
    this.canvas.removeEventListener('click', this.handleDown);
    this.canvas.removeEventListener('click', this.handleUp);
    this.buttonShot?.removeEventListener('touchstart', this.handleDown);
    this.buttonShot?.removeEventListener('touchend', this.handleUp);
  }
}
