import { FPS } from '../../constants';
import { GameStatusList } from 'src/store/game/type';
import type { Game } from '../../../core';
import type {
  SceneTransitionConfig,
  LabelConfig,
  ButtonConfig,
  OptionsButton,
} from './types';

const defaultOpacityTime = 3000;

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

  public darkScreen(blackoutTime = defaultOpacityTime, delay?: number) {
    this.opacitySpeed = FPS / blackoutTime;
    if (delay) {
      setTimeout(() => {
        this.opacitySpeed = -FPS / blackoutTime;
      }, blackoutTime + delay);
    }
  }

  private createLabel(labelConfig: LabelConfig) {
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
      }, labelConfig.deleteDelay);
    }
  }

  public createButton(buttonConfig: ButtonConfig) {
    const button = document.createElement('button');
    const id = `b${Date.now().toString()}`;
    const canvas = document.querySelector('canvas');

    this.buttonsId.push(id);

    button.classList.add(buttonConfig.cssClassName);
    button.classList.add('button');
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

  private deleteObjects() {
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
      this.game.updateGameStatus(GameStatusList.paused);
    } else if (this.opacity + this.opacitySpeed < 0) {
      this.opacity = 0;
      this.opacitySpeed = 0;
      this.deleteObjects();
    } else {
      this.opacity += this.opacitySpeed;
    }
    this.draw();
  }

  public clear() {
    this.deleteObjects();
    this.opacity = 0;
    this.opacitySpeed = 0;
  }

  get isActiveBackground() {
    return this.opacity !== 0;
  }

  public addButton(optionsButton: OptionsButton): ButtonConfig {
    const { cssClassName, text, cbFn, label } = optionsButton;

    label && this.createLabel(label);

    return {
      text,
      cssClassName,
      handleClick: (game: Game) => {
        game.setState();
        game.clear();
        cbFn && cbFn();
      },
    };
  }
}
