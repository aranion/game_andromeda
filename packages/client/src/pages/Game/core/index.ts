import { GameMap } from './overworld/game-map';
import { DirectionsInput } from './overworld/directions-input';
import { Player } from './entities/player';
import { defaultPlayerStats } from './entities/player/stats';
import { mapConfig } from './map.config';
import { FPS } from './constants';
import { store } from 'src/store';
import { gameActions } from 'src/store/game';
import { SceneTransition } from './overworld/scene-transition';
import { GameStatusList } from 'src/store/game/type';
import { GameTheme } from './overworld/game-theme';
import type { CanvasProperties, GameMapConfig } from './types';

type GameConfig = {
  canvas: HTMLCanvasElement;
};

type GameStatus =
  | GameStatusList.stopped
  | GameStatusList.paused
  | GameStatusList.running;

/**
 * Основной класс, управляет циклом игры, меняет карту уровней.
 * */
export class Game {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private map: GameMap | null = null;
  private directions: DirectionsInput;
  private readonly player: Player;
  private status: GameStatus = GameStatusList.stopped;
  private readonly sceneTransition: SceneTransition;
  private frame = 0;
  private gameTheme: GameTheme;

  constructor(config: GameConfig) {
    const { canvas, ctx } = this.initCanvas(config.canvas);
    this.directions = new DirectionsInput({ canvas });
    this.sceneTransition = new SceneTransition({
      game: this,
      canvas,
      ctx,
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
    this.gameTheme = new GameTheme({
      canvas,
      ctx,
      player: this.player,
    });
  }

  private startGameLoop() {
    this.dispatchStatus(GameStatusList.running);
    this.updateGameStatus(GameStatusList.running);
    let last = performance.now();
    const framesDelta = 1000 / FPS;

    const step = (now: number) => {
      if (this.status === GameStatusList.stopped) {
        return;
      }

      const delay = now - last;

      if (this.status === GameStatusList.running && delay >= framesDelta) {
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
        gameTheme: this.gameTheme,
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

  set setStatus(gameStatus: GameStatus) {
    this.status = gameStatus;
  }

  clear() {
    this.map?.clear();
    this.sceneTransition.clear();
  }

  unmount() {
    this.updateGameStatus(GameStatusList.stopped);
    this.directions.unmount();
    this.map?.clear();
    this.sceneTransition.clear();
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
