import { GameMap } from './overworld/game-map';
import { DirectionsInput } from './overworld/directions-input';
import { Player } from './entities/player';
import { defaultPlayerStats } from './entities/player/stats';
import { mapConfig } from './map.config';
import { FPS, styles } from './constants';
import type { GameMapConfig } from './types';

type GameConfig = {
  canvas: HTMLCanvasElement;
};

/**
 * Основной класс, управляет циклом игры, меняет карту уровней.
 * */
export class Game {
  /** Синглтон, чтобы не создавалось несколько копий из-за реакта */
  private static gameInstance: Game;
  /** HTML-элемент канваса */
  private readonly canvas: HTMLCanvasElement;
  /** Контекст канваса */
  private readonly ctx: CanvasRenderingContext2D | null = null;
  /** Текущая карта/уровень */
  private map: GameMap | null = null;
  /** Модуль считывания пользовательского ввода для игрока */
  private directions: DirectionsInput;
  /** Объект игрока */
  private readonly player: Player;
  /** Текущий отрисованный кадр */
  private frame = 0;

  constructor(config: GameConfig) {
    this.canvas = config.canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    if (!this.ctx) {
      throw new Error('The canvas context has not been created. The game cannot be initialized!');
    }

    this.directions = new DirectionsInput({ canvas: this.canvas });
    this.player = new Player({
      canvas: this.canvas,
      ctx: this.ctx,
      position: {
        x: this.canvas.width / 2,
        y: this.canvas.height + defaultPlayerStats.radius * 2
      },
      ...defaultPlayerStats
    });
  }

  /** Возвращает инстанс игры */
  static getInstance(config: GameConfig): Game {
    if (!this.gameInstance) {
      this.gameInstance = new Game(config);
    }
    return this.gameInstance;
  }

  /** Начинает игровой цикл рендеринга */
  private startGameLoop() {
    let last = performance.now();
    const framesDelta = 1000 / FPS;

    /** Функция одного цикла рендера */
    const step = (now: number) => {
      const delay = now - last;

      if (this.ctx && delay >= framesDelta) {
        last = now;

        this.ctx.fillStyle = styles.canvasBackground;
        this.ctx.font = styles.font;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.update(this.directions.getDirections);
        this.map?.updateObjects({ player: this.player });
        this.frame++;
      }

      requestAnimationFrame(() => step(performance.now()));
    };

    step(performance.now());
  }

  /** Устанавливает текущую карту/уровень */
  private startMap(gameMapConfig: GameMapConfig) {
    if (this.ctx) {
      this.map = new GameMap({
        ...gameMapConfig,
        canvas: this.canvas,
        ctx: this.ctx
      });
      this.map.updateObjects({ player: this.player });
    }
  }

  /** Следит за изменением размеров экрана */
  private resize = (evt: Event) => {
    const target = evt.target as Window;
    this.canvas.width = target.innerWidth;
    this.canvas.height = target.innerHeight;
  };

  /** Установка всех обработчиков событий */
  private mount() {
    this.directions.mount();
    window.addEventListener('resize', this.resize);
  }

  /** Удаление всех обработчиков событий */
  unmount() {
    this.directions.unmount();
    window.removeEventListener('resize', this.resize);
  }

  /** Инициализация игры */
  init() {
    this.mount();
    this.startMap(mapConfig.level_1);
    this.startGameLoop();
  }
}
