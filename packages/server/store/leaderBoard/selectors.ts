import type { RootState } from '../getInitialState';

export const all = (state: RootState) => state.leaderBoard;

export const leaders = (state: RootState) => all(state).leaders;
