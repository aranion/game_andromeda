import type { ResourceType } from '../../entities/resource/resource.config';
import type { Coordinates } from '../../types';

export type ResourceHintsConfig = {
  ctx: CanvasRenderingContext2D;
};

export enum OtherHintType {
  Damage = 'damage',
  ExtraLife = 'extraLife',
  Shot = 'shot',
}

export type ResourceHint = {
  position: Coordinates;
  resourceType: ResourceType | OtherHintType;
  opacity: number;
  color: string;
  multiplier?: number;
  isShield?: boolean;
  isFullLives?: boolean;
};

export type ResourceHintConfig = Omit<ResourceHint, 'opacity' | 'color'>;

export type HintColors = {
  [key in ResourceType]: string;
} & { [key in OtherHintType]: string };

export type HintValues = {
  [key in ResourceType]: number;
} & { [key in OtherHintType]: number };

export type EntriesResourceConfig = [keyof HintValues, { value: number }][];
