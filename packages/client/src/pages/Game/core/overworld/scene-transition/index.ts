import { FPS } from '../../constants';
import { Coordinates } from '../../types';
import {
  SceneTransitionConfig,
  Label,
  Button,
  LabelConfig,
  ButtonConfig,
} from './types';

const defaultOpacytyTime = 3000;
const defaultFont = 'bold 30px Audiowide';
const defaultButtonBGColor = 'grey';
const defaultButtonColor = 'red';

export class SceneTransition {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private opacity = 0;
  private opacitySpeed = 0;
  private clickPosition: Coordinates;
  private expireClickPostion: () => void;
  private labels: Label[] = [];
  private buttons: Button[] = [];

  constructor(config: SceneTransitionConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.clickPosition = config.clickPosition;
    this.expireClickPostion = config.expireClickPosition;
  }

  darkScreen(blackoutTime = defaultOpacytyTime, delay = defaultOpacytyTime) {
    this.opacitySpeed = FPS / blackoutTime;
    setTimeout(() => {
      this.opacitySpeed = -FPS / blackoutTime;
    }, blackoutTime + delay);
  }

  createLabel(label: LabelConfig) {
    const id = Date.now().toString() + Math.random.toString();
    this.labels.push({ ...label, id });

    if (label.deleteDelay) {
      setTimeout(() => {
        for (let i = 0; i < this.labels.length; i++) {
          if (this.labels[i].id === id) {
            this.labels.splice(i, 1);
            i -= 1;
          }
        }
      }, label.deleteDelay);
    }
  }

  createButton(buttonConfig: ButtonConfig) {
    const id = Date.now().toString() + Math.random.toString();
    this.setButtonImageSrc(buttonConfig);
    const button = buttonConfig as Button;
    button.id = id;
    this.buttons.push(button);

    if (button.deleteDelay) {
      setTimeout(() => {
        for (let i = 0; i < this.buttons.length; i++) {
          if (this.buttons[i].id === id) {
            this.buttons.splice(i, 1);
            i -= 1;
          }
        }
      }, button.deleteDelay);
    }
  }

  setButtonImageSrc(button: ButtonConfig) {
    if (button.backgroundImageSrc) {
      button.isLoaded = false;
      button.backgroundImage = new Image();
      button.backgroundImage.src = button.backgroundImageSrc;
      button.backgroundImage.onload = () => {
        button.isLoaded = true;
      };
    }
  }

  private checkClick() {
    this.buttons.forEach(button => {
      if (this.inBounds(button)) {
        button.handleClick();
      }
    });
    this.expireClickPostion();
  }

  inBounds(button: Button): boolean {
    const clickPos = this.clickPosition;
    if (clickPos.x > 0)
      return !(
        clickPos.x < button.position.x - button.width / 2 ||
        clickPos.x > button.position.x + button.width / 2 ||
        clickPos.y < button.position.y - button.height / 2 ||
        clickPos.y > button.position.y + button.height / 2
      );
    return false;
  }

  deleteObjects() {
    this.labels = [];
    this.buttons = [];
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

    // рисуем кнопки
    for (const button of this.buttons) {
      if (button.backgroundImage && button.isLoaded) {
        // если картинка
        this.ctx.drawImage(
          button.backgroundImage,
          0,
          0,
          button.width,
          button.height,
          button.position.x - button.width / 2,
          button.position.y - button.height / 2,
          button.width,
          button.height
        );
      } else {
        // если прямоугольник с текстом
        const backgroundColor = button.backgroundColor ?? defaultButtonBGColor;
        const text = button.text ?? '...';

        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(
          button.position.x - button.width / 2,
          button.position.y - button.height / 2,
          button.width,
          button.height
        );
        this.ctx.fillStyle = button.color ?? defaultButtonColor;
        this.ctx.textAlign = 'center';
        this.ctx.font = button.font ?? defaultFont;
        this.ctx.fillText(text, button.position.x, button.position.y);
      }
    }

    this.ctx.restore();
    this.checkClick();
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
}
