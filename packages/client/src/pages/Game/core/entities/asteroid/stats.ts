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
  const imageSrc = images[randomInteger(0, 3)];
  const { isAnimated, maxRotateSpeed, maxSpeed, radius } = defaultAsteroidStats;

  return {
    isAnimated,
    radius,
    imageSrc,
    speed: random * maxSpeed,
    rotateSpeed: random * maxRotateSpeed,
    rotateVector: random > 0.5 ? 1 : -1,
    moveAngle: random * 2 * Math.PI,
  };
}
