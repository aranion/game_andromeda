import { ResourceType } from '../../entities/resource/resource.config';
import { Coordinates } from '../../types';

export type ResourceHintsConfig = {
  ctx: CanvasRenderingContext2D;
};

export type ResourseHint = {
  position: Coordinates;
  resourceType: ResourceType;
  opacity: number;
  color: string;
};

export type ResourseHintConfig = Omit<ResourseHint, 'opacity' | 'color'>;

export type HintColors = {
  [key in ResourceType]: string;
};

export type HintValues = {
  [key in ResourceType]: number;
};
