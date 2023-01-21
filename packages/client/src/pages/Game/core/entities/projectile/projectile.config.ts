import { AnimationKey } from '../../constants';
import projectileBlaster from '../../assets/projectile/projectile-blaster.png';
import projectileRocket from '../../assets/projectile/projectile-rocket.png';
import { WeaponsList } from '../weapon/weapons.config';

export const projectileConfig = {
  [WeaponsList.Blaster]: {
    currentAnimation: AnimationKey.ProjectileBlaster,
    imageSrc: projectileBlaster,
    speed: 10,
    width: 64,
    height: 64,
    radius: 16,
  },
  [WeaponsList.Rocket]: {
    currentAnimation: AnimationKey.ProjectileRocket,
    imageSrc: projectileRocket,
    speed: 5,
    width: 32,
    height: 32,
    radius: 8,
  },
};
