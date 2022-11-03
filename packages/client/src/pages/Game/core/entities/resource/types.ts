import { GameObjectConfig } from '../game-object/types';

export type ResourceConfig = Omit<GameObjectConfig, 'imageSrc' | 'position'> & {
  type?: string;
};
