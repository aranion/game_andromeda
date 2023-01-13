import type { Player } from '../../entities/player';
import type { CanvasProperties } from '../../types';

export type GameThemeConfig = CanvasProperties & {
  player: Player;
};
