import type { GameStatus } from 'src/pages/Game/core/types';

export type InitialState = {
  hightScore: null | number;
  gameStatus: GameStatus;
};

export enum GameStatusList {
  stopped = 'stopped',
  paused = 'paused',
  running = 'running',
}
