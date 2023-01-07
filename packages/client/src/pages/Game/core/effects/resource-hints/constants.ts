import {
  resourceConfig,
  ResourceType,
} from '../../entities/resource/resource.config';
import type { HintColors, HintValues } from './types';

export const hintColors: HintColors = {
  iron: '#A59C94',
  nickel: '#295c5c',
  gold: '#FFD700',
  platinum: '#E5E1E6',
  titan: '#A0A0A0',
};

// было бы круто избавитьсся от такого "ручного" копирования полностью
// если есть у кого идеи, предлагайте!
export const hintValues: HintValues = {
  iron: resourceConfig[ResourceType.Iron].value,
  nickel: resourceConfig[ResourceType.Nickel].value,
  titan: resourceConfig[ResourceType.Titan].value,
  gold: resourceConfig[ResourceType.Gold].value,
  platinum: resourceConfig[ResourceType.Platinum].value,
};

export const opcityTime = 1500;
export const hintSpeed = 3;
export const letterSize = 30;
