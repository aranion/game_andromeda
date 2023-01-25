import type { GameObjectConfig } from '../game-object/types';
import type { Player } from '../player';
import type { WeaponsList } from './weapons.config';

export type WeaponsConfig = Pick<GameObjectConfig, 'ctx' | 'canvas'> & {
  weaponType?: WeaponsList;
  shooter: Player;
};

export type WeaponType = {
  [key in WeaponsList]: WeaponOptions;
};

export type WeaponOptions = {
  timeRecharge: number;
  costProjectiles: number;
  damage: number;
};
