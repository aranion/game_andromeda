import type { WeaponType } from './types';

export enum WeaponsList {
  Blaster = 'blaster',
  Rocket = 'rocket',
}

export const weapons: WeaponType = {
  [WeaponsList.Blaster]: {
    timeRecharge: 1000,
    costProjectiles: -1,
    damage: -2,
  },
  [WeaponsList.Rocket]: {
    timeRecharge: 2000,
    costProjectiles: -2,
    damage: -1,
  },
};
