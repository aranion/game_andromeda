import { ParticlesGroupType } from '../../effects/particles/types';

export const resourceExplode: ParticlesGroupType = {
  type: 'circle',
  quantity: 5,
  particleConfig: {
    color: 'grey',
    maxRadius: 5,
    maxSpeed: 5,
  },
};
