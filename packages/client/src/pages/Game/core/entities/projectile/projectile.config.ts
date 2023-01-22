import { AnimationKey } from '../../constants';
import { WeaponsList } from '../weapon/weapons.config';

export const projectileConfig = (images: string[]) => {
  const blasterImage = images[0];
  const rocketImage = images[1];

  return {
    [WeaponsList.Blaster]: {
      currentAnimation: AnimationKey.ProjectileBlaster,
      image: blasterImage,
      speed: 10,
      width: 64,
      height: 64,
      radius: 16,
    },
    [WeaponsList.Rocket]: {
      currentAnimation: AnimationKey.ProjectileRocket,
      image: rocketImage,
      speed: 5,
      width: 32,
      height: 32,
      radius: 8,
    },
  };
};
