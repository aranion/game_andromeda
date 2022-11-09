import { AsteroidConfig } from './types';
import asteroid1 from './../../assets/asteriods/asteroid1.png';
import asteroid2 from './../../assets/asteriods/asteroid2.png';
import asteroid3 from './../../assets/asteriods/asteroid3.png';
import asteroid4 from './../../assets/asteriods/asteroid4.png';
import { randomInteger } from '../../utils/random-integer';

const defaultAsteroidStats = {
  maxSpeed: 10,
  maxRotateSpeed: 0.1,
  radius: 20,
  isAnimated: false,
};

export function createAsteroidConfig(): Omit<AsteroidConfig, 'canvas' | 'ctx'> {
  const random = Math.random();
  const images = [asteroid1, asteroid2, asteroid3, asteroid4];
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
