import { resourceConfig } from '../../entities/resource/resource.config';
import type { EntriesResourceConfig, HintColors, HintValues } from './types';

export const hintColors: HintColors = {
  iron: '#A59C94',
  nickel: '#295c5c',
  gold: '#FFD700',
  platinum: '#E5E1E6',
  titan: '#A0A0A0',
  damage: '#AD0303',
};

const listHintValues: HintValues = (
  Object.entries(resourceConfig) as EntriesResourceConfig
).reduce((res, [key, { value }]) => {
  res[key] = value;

  return res;
}, {} as HintValues);

export const hintValues: HintValues = {
  ...listHintValues,
  damage: -1,
};

export const hintConfig = {
  opacityTime: 3000,
  hintSpeed: 0.5,
  letterSize: 30,
};
