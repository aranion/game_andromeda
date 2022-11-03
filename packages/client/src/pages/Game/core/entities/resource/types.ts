import { GameObjectConfig } from '../game-object/types';
import { ResourceType } from './resource.config';

export type ResourceConfig = Omit<GameObjectConfig, 'imageSrc' | 'position'> & {
  type?: ResourceType;
};
