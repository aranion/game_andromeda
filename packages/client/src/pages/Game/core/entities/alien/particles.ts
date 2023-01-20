import type { ParticlesGroupType } from '../../effects/particles/types';

export function alienExplode(images: string[]): ParticlesGroupType {
  return {
    type: 'circle',
    quantity: 10,
    particleConfig: {
      color: 'red',
      maxRadius: 5,
      maxSpeed: 5,
    },
  };
}
