import { ParticlesGroupType } from './types';
import asteroid1 from '../assets/asteriods/asteroid1.png';
import asteroid2 from '../assets/asteriods/asteroid2.png';
import asteroid3 from '../assets/asteriods/asteroid3.png';
import asteroid4 from '../assets/asteriods/asteroid4.png';
import { randomInteger } from '../utils/random-integer';

export const resourceExplode: ParticlesGroupType = {
  type: 'circle',
  particleNumber: 5,
  particleConfig: {
    color: 'grey',
    maxRadius: 5,
    maxSpeed: 5,
  },
};

export function asteroidExplode(): ParticlesGroupType {
  const images = [asteroid1, asteroid2, asteroid3, asteroid4];
  return {
    type: 'sprite',
    particleNumber: 10,
    particleConfig: {
      imageSrc: images[randomInteger(0, 3)],
      radius: 20,
      maxSpeed: 5,
      sizeRatio: 0.3,
    },
  };
}

export function starConfig(): ParticlesGroupType {
  return {
    type: 'circle',
    spawnFunc: canvas => {
      return {
        x: canvas.width * Math.random(),
        y: canvas.width * Math.random(),
      };
    },
    particleNumber: 30,
    isEndless: true,
    moveAngle: Math.PI / 2,
    particleConfig: {
      maxRadius: 5,
      maxSpeed: 5,
      color: 'white',
    },
  };
}
