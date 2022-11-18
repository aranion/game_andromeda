import { GameMap } from './overworld/game-map';
import { DirectionsInput } from './overworld/directions-input';
import { Player } from './entities/player';
import { defaultPlayerStats } from './entities/player/stats';
import { mapConfig } from './map.config';
import { FPS } from './constants';
import type { CanvasProperties, GameMapConfig } from './types';
import { SceneTransition } from './overworld/scene-transition';

type GameConfig = {
  canvas: HTMLCanvasElement;
};

type GameStatus = 'unmounted' | 'paused' | 'running';

/**
 * Основной класс, управляет циклом игры, меняет карту уровней.
 * */
export class Game {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private map: GameMap | null = null;
  private directions: DirectionsInput;
  private readonly player: Player;
  private readonly sceneTransition: SceneTransition;
  private status: GameStatus = 'unmounted';
  private frame = 0;

  constructor(config: GameConfig) {
    const { canvas, ctx } = this.initCanvas(config.canvas);
    this.directions = new DirectionsInput({ canvas });
    this.sceneTransition = new SceneTransition({
      canvas,
      ctx,
      clickPosition: this.directions.getClickPosition,
      expireClickPosition: this.directions.expireClickPosition,
    });
    this.player = new Player({
      canvas,
      ctx,
      sceneTransition: this.sceneTransition,
      direction: this.directions.getDirections,
      position: {
        x: canvas.width / 2,
        y: canvas.height + defaultPlayerStats.radius * 2,
      },
      ...defaultPlayerStats,
    });
  }

  private startGameLoop() {
    this.status = 'running';
    let last = performance.now();
    const framesDelta = 1000 / FPS;

    const step = (now: number) => {
      if (this.status === 'unmounted') {
        return;
      }

      const delay = now - last;

      if (delay >= framesDelta) {
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
        sceneTransition: this.sceneTransition,
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
    this.status = 'unmounted';
    this.directions.unmount();
    window.removeEventListener('resize', this.resize);
  }

  init() {
    this.mount();
    this.startMap(mapConfig.level_1);
    this.startGameLoop();
  }
}
