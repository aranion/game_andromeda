import type { RootState } from '../getInitialState';

export const all = (state: RootState) => state.game;

export const hightScore = (state: RootState) => all(state).hightScore;
