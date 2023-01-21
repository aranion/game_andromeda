import type { ParticlesGroupType } from '../../effects/particles/types';

export const projectileExplode: ParticlesGroupType = {
  type: 'circle',
  quantity: 5,
  particleConfig: {
    color: 'red',
    maxRadius: 10,
    maxSpeed: 5,
  },
};
