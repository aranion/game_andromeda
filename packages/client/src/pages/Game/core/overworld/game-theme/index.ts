import { ThemeList } from 'src/hooks/useDarkTheme';
import type { Player } from './../../entities/player/index';
import type { GameThemeConfig } from './types';

export class GameTheme {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private player: Player;
  private gradient: string | CanvasGradient = '';

  constructor(config: GameThemeConfig) {
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.player = config.player;
  }

  drawBackground() {
    const isDarkTheme = this.isDarkTheme();
    const isSoonGameOver = this.player.getLives <= 2;

    if (isSoonGameOver) {
      this.addGradient('#160000', '#150404');
    } else {
      if (isDarkTheme) {
        this.gradient = '#000';
      } else {
        this.addGradient('#010406', '#08192a');
      }
    }

    this.ctx.fillStyle = this.gradient;
  }

  private isDarkTheme() {
    const theme = window.localStorage
      .getItem('theme')
      ?.toLocaleLowerCase() as Lowercase<keyof typeof ThemeList>;

    return theme === ThemeList.Dark;
  }

  private addGradient(firstColor: string, secondColor: string) {
    const { width, height } = this.canvas;

    this.gradient = this.ctx.createRadialGradient(
      width / 2,
      height / 2,
      height,
      width / 2,
      height / 2,
      30
    );
    this.gradient.addColorStop(0, firstColor);
    this.gradient.addColorStop(1, secondColor);
  }
}
