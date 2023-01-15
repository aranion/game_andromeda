import type { GameMapConfig } from './types';

type MapConfig = Record<string, GameMapConfig>;

export const mapConfig: MapConfig = {
  level_1: {
    spawnInterval: {
      alien: 80,
      asteroid: 100,
      resource: 200,
    },
    maxResource: 10,
    levelNum: 1,
  },
  level_2: {
    spawnInterval: {
      alien: 0,
      asteroid: 200,
      resource: 300,
    },
    maxResource: 15,
    levelNum: 2,
  },
};
