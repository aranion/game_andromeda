import { AnimationKey } from '../../constants';

export enum ResourceType {
  Iron = 'iron',
  Nickel = 'nickel',
  Titan = 'titan',
  Platinum = 'platinum',
}

export const resourceConfig = {
  [ResourceType.Iron]: {
    value: 1,
    animation: AnimationKey.IronOreFly,
  },
  [ResourceType.Nickel]: {
    value: 2,
    animation: AnimationKey.NickelOreFly,
  },
  [ResourceType.Titan]: {
    value: 3,
    animation: AnimationKey.TitanOreFly,
  },
  [ResourceType.Platinum]: {
    value: 5,
    animation: AnimationKey.PlatinumOreFly,
  },
};
