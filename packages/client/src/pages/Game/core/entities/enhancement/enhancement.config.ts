import { AnimationKey } from '../../constants';
import enhancementShield from '../../assets/enhancement/shield.png';
import enhancementLives from '../../assets/enhancement/lives.png';
import enhancementSpeed from '../../assets/enhancement/speed.png';
import enhancementDoubling from '../../assets/enhancement/multiplier.png';

export enum EnhancementType {
  Shield = 'shield',
  Lives = 'lives',
  Speed = 'speed',
  Multiplier = 'multiplier',
}

export const enhancementConfig = {
  [EnhancementType.Shield]: {
    value: 0,
    animation: AnimationKey.Shield,
    imgSrc: enhancementShield,
  },
  [EnhancementType.Lives]: {
    value: 0,
    animation: AnimationKey.Lives,
    imgSrc: enhancementLives,
  },
  [EnhancementType.Speed]: {
    value: 0,
    animation: AnimationKey.Speed,
    imgSrc: enhancementSpeed,
  },
  [EnhancementType.Multiplier]: {
    value: 0,
    animation: AnimationKey.Multiplier,
    imgSrc: enhancementDoubling,
  },
};
