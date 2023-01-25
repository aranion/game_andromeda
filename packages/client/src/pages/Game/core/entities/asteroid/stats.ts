import { randomInteger } from '../../utils/random-integer';
import type { AsteroidConfig } from './types';

const defaultAsteroidStats = {
  maxSpeed: 10,
  maxRotateSpeed: 0.1,
  radius: 40,
  isAnimated: false,
};

export function createAsteroidConfig(
  images: string[]
): Omit<AsteroidConfig, 'canvas' | 'ctx'> {
  const random = Math.random();
  const indexImage = randomInteger(0, 3);
  const image = images[indexImage];
  const lives = indexImage === 3 || indexImage === 0 ? 2 : 1;
  const { isAnimated, maxRotateSpeed, maxSpeed, radius } = defaultAsteroidStats;

  return {
    isAnimated,
    radius,
    image,
    speed: random * maxSpeed,
    rotateSpeed: random * maxRotateSpeed,
    rotateVector: random > 0.5 ? 1 : -1,
    moveAngle: random * 2 * Math.PI,
    lives,
  };
}
