import { dataUrlImages } from '../utils/dataUrlImages';
import type { ImagesGame } from './types';
import asteroid1 from '../assets/asteroid/asteroid1.png';
import asteroid2 from '../assets/asteroid/asteroid2.png';
import asteroid3 from '../assets/asteroid/asteroid3.png';
import asteroid4 from '../assets/asteroid/asteroid4.png';
import baseSpaceshipHealthy from '../assets/spaceship/base_spaceship_healthy_sprite.png';
import baseSpaceshipBattered from '../assets/spaceship/base_spaceship_battered_sprite.png';
import baseSpaceshipDamaged from '../assets/spaceship/base_spaceship_damaged_sprite.png';
import baseSpaceshipWrecked from '../assets/spaceship/base_spaceship_wrecked_sprite.png';
import baseSpaceshipHealthyShield from '../assets/spaceship/base_spaceship_healthy_sprite_shield.png';
import baseSpaceshipBatteredShield from '../assets/spaceship/base_spaceship_battered_sprite_shield.png';
import baseSpaceshipDamagedShield from '../assets/spaceship/base_spaceship_damaged_sprite_shield.png';
import baseSpaceshipWreckedShield from '../assets/spaceship/base_spaceship_wrecked_sprite_shield.png';
import enhancementShield from '../assets/enhancement/shield.png';
import enhancementLives from '../assets/enhancement/lives.png';
import enhancementSpeed from '../assets/enhancement/speed.png';
import enhancementDoubling from '../assets/enhancement/multiplier.png';
import resourceSprite from '../assets/resource/resource.png';

export class Images {
  private images: ImagesGame | null = null;

  get getImages() {
    return this.images;
  }

  public async downloadImages() {
    const asteroids = await dataUrlImages([
      asteroid1,
      asteroid2,
      asteroid3,
      asteroid4,
    ]);
    const player = await dataUrlImages([
      baseSpaceshipHealthy,
      baseSpaceshipBattered,
      baseSpaceshipDamaged,
      baseSpaceshipWrecked,
      baseSpaceshipHealthyShield,
      baseSpaceshipBatteredShield,
      baseSpaceshipDamagedShield,
      baseSpaceshipWreckedShield,
    ]);
    const enhancement = await dataUrlImages([
      enhancementShield,
      enhancementLives,
      enhancementSpeed,
      enhancementDoubling,
    ]);
    const resource = await dataUrlImages([resourceSprite]);

    this.images = {
      asteroids,
      player,
      enhancement,
      resource,
    };
  }
}
