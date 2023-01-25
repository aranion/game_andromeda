import type { AlienConfig } from './types';

const defaultAlienStats = {
  speed: 2,
  radius: 28,
  aggroRadius: 200,
};

export function createAlienConfig(
  images: string[]
): Omit<AlienConfig, 'canvas' | 'ctx'> {
  const image = images[0];
  return {
    ...defaultAlienStats,
    image,
  };
}
