import { GameMap } from './overworld/game-map';
import { DirectionsInput } from './overworld/directions-input';
import { Player } from './entities/player';
import { getDefaultPlayerStats } from './entities/player/stats';
import { mapConfig } from './map.config';
import {
  FPS,
  configEndGameBtn,
  configNewLevelBtn,
  configGoHomeBtn,
} from './constants';
import { store } from 'src/store';
import { gameActions } from 'src/store/game';
import { SceneTransition } from './overworld/scene-transition';
import { GameStatusList } from 'src/store/game/type';
import { GameTheme } from './overworld/game-theme';
import { Images } from './images';
import type { GameConfig, GameMapConfig, GameStatus } from './types';

/**
 * Основной класс, управляет циклом игры, меняет карту уровней.
 * */
export class Game {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private map: GameMap | null = null;
  private directions: DirectionsInput | null = null;
  private player: Player | null = null;
  private sceneTransition: SceneTransition | null = null;
  private gameTheme: GameTheme | null = null;
  private images: Images | null = null;
  private status: GameStatus = GameStatusList.stopped;
  private frame = 0;
  private level = 1;
  private readonly goHome: () => void;
  static instance: Game | null = null;

  constructor(config: GameConfig) {
    const { goHome, canvas } = config;
    this.goHome = goHome;

    if (!Game.instance) {
      this.initCanvas(canvas);
      this.init();

      Game.instance = this;
    }

    return Game.instance;
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

  private createGameEntities(gameMapConfig: GameMapConfig) {
    if (this.canvas && this.ctx && this.images?.getImages) {
      const canvasAndCtx = { canvas: this.canvas, ctx: this.ctx };
      const direction = this.directions?.getDirections || { x: 0, y: 0 };
      const defaultPlayerStats = getDefaultPlayerStats(
        this.images.getImages.player
      );
      const position = {
        x: this.canvas.width / 2,
        y: this.canvas.height + defaultPlayerStats.radius * 2,
      };

      this.sceneTransition = new SceneTransition({
        ...canvasAndCtx,
        game: this,
      });
      this.player = new Player({
        ...canvasAndCtx,
        ...defaultPlayerStats,
        sceneTransition: this.sceneTransition,
        direction,
        position,
      });
      this.gameTheme = new GameTheme({
        ...canvasAndCtx,
        player: this.player,
      });
      this.map = new GameMap({
        ...gameMapConfig,
        ...canvasAndCtx,
        sceneTransition: this.sceneTransition,
        player: this.player,
        gameTheme: this.gameTheme,
        images: this.images.getImages,
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

  private initCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    if (!this.ctx) {
      throw new Error(
        'The canvas context has not been created. The game cannot be initialized!'
      );
    }
  }

  private render() {
    this.map?.update({ frame: this.frame });
  }

  private mount() {
    if (this.canvas) {
      this.directions = new DirectionsInput({ canvas: this.canvas });
      this.directions.mount();
      window.addEventListener('resize', this.resize);
    }
  }

  set setStatus(gameStatus: GameStatus) {
    this.status = gameStatus;
  }

  clear() {
    this.map?.clear();
    this.sceneTransition?.clear();
  }

  nextLevel() {
    if (this.sceneTransition && this.player) {
      this.level += 1;
      this.sceneTransition.darkScreen();

      const buttons = [];
      const isNotLastLevel = this.level <= Object.keys(mapConfig).length;

      if (isNotLastLevel) {
        this.player.moveUp();
        buttons.push(
          this.sceneTransition.addBtn({
            ...configNewLevelBtn,
            cbFn: () => {
              this.startGame(this.level);
            },
          })
        );
      } else {
        this.player.moveToCenter();
        buttons.push(
          this.sceneTransition.addBtn({
            ...configEndGameBtn,
            cbFn: this.startGame,
          }),
          this.sceneTransition.addBtn({
            ...configGoHomeBtn,
            cbFn: this.goHome,
          })
        );
      }

      buttons.forEach(btn => {
        this.sceneTransition?.createButton(btn);
      });
    }
  }

  unmount() {
    this.updateGameStatus(GameStatusList.stopped);
    this.directions?.unmount();
    this.map?.clear();
    this.sceneTransition?.clear();
    window.removeEventListener('resize', this.resize);
    Game.instance = null;
  }

  async init() {
    await this.initImages();
    this.mount();
    this.startGame();
    this.startGameLoop();
  }

  public updateGameStatus(status: GameStatus) {
    this.status = status;
  }

  private dispatchStatus(status: GameStatus) {
    store.dispatch(gameActions.setGameStatus(status));
  }

  private startGame = (level?: number) => {
    let gameConfig: GameMapConfig | null = null;

    if (!level) {
      this.level = 1;
      gameConfig = mapConfig.level_1;
    } else {
      gameConfig = mapConfig[`level_${this.level}`];
    }

    this.createGameEntities(gameConfig);
  };

  private async initImages() {
    this.images = new Images();
    await this.images.downloadImages();
  }
}
