import type { GameMapConfig } from './types';

type MapConfig = Record<string, GameMapConfig>;

function generateLevel(): MapConfig {
  const maxLevel = 15;
  const multiplier = 10;
  let maxResource = 15;
  const levels: MapConfig = {};

  for (let i = 1; i <= maxLevel; i++) {
    const newMultiplier = i * multiplier;
    const levelNum = i;
    maxResource += i * multiplier;

    levels[`level_${i}`] = {
      spawnInterval: {
        alien: 0,
        asteroid: 110 - newMultiplier / 2,
        resource: 200 + newMultiplier,
      },
      maxResource,
      levelNum,
    };
  }

  return levels;
}

export const mapConfig: MapConfig = generateLevel();
