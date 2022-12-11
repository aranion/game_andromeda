export type InitialState = {
  hightScore: null | number;
  gameStatus:
    | GameStatusList.stopped
    | GameStatusList.paused
    | GameStatusList.running;
};

export enum GameStatusList {
  stopped = 'stopped',
  paused = 'paused',
  running = 'running',
}
