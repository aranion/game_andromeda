import type { ParticlesGroupType } from '../../effects/particles/types';

export function getStarsConfig(): ParticlesGroupType {
  return {
    type: 'circle',
    quantity: 100,
    isEndless: true,
    isRandomPosition: true,
    moveAngle: Math.PI / 2,
    particleConfig: {
      maxRadius: 2,
      maxSpeed: 0.5,
      color: 'white',
    },
  };
}
