import { weapons, WeaponsList } from './weapons.config';
import { Projectile } from '../projectile';
import type { Player } from './../player/index';
import type { WeaponsConfig } from './types';
import { Images } from '../../images';

export class Weapon {
  protected readonly canvas: HTMLCanvasElement;
  protected readonly ctx: CanvasRenderingContext2D;
  private readonly shooter: Player;
  private isRecharge = false;
  private weaponType: WeaponsList;

  constructor(config: WeaponsConfig) {
    const { weaponType, canvas, ctx, shooter } = config;

    this.weaponType = weaponType ?? WeaponsList.Rocket;
    this.shooter = shooter;
    this.ctx = ctx;
    this.canvas = canvas;
  }

  get getWeaponOptions() {
    return weapons[this.weaponType];
  }

  get getRechargeOptions() {
    const { timeRecharge } = this.getWeaponOptions;

    return {
      isRecharge: this.isRecharge,
      timeRecharge,
    };
  }

  set setWeaponType(value: WeaponsList) {
    this.weaponType = value;
  }

  public shot() {
    const { timeRecharge } = this.getWeaponOptions;

    if (!this.isRecharge) {
      this.isRecharge = true;

      setTimeout(() => {
        this.isRecharge = false;
      }, timeRecharge);

      return new Projectile({
        ...this.getWeaponOptions,
        canvas: this.canvas,
        ctx: this.ctx,
        type: this.weaponType,
        position: { ...this.shooter.getPosition },
        direction: { ...this.shooter.getDirection },
        valueDamage: this.getWeaponOptions.damage,
      });
    } else {
      return null;
    }
  }
}
