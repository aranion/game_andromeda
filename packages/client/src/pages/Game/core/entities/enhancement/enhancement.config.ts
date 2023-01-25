import { AnimationKey } from '../../constants';

export enum EnhancementType {
  Shield = 'shield',
  Lives = 'lives',
  Speed = 'speed',
  Multiplier = 'multiplier',
  Blaster = 'blaster',
}

export const getEnhancementConfig = (images: string[]) => {
  const [
    enhancementShield,
    enhancementLives,
    enhancementSpeed,
    enhancementDoubling,
    enhancementBlaster,
  ] = images;

  return {
    [EnhancementType.Shield]: {
      value: 0,
      currentAnimation: AnimationKey.Shield,
      image: enhancementShield,
    },
    [EnhancementType.Lives]: {
      value: 0,
      currentAnimation: AnimationKey.Lives,
      image: enhancementLives,
    },
    [EnhancementType.Speed]: {
      value: 0,
      currentAnimation: AnimationKey.Speed,
      image: enhancementSpeed,
    },
    [EnhancementType.Multiplier]: {
      value: 0,
      currentAnimation: AnimationKey.Multiplier,
      image: enhancementDoubling,
    },
    [EnhancementType.Blaster]: {
      value: 0,
      currentAnimation: AnimationKey.Blaster,
      image: enhancementBlaster,
    },
  };
};
