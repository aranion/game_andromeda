import type { ResourceType } from '../../entities/resource/resource.config';
import type { Multiplier } from '../../entities/resource/types';
import type { Coordinates } from '../../types';

export type ResourceHintsConfig = {
  ctx: CanvasRenderingContext2D;
};

export type ResourceHint = {
  position: Coordinates;
  resourceType: ResourceType;
  opacity: number;
  color: string;
  multiplier: Multiplier;
};

export type ResourceHintConfig = Omit<ResourceHint, 'opacity' | 'color'>;

export type HintColors = {
  [key in ResourceType]: string;
};

export type HintValues = {
  [key in ResourceType]: number;
};
