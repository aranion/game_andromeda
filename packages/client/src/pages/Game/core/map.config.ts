import type { GameMapConfig } from './types';

type MapConfig = Record<string, GameMapConfig>;

/** Конфигурация уровней игры */
export const mapConfig: MapConfig = {
  level_1: {
    spawnInterval: {
      alien: 0,
      asteroid: 500,
      resource: 200
    }
  }
};
