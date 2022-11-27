import { Game } from '../../../core';
import { FPS } from '../../constants';
import { SceneTransitionConfig, LabelConfig, ButtonConfig } from './types';

const defaultOpacytyTime = 3000;

export class SceneTransition {
  private game: Game;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private opacity = 0;
  private opacitySpeed = 0;
  private labelsId: string[] = [];
  private buttonsId: string[] = [];

  constructor(config: SceneTransitionConfig) {
    this.game = config.game;
    this.canvas = config.canvas;
    this.ctx = config.ctx;
  }

  darkScreen(blackoutTime = defaultOpacytyTime, delay = defaultOpacytyTime) {
    this.opacitySpeed = FPS / blackoutTime;
    setTimeout(() => {
      this.opacitySpeed = -FPS / blackoutTime;
    }, blackoutTime + delay);
  }

  createLabel(labelConfig: LabelConfig) {
    const label = document.createElement('label');
    const id = `l${Date.now().toString()}`;
    const canvas = document.querySelector('.canvas');

    this.labelsId.push(id);

    label.classList.add(labelConfig.cssClassName);
    label.innerText = labelConfig.text;
    label.id = id;

    if (canvas) canvas.before(label);

    if (labelConfig.deleteDelay) {
      setTimeout(() => {
        label.remove();
        console.log('remove label');
      }, labelConfig.deleteDelay);
    }
  }

  createButton(buttonConfig: ButtonConfig) {
    const button = document.createElement('button');
    const id = `b${Date.now().toString()}`;
    const canvas = document.querySelector('canvas');

    this.buttonsId.push(id);

    button.classList.add(buttonConfig.cssClassName);
    button.innerText = buttonConfig.text;
    button.id = id;
    button.addEventListener('click', () => buttonConfig.handleClick(this.game));

    if (canvas) {
      canvas.before(button);
    }

    if (buttonConfig.deleteDelay) {
      setTimeout(() => {
        button.remove();
      }, buttonConfig.deleteDelay);
    }
  }

  get getGame(): Game {
    return this.game;
  }

  deleteObjects() {
    this.labelsId.forEach(id => {
      const label = document.querySelector(`label#${id}`);
      label?.remove();
    });

    this.buttonsId.forEach(id => {
      const button = document.querySelector(`button#${id}`);
      button?.remove();
    });

    this.labelsId = [];
    this.buttonsId = [];
  }

  private draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    this.ctx.fillStyle = 'black';

    // рисуем прямоугольник, затемняющий экран
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.restore();
  }

  public update() {
    if (this.opacity + this.opacitySpeed > 1) {
      this.opacity = 1;
      this.opacitySpeed = 0;
    } else if (this.opacity + this.opacitySpeed < 0) {
      this.opacity = 0;
      this.opacitySpeed = 0;
      this.deleteObjects();
    } else {
      this.opacity += this.opacitySpeed;
    }
    this.draw();
  }

  clear() {
    this.deleteObjects();
    this.opacity = 0;
    this.opacitySpeed = 0;
  }
}
