import { FPS } from '../../constants';
import { SceneTransitionConfig, Label } from './types';

const defaultOpacytyTime = 3000;

export class SceneTransition {
  private static singleton: SceneTransition;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private opacity = 0;
  private opacitySpeed = 0;
  private labels: Label[] = [];

  constructor(config: SceneTransitionConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
  }

  static createSceneTransition(config: SceneTransitionConfig) {
    if (!this.singleton) {
      this.singleton = new SceneTransition(config);
    }
    return this.singleton;
  }

  darkScreen(blackoutTime = defaultOpacytyTime, delay = defaultOpacytyTime) {
    this.opacitySpeed = FPS / blackoutTime;
    setTimeout(() => {
      this.opacitySpeed = -FPS / blackoutTime;
    }, blackoutTime + delay);
  }

  createLabel(label: Label & { deleteDelay: number }) {
    this.labels.push(label);
    setTimeout(() => {
      for (let i = 0; i < this.labels.length; i++) {
        if (
          this.labels[i].text === label.text &&
          this.labels[i].position === label.position
        ) {
          this.labels.splice(i, 1);
          i -= 1;
        }
      }
    }, label.deleteDelay);
  }

  private draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    this.ctx.fillStyle = 'black';

    // рисуем прямоугольник, затемняющий экран
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // рисуем все label-ы
    this.ctx.textAlign = 'center';

    for (const label of this.labels) {
      this.ctx.fillStyle = label.color;
      this.ctx.font = label.font;
      this.ctx.fillText(label.text, label.position.x, label.position.y);
    }

    this.ctx.restore();
  }

  public update() {
    if (this.opacity + this.opacitySpeed > 1) {
      this.opacity = 1;
      this.opacitySpeed = 0;
    } else if (this.opacity + this.opacitySpeed < 0) {
      this.opacity = 0;
      this.opacitySpeed = 0;
    } else {
      this.opacity += this.opacitySpeed;
    }
    this.draw();
  }
}
