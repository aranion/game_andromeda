import { AsteroidConfig } from './types';
import asteroid1 from '../../assets/asteroid/asteroid1.png';
import asteroid2 from '../../assets/asteroid/asteroid2.png';
import asteroid3 from '../../assets/asteroid/asteroid3.png';
import asteroid4 from '../../assets/asteroid/asteroid4.png';
import { randomInteger } from '../../utils/random-integer';

export const images = [asteroid1, asteroid2, asteroid3, asteroid4];

const defaultAsteroidStats = {
  maxSpeed: 10,
  maxRotateSpeed: 0.1,
  radius: 40,
  isAnimated: false,
};

export function createAsteroidConfig(): Omit<AsteroidConfig, 'canvas' | 'ctx'> {
  const random = Math.random();
  return {
    isAnimated: defaultAsteroidStats.isAnimated,
    radius: defaultAsteroidStats.radius,
    speed: random * defaultAsteroidStats.maxSpeed,
    rotateSpeed: random * defaultAsteroidStats.maxRotateSpeed,
    rotateVector: random > 0.5 ? 1 : -1,
    moveAngle: random * 2 * Math.PI,
    imageSrc: images[randomInteger(0, 3)],
  };
}
