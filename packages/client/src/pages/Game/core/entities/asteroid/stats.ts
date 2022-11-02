import { AsteroidConfig } from './types';
import asteroid1 from './../../assets/asteriods/asteroid1.png';
import asteroid2 from './../../assets/asteriods/asteroid2.png';
import asteroid3 from './../../assets/asteriods/asteroid3.png';
import asteroid4 from './../../assets/asteriods/asteroid4.png';

const defaultAsteroidStats = {
  maxSpeed: 10,
  maxRotateSpeed: 0.1,
  radius: 20,
  isAnimated: false,
};

export function createAsteroid(): Omit<
  AsteroidConfig,
  'canvas' | 'ctx' | 'position'
> {
  const random = Math.random();
  const randImg = Math.random();
  let img: string;
  if (randImg < 0.25) {
    img = asteroid1;
  } else if (randImg < 0.5) {
    img = asteroid2;
  } else if (randImg < 0.75) {
    img = asteroid3;
  } else {
    img = asteroid4;
  }
  return {
    isAnimated: defaultAsteroidStats.isAnimated,
    radius: defaultAsteroidStats.radius,
    speed: random * defaultAsteroidStats.maxSpeed,
    rotateSpeed: random * defaultAsteroidStats.maxRotateSpeed,
    rotateVector: random > 0.5 ? 1 : -1,
    moveAngle: random * 2 * Math.PI,
    imageSrc: img, // todo: реализовать выбор рандомного астероида
  };
}
