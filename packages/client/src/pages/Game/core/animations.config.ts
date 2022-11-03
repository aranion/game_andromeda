import { playerAnimations } from './entities/player/animations';
import { AnimationKey } from './constants';
import { resourceAnimations } from './entities/resource/animations';

export type AnimationType = { [key in AnimationKey]: [number, number][] };

/**
 * Конфигурация всех анимаций игры: объект из анимаций по ключу и двумерного массива --
 * разбивкой по кадрам `fly: [[0,0], [1,0], [2,0], [3,0]]`.
 * */
export const animationsConfig: AnimationType = {
  ...playerAnimations,
  ...resourceAnimations,
};
