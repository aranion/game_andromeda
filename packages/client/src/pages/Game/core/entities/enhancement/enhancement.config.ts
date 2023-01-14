import { AnimationKey } from '../../constants';

export enum EnhancementType {
  Shield = 'shield',
  Lives = 'lives',
  Speed = 'speed',
  Multiplier = 'multiplier',
}

export const getEnhancementConfig = (images: string[]) => {
  const [
    enhancementShield,
    enhancementLives,
    enhancementSpeed,
    enhancementDoubling,
  ] = images;

  return {
    [EnhancementType.Shield]: {
      value: 0,
      currentAnimation: AnimationKey.Shield,
      imageSrc: enhancementShield,
    },
    [EnhancementType.Lives]: {
      value: 0,
      currentAnimation: AnimationKey.Lives,
      imageSrc: enhancementLives,
    },
    [EnhancementType.Speed]: {
      value: 0,
      currentAnimation: AnimationKey.Speed,
      imageSrc: enhancementSpeed,
    },
    [EnhancementType.Multiplier]: {
      value: 0,
      currentAnimation: AnimationKey.Multiplier,
      imageSrc: enhancementDoubling,
    },
  };
};
