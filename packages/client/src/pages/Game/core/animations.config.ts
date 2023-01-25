import { playerAnimations } from './entities/player/animations';
import { resourceAnimations } from './entities/resource/animations';
import { projectileAnimations } from './entities/projectile/animations';
import { enhancementAnimations } from './entities/enhancement/animations';
import { alienAnimations } from './entities/alien/animations';
import type { AnimationKey } from './constants';

export type AnimationType = { [key in AnimationKey]: [number, number][] };

/**
 * Конфигурация всех анимаций игры: объект из анимаций по ключу и двумерного массива --
 * разбивкой по кадрам `fly: [[0,0], [1,0], [2,0], [3,0]]`.
 * */
export const animationsConfig: AnimationType = {
  ...playerAnimations,
  ...resourceAnimations,
  ...projectileAnimations,
  ...enhancementAnimations,
  ...alienAnimations,
};
