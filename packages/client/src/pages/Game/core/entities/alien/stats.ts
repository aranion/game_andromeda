import alien from '../../assets/alien/base_alien.png';
import type { AlienConfig } from './types';

const defaultAlienStats = {
  speed: 2,
  radius: 28,
  aggroRadius: 200,
};

export function createAlienConfig(): Omit<AlienConfig, 'canvas' | 'ctx'> {
  return {
    aggroRadius: defaultAlienStats.aggroRadius,
    radius: defaultAlienStats.radius,
    speed: defaultAlienStats.speed,
    imageSrc: alien,
  };
}
