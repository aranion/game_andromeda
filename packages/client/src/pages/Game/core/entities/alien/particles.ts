import alien from '../../assets/alien/base_alien.png';
import type { ParticlesGroupType } from '../../effects/particles/types';

export function alienExplode(): ParticlesGroupType {
  return {
    type: 'sprite',
    quantity: 10,
    particleConfig: {
      imageSrc: alien,
      radius: 20,
      maxSpeed: 5,
      sizeRatio: 0.3,
    },
  };
}
