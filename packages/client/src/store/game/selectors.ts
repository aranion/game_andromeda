import type { RootState } from 'src/store';

export const all = (state: RootState) => state.game;

export const hightScore = (state: RootState) => all(state).hightScore;
export const gameStatus = (state: RootState) => all(state).gameStatus;
