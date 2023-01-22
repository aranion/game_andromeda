import type { ParticlesGroupType } from '../../effects/particles/types';

export const enhancementUse: ParticlesGroupType = {
  type: 'circle',
  quantity: 5,
  particleConfig: {
    color: 'gold',
    maxRadius: 5,
    maxSpeed: 5,
  },
};
