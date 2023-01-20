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
    const renderingFrequency = {
      asteroid: 110,
      resource: 200,
    };
    maxResource += i * multiplier;

    levels[`level_${i}`] = {
      spawnInterval: {
        alien: renderingFrequency.resource + newMultiplier,
        asteroid: renderingFrequency.asteroid - newMultiplier / 2,
        resource: renderingFrequency.resource + newMultiplier,
      },
      maxResource,
      levelNum,
    };
  }

  return levels;
}

export const mapConfig: MapConfig = generateLevel();
