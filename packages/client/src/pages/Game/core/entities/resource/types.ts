import { GameObjectConfig } from '../game-object/types';
import { resourceConfig } from './resource.config';

type ResourceType = keyof typeof resourceConfig;

export type ResourceConfig = Omit<GameObjectConfig, 'imageSrc' | 'position'> & {
  type?: ResourceType;
};
