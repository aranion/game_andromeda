import { randomInteger } from '../../utils/random-integer';
import type { ParticlesGroupType } from '../../effects/particles/types';

export function asteroidExplode(images: string[]): ParticlesGroupType {
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
