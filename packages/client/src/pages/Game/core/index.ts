import { GameMap } from './overworld/game-map';
import { DirectionsInput } from './overworld/directions-input';
import { Player } from './entities/player';
import { defaultPlayerStats } from './entities/player/stats';
import { mapConfig } from './map.config';
import { FPS } from './constants';
import { store } from 'src/store';
import type { CanvasProperties, GameMapConfig } from './types';
import { gameActions } from 'src/store/game';

type GameConfig = {
  canvas: HTMLCanvasElement;
};

type GameStatus = 'stopped' | 'paused' | 'running';

/**
 * Основной класс, управляет циклом игры, меняет карту уровней.
 * */
export class Game {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private map: GameMap | null = null;
  private directions: DirectionsInput;
  private readonly player: Player;
  private status: GameStatus = 'stopped';
  private frame = 0;

  constructor(config: GameConfig) {
    const { canvas, ctx } = this.initCanvas(config.canvas);
    this.directions = new DirectionsInput({ canvas });
    this.player = new Player({
      canvas,
      ctx,
      direction: this.directions.getDirections,
      position: {
        x: canvas.width / 2,
        y: canvas.height + defaultPlayerStats.radius * 2,
      },
      ...defaultPlayerStats,
    });
  }

  private startGameLoop() {
    this.dispatchStatus('running');
    this.updateGameStatus('running');
    let last = performance.now();
    const framesDelta = 1000 / FPS;

    const step = (now: number) => {
      if (this.status === 'stopped') {
        return;
      }

      const delay = now - last;

      if (this.status === 'running' && delay >= framesDelta) {
        last = now;
        this.render();
        this.frame++;
      }

      requestAnimationFrame(() => step(performance.now()));
    };

    step(performance.now());
  }

  private startMap(gameMapConfig: GameMapConfig) {
    if (this.canvas && this.ctx) {
      this.map = new GameMap({
        ...gameMapConfig,
        canvas: this.canvas,
        ctx: this.ctx,
        player: this.player,
      });
    }
  }

  private resize = (evt: Event) => {
    const target = evt.target as Window;
    if (this.canvas) {
      this.canvas.width = target.innerWidth;
      this.canvas.height = target.innerHeight;
    }
  };

  private initCanvas(canvas: HTMLCanvasElement): CanvasProperties {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    if (!this.ctx) {
      throw new Error(
        'The canvas context has not been created. The game cannot be initialized!'
      );
    }

    return { canvas: this.canvas, ctx: this.ctx };
  }

  private render() {
    this.map?.update({ frame: this.frame });
  }

  private mount() {
    this.directions.mount();
    window.addEventListener('resize', this.resize);
  }

  unmount() {
    this.updateGameStatus('stopped');
    this.directions.unmount();
    window.removeEventListener('resize', this.resize);
  }

  init() {
    this.mount();
    this.startMap(mapConfig.level_1);
    this.startGameLoop();
  }

  public updateGameStatus(status: GameStatus) {
    this.status = status;
  }
  private dispatchStatus(status: GameStatus) {
    store.dispatch(gameActions.setGameStatus(status));
  }
}
