import type { ParticlesGroupType } from '../../effects/particles/types';
import { randomInteger } from '../../utils/random-integer';
import { images } from './stats';

export function asteroidExplode(): ParticlesGroupType {
  return {
    type: 'sprite',
    quantity: 10,
    particleConfig: {
      imageSrc: images[randomInteger(0, 3)],
      radius: 20,
      maxSpeed: 5,
      sizeRatio: 0.3,
    },
  };
}
